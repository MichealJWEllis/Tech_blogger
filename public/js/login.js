

async function loginFormHandler(event) {
    event.preventDefault();

    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    if (email && password) {
        const response = await fetch('/api/users/login', {
            method: 'post',
            body: JSON.stringify({
                email,
                password
            }),
            headers: { 'Content-Type': 'application/json' }
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            // alert(response.statusText);
            $(document).ready(function () {
                $("#myModal").modal('show');
                document.querySelector('.login-form').reset()
            });


        }
    }
}

async function createUser(event) {
    event.preventDefault();
    document.location.replace('/user');
    // console.log('clicked')
}



document.querySelector('.login-form').addEventListener('submit', loginFormHandler);

document.querySelector('.sign-upBtn').addEventListener('submit', createUser)



