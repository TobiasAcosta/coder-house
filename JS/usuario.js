const btnRegister = document.getElementById('btn__register');
const formRegister = document.getElementById('user__register');
const btnLogin = document.getElementById('btn__login');
const formLogin = document.getElementById('user__login');

let usuarios = JSON.parse(localStorage.getItem('usuarios'));

class newUser {
    constructor(user, pass){
        this.id = usuarios.length + 1;
        this.user = user;
        this.pass = pass;
        this.admin = false ;
    }
}

btnLogin.addEventListener('click',(e) => { //e se refiere al event en si
    e.preventDefault();
    const user = formLogin.children[0].children[1].value;
    const pass = formLogin.children[1].children[1].value;

    validarLogin(user, pass);
} )

const validarLogin = (user, pass) => {

    const validacionUser = usuarios.find((usuario) => usuario.user === user);

    if(validacionUser === undefined || validacionUser.pass !== pass){
        alert('Usuario o contraseña incorrecta');
    }else {
        alert(`Bienvenido ${user}`);

        let usuario = { //se crea el user
            user: validacionUser.user,
            pass: validacionUser.pass,
            admin: validacionUser.admin
        }
        sessionStorage.setItem('usuario', JSON.stringify(usuario)); //se sube
        location.href = '../index.html';
    }
}

btnRegister.addEventListener('click',(e) => { //e se refiere al event en si
    e.preventDefault();
    const user = formRegister.children[0].children[1].value;
    const pass = formRegister.children[4].children[1].value;
    
    const nuevoUsuario = new newUser(user, pass);

    validarRegister(nuevoUsuario);
} )

const validarRegister = (nuevoUsuario) => {

    const nuevoUser = usuarios.find((usuario) => usuario?.user == nuevoUsuario.user);

    if(nuevoUser === undefined){
        usuarios.push(nuevoUsuario);

        localStorage.setItem('usuarios', JSON.stringify(usuarios));// se setea usuarios en el localstorage
        sessionStorage.setItem('usuario', JSON.stringify(nuevoUsuario));//se sube el nuevo user

        alert(`Gracias por registrarte ${nuevoUsuario.user}....`);
        location.href = '../index.html';
    }else {
        alert(`El usuario ya existe...`);

        sessionStorage.setItem('usuario', JSON.stringify(usuario)); //se sube
        location.href = '../index.html';
    }
}