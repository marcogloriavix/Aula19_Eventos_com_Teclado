const linkPerfil = document.getElementById("link-perfil");
const navPerfil = document.getElementById("nav-perfil");
const linkPerfilDados = document.getElementById("link-perfil-dados")

linkPerfil.addEventListener("mouseover", ()=> {
  navPerfil.style.display = "block"
})

//Função de utilizar o teclado , onde clicando na tecla "1", abre o menu "1.Perfil"
document.addEventListener("keyup", (e)=>{
  console.log(e.key)
  console.log(e.code)

  //estando dentro do menu de navagação secundária, ao clicar novamente "1", deve entrar para o menu "1.Perfil".
  // entre para o menu "1-Meus dados"
  if(navPerfil.style.display =="block"){
      if(e.code== "Digit1"){
        linkPerfilDados.click()
    }
  } else if(e.code== "Digit1"){
    // no momento que clicar tecla '1', a barra de navegação secundária vai aparecer
    console.log("Exibir navegação secundária")
    navPerfil.style.display = "block"
  }

})

