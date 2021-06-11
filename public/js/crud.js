async function postInfo(event) {
    event.preventDefault();


    const title = document.querySelector("#pstTitle").value.trim()
    const postText = document.querySelector("#pstDesc").value.trim()

    // console.log(pstTitle)
    // console.log(pstDesc)

    if (title && postText) {
        const response = await fetch('/api/posts', {
            method: 'post',
            body: JSON.stringify({
                title,
                postText
            }),
            headers: { 'Content-Type': 'application/json' }

        })
        if (response.ok) {
            // document.location.replace('/dashboard');
            $(document).ready(function () {
                $("#myModal").modal('show');
                document.querySelector('.postForm').reset()
                // document.location.replace('/dashboard')
            });
        } else {
            alert(response.statusText);
        }

    }
}

document.querySelector(".createPst").addEventListener('click', postInfo)