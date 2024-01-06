//Estando no menu de navegação secundária, agora Clicando na tecla "Esc", 
//volta para a pagina principal (estando no menu 1-Perfil)

console.log("conexão com perfil-dados")

const linkVoltarPaginaPrincipal = document.getElementById("link-voltar-pagina-principal");

//Função de utilizar o teclado , onde clicando na tecla "Esc", volta para a pagina principal (estando no menu 1-Perfil)
document.addEventListener("keyup", (e)=>{
    console.log(e.key)
    console.log(e.code)

  //estando dentro do menu de navegação secundária, ao clicar "Escape", deve voltar para a pagina principal
 if(e.code== "Escape"){
  // no momento que clicar tecla 'Escape', deve voltar para a pagina principal
  console.log("voltar pagina principal")
  linkVoltarPaginaPrincipal.click()
}

})

