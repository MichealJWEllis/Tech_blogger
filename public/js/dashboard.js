function addComment(clicked_id) {
    document.getElementById(`postArea${clicked_id}`).innerHTML =
        '<div id="commentInput"><textarea id="commentInfo" class="d-flex mb-2 mt-2 ml-4" style="width: 600px; height: 80px;"></textarea>' +
        '<button type="button" id=' + `${clicked_id}` + ' class="btn btn-primary ml-4" onclick="postComment(this.id)">add comment</button></div>'
}

async function postComment(clicked_id) {

    const comment_text = document.querySelector('#commentInfo').value.trim()
    const post_id = clicked_id
    const user_id = ($('.userId').attr('id'))

    if (user_id && post_id && comment_text) {
        const response = await fetch('/api/comments', {
            method: 'post',
            body: JSON.stringify({
                user_id,
                post_id,
                comment_text
            }),
            headers: { 'Content-Type': 'application/json' }
        })
        if (response.ok) {
            document.location.replace('/dashboard')
        }
    }

    var myobj = document.getElementById("commentInput");
    myobj.remove();
}

async function updatePost(clicked_id) {
    $(document).ready(function () {
        $("#myModal").modal('show')
        $("#myModal").on('click', '.btn-primary', async function (event) {
            event.preventDefault();

            id = clicked_id
            postText = $('#pstDesc').val().trim();
            title = $('#pstTitle').val().trim();

            if (id && postText && title) {
                const response = await fetch(`/api/posts/${id}`, {
                    method: 'put',
                    body: JSON.stringify({
                        postText,
                        title
                    }),
                    headers: { 'Content-Type': 'application/json' }
                })
                if (response.ok) {
                    document.location.replace('/dashboard')
                }
            }
        })
        $('#myModal').on('hidden.bs.modal', function (e) {
            $(this)
                .find("input,textarea,select")
                .val('')
                .end()
        })
    })
}

async function delPost(clicked_id) {
    // console.log('test')
    // console.log(clicked_id)

    $(document).ready(function () {
        $("#myModal2").modal('show');
        $("#myModal2").on('click', '.confirm', async function (event) {
            console.log("clicked yes")

            id = clicked_id
            console.log(id)

            if (id) {
                const response = await fetch(`/api/posts/${id}`, {
                    method: 'delete',
                })

                if (response.ok) {
                    document.location.replace('/dashboard')
                }
            }


        })

    });
}
