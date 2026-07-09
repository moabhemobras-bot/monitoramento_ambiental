/* ==========================================================
   MONITORAMENTO AMBIENTAL
   Serviço de Laboratório
   Versão 4.0
========================================================== */

/* ---------- LOGIN ÁREA MOAB ---------- */

const usuariosMOAB = {

    "aline.souza":"2204",
    "elton.nascimento":"0506",
    "emanuelly.sousa":"1607",
    "eraldo.junior":"2706",
    "flavia.monte":"0203",
    "flavio.silva":"0104",
    "henrique.costa":"1402",
    "julio.silva":"1705",
    "marcella.silva":"1004",
    "lucia.pontes":"1602",
    "matheus.silva":"1604",
    "miriam.barbosa":"0901",
    "paulo.barros":"1806",
    "raila.sabino":"1611",
    "thiago.ramos":"0112",
    "vanessa.pontes":"0503",
    "vladimir.almeida":"1808"

};

const LINK_MOAB =
"https://moabhemobras-bot.github.io/monitoramento-ambiental/";


function abrirLoginMOAB(){

    document.getElementById("loginMOAB").style.display="flex";

    document.getElementById("usuarioMOAB").value="";

    document.getElementById("senhaMOAB").value="";

    document.getElementById("erroMOAB").textContent="";

    document.getElementById("usuarioMOAB").focus();

}


function fecharLoginMOAB(){

    document.getElementById("loginMOAB").style.display="none";

}


function entrarMOAB(){

    const usuario=document
        .getElementById("usuarioMOAB")
        .value
        .trim()
        .toLowerCase();

    const senha=document
        .getElementById("senhaMOAB")
        .value;

    if(usuariosMOAB[usuario]===senha){

        fecharLoginMOAB();

        window.open(
            LINK_MOAB,
            "_blank"
        );

    }

    else{

        document
            .getElementById("erroMOAB")
            .textContent="Usuário ou senha incorretos.";

    }

}

/* ---------- ENTER LOGIN ---------- */

document
.getElementById("usuarioMOAB")
.addEventListener("keydown",function(e){

    if(e.key==="Enter"){

        entrarMOAB();

    }

});

document
.getElementById("senhaMOAB")
.addEventListener("keydown",function(e){

    if(e.key==="Enter"){

        entrarMOAB();

    }

});


/* =======================================================
   SENHAS DOS BOTÕES
======================================================= */

let linkProtegido="";

let senhaProtegida="";


function abrirSenha(link,senha){

    linkProtegido=link;

    senhaProtegida=senha;

    document
    .getElementById("modalSenha")
    .style.display="flex";

    document
    .getElementById("senhaSimples")
    .value="";

    document
    .getElementById("erroSenha")
    .textContent="";

    document
    .getElementById("senhaSimples")
    .focus();

}


function fecharSenha(){

    document
    .getElementById("modalSenha")
    .style.display="none";

}


function validarSenha(){

    const senhaDigitada=document
        .getElementById("senhaSimples")
        .value;

    if(senhaDigitada===senhaProtegida){

        fecharSenha();

        window.open(

            linkProtegido,

            "_blank"

        );

    }

    else{

        document
        .getElementById("erroSenha")
        .textContent="Senha incorreta.";

    }

}


/* ---------- ENTER SENHA ---------- */

document
.getElementById("senhaSimples")
.addEventListener("keydown",function(e){

    if(e.key==="Enter"){

        validarSenha();

    }

});


/* ---------- FECHAR MODAL AO CLICAR FORA ---------- */

window.onclick=function(event){

    const modal1=document.getElementById("loginMOAB");

    const modal2=document.getElementById("modalSenha");

    if(event.target===modal1){

        fecharLoginMOAB();

    }

    if(event.target===modal2){

        fecharSenha();

    }

};
