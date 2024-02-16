const boton_Encriptar = document.querySelector(".btn_encriptar");
const boton_Desencriptar = document.querySelector(".btn_desencriptar");
const boton_Copiar = document.querySelector(".btn_copiar")
const letras = /[A-Z~!@#$%^&*()_+|}{[\]\\\/?=><:"`;.,áéíóúàèìòù'1-9]/g; 

function validar(){
    let nMensaje = document.querySelector(".contenedor_text").value;
    if (nMensaje.match(letras) != null) {
        limpiar()
        foco()
        
    }
}

function encriptar(){
    let nTexto = document.querySelector(".contenedor_text").value.trimStart();
    nTexto;
    nTexto = nTexto
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");

    nTexto;

    document.getElementById("tArea").value = nTexto;
    document.getElementById("tArea").style.color = "#495057";
    ocultarImagen();
}

function desencriptar(){
    let nTexto = document.querySelector(".contenedor_text").value;
    nTexto;
    nTexto = nTexto
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");

    nTexto;

    document.getElementById("tArea").value = nTexto;
    document.getElementById("tArea").style.color = "#495057";
    ocultarImagen();
}


function copiar(){
    document.querySelector(".contenedor_text").placeholder = "";
    let textCopi = document.getElementById("tArea");
    textCopi.select();
    document.execCommand("copy");
    limpiar();

    foco();
    Swal.fire({
        position: "center",
        icon: "success",
        title: "Texto Copiado",
        showConfirmButton: false,

        timer: 1500
    });
}

function ocultarImagen(){
    var textoVacio = "";
    let textoT = document.getElementById("tArea").value;
    textoT;
    if(textoVacio !== textoT){
        document.querySelector(".sec_parrafo").style.display = "none";
    }else{
        document.querySelector(".sec_parrafo").style.display = "";
    }
}

function limpiar(){
    document.querySelector(".contenedor_text").value = "";
    document.getElementById("tArea").value = "";
}

function foco(){
    document.querySelector(".contenedor_text").focus();
}

foco();
boton_Encriptar.addEventListener("click", validar);
boton_Encriptar.addEventListener("click", encriptar);

boton_Desencriptar.addEventListener("click", validar);
boton_Desencriptar.addEventListener("click", desencriptar);

boton_Copiar.addEventListener("click", copiar);