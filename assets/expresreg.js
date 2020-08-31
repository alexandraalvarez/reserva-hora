function init() {
}

function validar(){
    //poner coma al declarar una variable evita poner var a cada una de ellas...
    var rut, nombre, apellidos, edad, correo, especialidad, fecha, hora, expresionRut, expresionCorreo, expresionLetraEspacio, 
    expresionNumero, expresionFecha, rutVal, nombreVal, apellVal, edadVal, correoVal, fechaVal;

    //asignando valor a las variables...
    rut = document.getElementById("rut").value;
    nombre = document.getElementById("nombre").value;
    apellidos = document.getElementById("apellidos").value;
    edad = document.getElementById("edad").value;
    correo = document.getElementById("correo").value;
    especialidad = document.getElementById("especialidad").value;
    fecha = document.getElementById("fecha").value;
    hora = document.getElementById("hora").value;

    //expresiones regulares
    expresionRut = /^[0-9]+[-]{1}[0-9kK]{1}$/;
    expresionCorreo = /[\w\d\_\-]+@\w+\.+[a-z]+/; 
    expresionLetraEspacio = /^[a-z\s]+$/; 
    expresionNumero = /^(\d{1,2})$/;
    expresionFecha = /^(20\d{2})\-(0[1-9]|1[0-2])\-(0[1-9]|[12]\d|3[0-1])$/;
    //expresionHora = /^([01]\d|2[0-3])\:([0-5]\d)$/;

    //funciones test validar
    rutVal = expresionRut.test(rut);
    nombreVal = expresionLetraEspacio.test(nombre);
    apellVal = expresionLetraEspacio.test(apellidos);
    edadVal = expresionNumero.test(edad);
    correoVal = expresionCorreo.test(correo);
    fechaVal = expresionFecha.test(fecha);

    //condiciones para validar campos
    if (rutVal == false) {
        alert("Ingrese un rut con guion y sin puntos");
        return false;
    } else if (nombreVal == false) {
        alert("El nombre solo acepta letras y espacios");
        return false;
    } else if (apellVal == false) {
        alert("El apellido solo acepta letras y espacios");
        return false;
    } else if (edadVal == false) {
        alert("Ingrese un número entre 0 y 99");
        return false;
    } else if (correoVal == false) {
        alert("El correo no es válido");
        return false;
    } else if (fechaVal == false) {
        alert("Ingrese una fecha válida (1900-2099");
        return false;
    } else {
        function validExito() {
            var node = document.createElement("H2");    
            var textnode = document.createTextNode(`Estimado(a) ${nombre} ${apellidos}, su hora para ${especialidad} ha sido reservada para el día ${fecha} 
            a las ${hora}. Además, se le envió un mensaje a su correo ${correo} con el detalle de su cita. Gracias por preferirnos.`);        
            node.appendChild(textnode);                              
            document.getElementById("msjHoraConf").appendChild(node);
        }
        validExito();
    }
}
var botonSubmit = document.getElementById("btn-send")
botonSubmit.addEventListener("click", function (evento) {
    evento.preventDefault();
    validar();
});

