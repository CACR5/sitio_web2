function procesar(){
    var Nombre = document.getElementById('nombre').value;
    var Apellido = document.getElementById('apellido').value;
    var Correo = document.getElementById('correo').value;
    var Telefono = document.getElementById('telefono').value;
    var opción = document.getElementById('Opcion').value;
    var Opcion = document.getElementById('opcion').value;

    if(Nombre==""||Apellido==""||Correo==""||Telefono==""||opción==""||Opcion==""){
        alert("Debe completar todos los campos");
    }else{
        if(Opcion=="BRONCE"){
            var bronce = 25000;
            alert("Debe pagar: "+bronce);
        } else if(Opcion=="PLATA"){
            var plata = 45000;
            alert("Debe pagar: "+plata);
        }else if(Opcion=="GOLD"){
            var oro = 400000;
            alert("Debe pagar: "+oro);

        }
        nube=window.localStorage;
        let  dato=JSON.parse(nube.getItem('DatosCalculo')) || [];
        dato.push({Nombre,Apellido,Correo,Telefono,opción,Opcion});
        
        pero = JSON.stringify(dato);
        nube.setItem('DatosCalculo',pero)
        alert("Datos guardados: "+Nombre)
    }
}