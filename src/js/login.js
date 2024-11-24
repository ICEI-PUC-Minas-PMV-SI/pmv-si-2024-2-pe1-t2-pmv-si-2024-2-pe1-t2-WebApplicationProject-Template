import axios from 'axios';

async function registerLoginCredential() {
    
    const login = document.getElementById("txtLogin").value;
    const password = document.getElementById("txtSenha").value;
    const name = document.getElementById("txtNome").value;
    const email = document.getElementById("txtEmail").value;

    const inputCredential = {
        login,
        password,
        name,
        email
    };

    await axios.post(`http://localhost:3000/login_credentials`, inputCredential);
    document.getElementById('registerForm').reset();
}

async function checkIfLoginExists(inputCredential) {
    const { data: credential_list } = await axios.get("http://localhost:3000/login_credentials");

    foundLogin = credential_list.find(credential => credential.username === inputCredential.username);

    if (foundLogin && foundLogin.password === inputCredential.password) {
        // login successful
        console.log("LOGIN SUCESSFULL!!!");
    } else {
        // login failed
        console.log("Please check you login and password!");
    }

}

// include functions on global scope of the window
window.registerLoginCredential = registerLoginCredential;
window.checkIfLoginExists = checkIfLoginExists;