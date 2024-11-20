import axios from 'axios';

async function registerLoginCredential(inputCredential) {
    await axios.put(`http://localhost:3000/login_credentials/${inputCredential.id}`, inputCredential);
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