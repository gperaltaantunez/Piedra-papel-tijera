
// Hacer un programa que le permita a dos usuarios jugar al piedra, papel o tijera

// El primer usuario tiene que ingresar su eleccion
// Si no ingresa piedra, papel o tijera le decimos que no puede jugar
// Despues el segundo usuario
// Les respondemos quien gano .

// let elecciónDelUsuario = prompt("¿Querés jugar al piedra, papel o tijera?");
let usuarioUno = prompt("Usuario Uno, ingresá 💎piedra, 📜papel o ✂️tijera");
let piedra = "piedra"
let papel = "papel"
let tijera = "tijera"


if (usuarioUno == piedra || usuarioUno == papel || usuarioUno == tijera) {
    alert(`Ingresaste ${usuarioUno}`)
}
    else { alert("La opción no es válida")
    };

let usuarioDos = prompt("Usuario Dos, ingresá 💎piedra, 📜papel o ✂️tijera");

if (usuarioDos == piedra || usuarioDos == papel || usuarioDos == tijera) {
    alert(`Ingresaste ${usuarioDos}`)
}
    else { alert("La opción no es válida")
    };

if (usuarioUno == piedra && usuarioDos == tijera) {
    alert("🏅Ganó el usuario uno!")
}
    else if (usuarioUno == piedra && usuarioDos == papel) {
        alert("🏅Ganó el usuario dos!")
    }
    else if (usuarioUno == papel && usuarioDos == piedra) {
        alert("🏅Ganó el usuario uno!")
    }
    else if (usuarioUno == papel && usuarioDos == tijera) {
        alert("🏅Ganó el usuario dos!")
    }
    else if (usuarioUno == tijera && usuarioDos == piedra) {
        alert("🏅Ganó el usuario dos!")
    }
    else if (usuarioUno == tijera && usuarioDos == papel) {
        alert("🏅Ganó el usuario uno!")
    }

    else { alert("Empataron!")
    };
    









