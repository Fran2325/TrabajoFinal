var dia= new Date();
document.getElementById("fecha").innerHTML=dia;

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("formulario").addEventListener('submit', validarFormulario); 
  });
  
  function validarFormulario(evento) {
    evento.preventDefault();
    var nombre = document.getElementById('nombre').value;
    if(nombre.length == 0) {
      alert('Ingresa tu nombre');
      return;
    }
    var correo = document.getElementById('correo').value;
    if (correo.length == 0) {
      alert('Ingrese un correo válido');
      return;
    }
    var mensaje = document.getElementById('mensaje').value;
    if (mensaje.length == 0) {
      alert('No haz escrito nada en el mensaje');
      return;
    }
    this.submit();
  }
$(document).ready(function () {
    $('#example').DataTable();
  });


