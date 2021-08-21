function Procesar(){
    var nombre = document.getElementById('nombre').value;
    var apellido = document.getElementById('apellido').value;
    var correo = document.getElementById('correo').value;
    var telefono = document.getElementById('telefono').value;
    var sexo = document.getElementById('sexo').value;
    var edad = document.getElementById('edad').value;
    var fecha = document.getElementById('fecha').value;
    var hora = document.getElementById('hora').value;
    var opción = document.getElementById('Opcion').value;
    var opcion = document.getElementById('opcion').value;
    var decoracion = document.getElementById('decoracion').value;
    var op = document.getElementById('OPCION').value;

    if(nombre==""||apellido==""||correo==""||telefono==""||sexo==""||opción==""||fecha==""||opcion==""||edad==""||hora==""||decoracion==""||op==""){
        alert("Debe completar todos los campos");
    }else{
        if(opcion=="BRONCE"){
            var bronce = 25000;
            alert("Debe pagar: "+bronce);
        } else if(opcion=="PLATA"){
            var plata = 45000;
            alert("Debe pagar: "+plata);
        }else if(opcion=="GOLD"){
            var oro = 400000;
            alert("Debe pagar: "+oro);
        }
        nube=window.localStorage;
        let  dato=JSON.parse(nube.getItem('DatosRegistro')) || [];
        dato.push({nombre,apellido,correo,telefono,opción,fecha,opcion,sexo,edad,hora,decoracion,op});
        
        pero = JSON.stringify(dato);
        nube.setItem('DatosRegistro',pero)
        alert("Datos guardados: "+nombre)  
    }
}