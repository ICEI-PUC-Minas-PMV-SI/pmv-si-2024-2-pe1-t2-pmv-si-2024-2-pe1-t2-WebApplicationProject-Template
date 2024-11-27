import axios from 'axios';
import { log } from 'console';
import { execPath } from 'process';

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

    try {
        await axios.post(`http://localhost:3000/login_credentials`, inputCredential);
        alert(`Olá ${login}! Registramos seus dados com sucesso!`);
    } catch(err) {
        alert("Não foi possível registrar sua conta. Tente novamente mais tarde.");
    }
    document.getElementById('registerForm').reset();
}

async function checkIfLoginExists() {

    const login = document.getElementById("loginName").value;
    const password = document.getElementById("loginPassword").value;

    const inputCredential = {
        login,
        password
    };

    const { data: credential_list } = await axios.get("http://localhost:3000/login_credentials");
    foundLogin = credential_list.find(credential => credential.login === inputCredential.login);

    if (foundLogin && foundLogin.password === inputCredential.password) {
        alert(`Olá ${login}! Você foi logado com sucesso!`);
    } else {
        alert("Usuário ou Senha Incorretos. Verifique os dados informados.");
    }

}

// include functions on global scope of the window
window.registerLoginCredential = registerLoginCredential;
window.checkIfLoginExists = checkIfLoginExists;