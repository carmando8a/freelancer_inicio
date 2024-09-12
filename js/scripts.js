// Eventos de los Inputs y Textarea

const datos = {
    nombre: '',
    telefono: '',
    correo: '',
    mensaje: ''
}

const nombre = document.querySelector('#nombre');
const telefono = document.querySelector('#telefono');
const correo = document.querySelector('#correo');
const mensaje = document.querySelector('#mensaje');
const formulario = document.querySelector('.formulario');

nombre.addEventListener('input', leerTexto);
telefono.addEventListener('input', leerTexto);
correo.addEventListener('input', leerTexto);
mensaje.addEventListener('input', leerTexto);

// El Evento de Submit
formulario.addEventListener('submit', function(evento) {
    evento.preventDefault();

    // Validar el formulario

    const { nombre, telefono, correo, mensaje } = datos;

   if( nombre === '' || telefono === '' || correo ==='' || mensaje ==='' ) {

       Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Todos los campos son obligatorios',
      })

       return; // Corta la ejecucion del codigo
       
   }

// Crear la otra alerta de enviar el formulario

Swal.fire({
    position: 'center',
    icon: 'success',
    title: 'Mensaje enviado correctamente',
    showConfirmButton: false,
    timer: 3000
  })

});



function leerTexto(e) {
    //  console.log(e.target.value);

    datos[e.target.id] = e.target.value;
    //  console.log(datos);
}


// Muesta una alerta de que se envio correctamente
function mostrarMensaje(mensaje) {
    const alerta = document.createElement('P');
    alerta.textContent = mensaje;
    alerta.classList.add('correcto');


    formulario.appendChild(alerta);

    // desaparezca despues de 5 segundos
    setTimeout(() => {
        alerta.remove();
    }, 5000);
}


// Muestra un Error en pantalla
function mostrarError(mensaje) {
    const error = document.createElement('P');
    error.textContent = mensaje;
    error.classList.add('error');

    formulario.appendChild( error );

    // Desaparezca despues de 5 segundos
    setTimeout(() => {
        error.remove();
    }, 5000);
}


// Boton Menu de Inicio en pantalla pequeña
function accion(){
    console.log('Esta funcionado boton');
    var ancla = document.getElementsByClassName('nav-enlace');
    for( var i = 0; i < ancla.length; i++){
        ancla[i].classList.toggle('desaparece');
    }
}


