
    function acionaCampo (){
        document.getElementById('Password').style.background = "#F0E68C"
    }

    function validaCampo (){
        var valorCampo = document.getElementById('Password').value

        if (valorCampo.length<3) {
            document.getElementById('Password').style.background = "#FF8C00"

        }else{
            document.getElementById('Password').style.background = "#98FB98"
            
        }
    }
