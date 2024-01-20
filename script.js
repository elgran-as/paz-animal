const datoNombre = document.querySelector('#datoNombre');
const datoMensaje = document.querySelector('#datoMensaje');
const btnEnviar = document.querySelector('#btnEnviar');

var mensaje;

function enviar (){
mensaje =`https://api.whatsapp.com/send?phone=+5491169636823&text=${datoNombre.value}%20${datoMensaje.value}`;
btnEnviar.href= mensaje;
}
