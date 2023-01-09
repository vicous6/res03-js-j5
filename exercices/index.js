let title = document.getElementsByClassName("title")
let liste = document.getElementsByClassName("liste")

let icone = document.getElementsByClassName("bi")

let menu = document.getElementById("menu-hide")

let section= document.getElementById("section")

let section2= document.getElementById("section2")

for(let i = 0 ; i < liste.length ; i ++){
    
    
    title[i].addEventListener("click", function(){
        
        
        liste[i].classList.toggle("hide")
       
       icone[i].classList.toggle('rotate')
        
    }
    
    
    )
}

menu.addEventListener('click',function(){
    
    section.classList.toggle("hide")
    
    section2.classList.toggle("border-right")
     section2.classList.toggle("border-bottom")
    
    
    
    
})