let title = document.getElementsByClassName("title")
let liste = document.getElementsByClassName("liste")

let icone = document.getElementsByClassName("bi")

let menu = document.getElementById("menu-hide")

let section= document.getElementById("section")

let section2= document.getElementById("section2")

let button = document.getElementById("button")


let tableBody = document.getElementsByTagName("tbody")


console.log(button)

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

let users = [  
    {  
        id: 0,  
        isActive: false,  
        age: 24,    
        name: "Marsh Obrien" 
    },  
    {  
        id: 1,  
        isActive: false,  
        age: 21,    
        name: "Rios Gibson" 
    },  
    {  
        id: 2,  
        isActive: false,  
        age: 29,  
        name: "Morgan Buchanan"
    },  
    {  
        id: 3,  
        isActive: true,  
        age: 25,    
        name: "Franklin Dyer" 
    },  
    {  
        id: 4,  
        isActive: false,  
        age: 30, 
        name: "Keller Pitts" 
    },  
    {  
        id: 5,  
        isActive: false,  
        age: 25,  
        name: "Davenport Maddox"  
    },  
    {  
        id: 6,  
        isActive: true,  
        age: 31,  
        name: "Juditd Graves"
    },  
    {  
        id: 7,  
        isActive: true,  
        age: 26,  
        name: "Hoffman Hess" 
    },  
    {  
        id: 8,  
        isActive: true,  
        age: 22,  
        name: "Sheena Goff"
    },  
    {  
        id: 9,  
        isActive: false,  
        age: 39,  
        name: "Rose Lawrence" 
    }  
];





button.addEventListener('click', function(){
   
    console.log("coucou")
    for (let i = 0 ; i < users.length;i++){
    
                 
            let tr = document.createElement("tr")
            
            let td1 =document.createElement("td")
            
            td1.style.paddingTop= "0.8rem"
            let td2 =document.createElement("td")
            let td3 =document.createElement("td")
            let td4 =document.createElement("td")
            let td5 =document.createElement("td")
      
      
            td1.textContent = users[i].id;
            td2.textContent = users[i].name;
            td3.textContent = users[i].age;
            
            
            let span4 = document.createElement("span")
            
             span4.setAttribute("class","bi-person-fill-down")
                span4.style.color ="black"
            
             let a4 = document.createElement('a')
             a4.setAttribute("href","https://res03.sites.3wa.io/assets/files/js/j5/demo/etape-3/index.html")
          
            
            
            let span = document.createElement("span")
            span.setAttribute("class","bi-eye")
            let span2 = document.createElement("span")
            span2.setAttribute("class","bi-pen")
            let span3 = document.createElement("span")
            span3.setAttribute("class","bi-trash3")
            span3.style.color ="red"
      
            let a = document.createElement('a')
             a.setAttribute("href","https://res03.sites.3wa.io/assets/files/js/j5/demo/etape-3/index.html")
             
              let a2 = document.createElement('a')
             a2.setAttribute("href","https://res03.sites.3wa.io/assets/files/js/j5/demo/etape-3/index.html")
             
              let a3 = document.createElement('a')
             a3.setAttribute("href","https://res03.sites.3wa.io/assets/files/js/j5/demo/etape-3/index.html")
      
      
            a.appendChild(span)
            td5.appendChild(a)
            
             a2.appendChild(span2)
            td5.appendChild(a2)
            
            a3.appendChild(span3)
            td5.appendChild(a3)
      
            a4.appendChild(span4)
            td4.appendChild(a4)
      
            tr.appendChild(td1)
            tr.appendChild(td2)
            tr.appendChild(td3)
            tr.appendChild(td4)
            tr.appendChild(td5)
          
          tr.style.borderBottom = "1px solid black"
            tableBody[0].appendChild(tr)
        }
    
    
    
    
})

