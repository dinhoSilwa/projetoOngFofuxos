const categoriadePetsItems = document.querySelectorAll(".categoriadePets-item")
const carddogTitulo = document.querySelectorAll(".carddog-dogTitulo")
const carddogEndereco = document.querySelectorAll(".city")
const tagidade = document.querySelectorAll(".carddog-tags-idade")
const taggenero = document.querySelectorAll(".carddog-tags-genero")
const imgLogo = document.querySelector(".imgLogo-img")


const imgDog = document.querySelectorAll(".imgDog")



imgDog.forEach((imgDog, index)=>{

    imgDog.src = `assets/imgs/dogs/dog${index + 1}.png`
   
   })

categoriadePetsItems.forEach((itemDOMenu) =>{
 itemDOMenu.addEventListener("click",(e)=>{
  itemDOMenu.classList.add("itemSelecionado")

  const dog = itemDOMenu.querySelector(".ti").classList.contains("ti-dog")
  const cat = itemDOMenu.querySelector(".ti").classList.contains("ti-cat")

  if(dog){
   getDog()
  }else if(cat){
   getCat()
  }

  categoriadePetsItems.forEach((nSelecionados) =>{
     if(nSelecionados !== itemDOMenu){
      nSelecionados.classList.remove("itemSelecionado")
     }
  })
  
  
 })
})


const toggleMenuBtn = document.querySelectorAll(".toggleMenuBtn")
const heromenuprincipal = document.querySelector(".heromenuprincipal_lista")

toggleMenuBtn.forEach((btnMenu)=>{
 btnMenu.addEventListener("click",()=>{
     if(btnMenu.classList.contains("close")){
      heromenuprincipal.style="display:none"
     }else{
      heromenuprincipal.style="display:flex"
     }
 })


})


const bdPet = {
 pet1: { nome: "Alfredo", idade: "1 ano", cidade: "São José - SP", genero: "macho" },
 pet2: { nome: "Bolinha", idade: "6 meses", cidade: "Americana - SP", genero: "fêmea" },
 pet3: { nome: "Fifi", idade: "2 anos", cidade: "Campinas - SP", genero: "fêmea" },
 pet4: { nome: "Max", idade: "3 anos", cidade: "Sorocaba - SP", genero: "macho" },
 pet5: { nome: "Luna", idade: "8 meses", cidade: "Ribeirão Preto - SP", genero: "fêmea" },
 pet6: { nome: "Mel", idade: "4 anos", cidade: "Santos - SP", genero: "fêmea" },
 pet7: { nome: "Thor", idade: "5 anos", cidade: "Guarulhos - SP", genero: "macho" },
 pet8: { nome: "Nina", idade: "9 meses", cidade: "Osasco - SP", genero: "fêmea" },
 pet9: { nome: "Rex", idade: "2 anos", cidade: "Barueri - SP", genero: "macho" },
 pet10: { nome: "Mia", idade: "7 meses", cidade: "Jundiaí - SP", genero: "fêmea" },
};


const bdPetcat = {
 pet1: { nome: "Simba", idade: "2 anos", cidade: "São Paulo - SP", genero: "macho" },
 pet2: { nome: "Lola", idade: "1 ano e meio", cidade: "Rio de Janeiro - RJ", genero: "fêmea" },
 pet3: { nome: "Gigi", idade: "3 anos", cidade: "Belo Horizonte - MG", genero: "fêmea" },
 pet4: { nome: "Tom", idade: "4 anos", cidade: "Curitiba - PR", genero: "macho" },
 pet5: { nome: "Misty", idade: "6 meses", cidade: "Porto Alegre - RS", genero: "fêmea" },
 pet6: { nome: "Oliver", idade: "2 anos e meio", cidade: "Florianópolis - SC", genero: "macho" },
 pet7: { nome: "Bella", idade: "5 anos", cidade: "Recife - PE", genero: "fêmea" },
 pet8: { nome: "Charlie", idade: "8 meses", cidade: "Salvador - BA", genero: "macho" },
 pet9: { nome: "Daisy", idade: "1 ano", cidade: "Fortaleza - CE", genero: "fêmea" },
 pet10: { nome: "Rocky", idade: "3 anos", cidade: "Brasília - DF", genero: "macho" },
};



function getDog(){
 
carddogTitulo.forEach((nomeDog, index)=>{
 const petkey = `pet${index + 1}`
 nomeDog.textContent = bdPet[petkey].nome
})

carddogEndereco.forEach((cidadeDog, index)=>{
 const petkey = `pet${index + 1}`
 cidadeDog.textContent = bdPet[petkey].cidade
})

tagidade.forEach((idadeDog, index)=>{
 const petkey = `pet${index + 1}`
 idadeDog.textContent = bdPet[petkey].idade

})

taggenero.forEach((generoDog, index)=>{
 const petkey = `pet${index + 1}`
 generoDog.textContent = bdPet[petkey].genero

})


imgDog.forEach((imgDog, index)=>{

 imgDog.src = `assets/imgs/dogs/dog${index + 1}.png`

})


}



function getCat(){
 
 carddogTitulo.forEach((nomeDog, index)=>{
  const petkey = `pet${index + 1}`
  nomeDog.textContent = bdPetcat[petkey].nome
 })
 
 carddogEndereco.forEach((cidadeDog, index)=>{
  const petkey = `pet${index + 1}`
  cidadeDog.textContent = bdPetcat[petkey].cidade
 })
 
 tagidade.forEach((idadeDog, index)=>{
  const petkey = `pet${index + 1}`
  idadeDog.textContent = bdPetcat[petkey].idade
 
 })
 
 taggenero.forEach((generoDog, index)=>{
  const petkey = `pet${index + 1}`
  generoDog.textContent = bdPetcat[petkey].genero
 
 })
 
 
 imgDog.forEach((imgDog, index)=>{
 
  imgDog.src = `assets/imgs/cats/cat${index + 1}.png`
 
 })
 
 
 }
 chargeImgLogo()

function chargeImgLogo(){
   
    const widthWindow = window.innerWidth 
    console.log(widthWindow)
    console.log(imgLogo)
    if(widthWindow < 764) {
        
        imgLogo.src="assets/imgs/logotipo/MOBILE.PNG"
    }else{
        imgLogo.src="assets/imgs/logotipo/logo-menu.png"
    }

}
    




 function crip(){"Dinho Silva"!==document.querySelector(".autor").textContent&&(document.body.style.display="none")}crip();