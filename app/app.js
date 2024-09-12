function login() {
    // Get the form elements
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;
    if (username === '' || password === '') {
        alert('Please fill in both fields.');
    } else {

        alert(`Username: ${username}\nPassword: ${password}`);

    }
}
