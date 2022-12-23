let main = document.querySelector(".asosiy")
let row = document.querySelector(".row")

function render (data) {
  row.innerHTML=""
  data.map(item =>{
    let col = document.createElement("div")
    col.classList.add("col-3")
    col.classList.add("col-box")
    col.setAttribute("data-aos","zoom-in-up")
  
  
    let card = document.createElement("div")
    card.classList.add("card")
    card.classList.add("box")
  
    let img = document.createElement("img")
    img.classList.add("rasm")
    
    
    img.src = item.img
    img.alt = item.Title

    let quti = document.createElement("div")
    quti.classList.add("row")

    let col1 = document.createElement("div")
    col1.classList.add("col-10")

    let col2 = document.createElement("div")
    col2.classList.add("col-2")
  
    let name = document.createElement("h4")
    name.innerText =item.name

    let icon = document.createElement("img")
    icon.classList.add("iconcha")

    icon.src = "./heart.svg"
    icon.setAttribute("onclick", `likeFunc(${item.id-1})`)
  
    let uzunligi = document.createElement("p")
    uzunligi.innerText = item.height

    let massa = document.createElement("p")
    massa.innerText = item.weight

    let turi = document.createElement("p")
    turi.innerText = item.type

    col1.appendChild(name)
    col2.appendChild(icon)
    quti.appendChild(col1)
    quti.appendChild(col2)

    card.appendChild(img)
    card.appendChild(quti)
    card.appendChild(uzunligi)
    card.appendChild(massa)
    card.appendChild(turi)

    col.appendChild(card)

    row.appendChild(col)


  })
}

render(pokemons)

let searchResult = []
function searchFun(qiymat) {
  searchResult=pokemons.filter(item =>{
    return item.name.toLowerCase().includes(qiymat.value.toLowerCase())
  })
  render(searchResult)
}


let likemassiv = []
function likeFunc (data) {
  likemassiv.push(pokemons[data])
  console.log(likemassiv);
  
    localStorage.setItem("names", JSON.stringify(likemassiv));
    var storedNames = JSON.parse(localStorage.getItem("likemassiv"));

    let likeni_modali = document.querySelector(".likeni_modali")
    
    function likerender(data) {
      likeni_modali.innerHTML=""
      data.map(item =>{
        let col = document.createElement("div")
        col.classList.add("col-12")
    
        let card = document.createElement("div")
        card.classList.add("card")
        card.classList.add("box_like")

      
        let img = document.createElement("img")
        img.classList.add("rasm")
        
        img.src = item.img
        img.alt = item.Title
      
        let name = document.createElement("h4")
        name.innerText =item.name
      
        let uzunligi = document.createElement("p")
        uzunligi.innerText = item.height
    
        let massa = document.createElement("p")
        massa.innerText = item.weight
    
        let turi = document.createElement("p")
        turi.innerText = item.type
    
        card.appendChild(img)
        card.appendChild(name)
        card.appendChild(uzunligi)
        card.appendChild(massa)
        card.appendChild(turi)
    
        col.appendChild(card)
    
        likeni_modali.appendChild(col)
    
    
      })
    }
    
    likerender(likemassiv)
}


let tiplar=[]
pokemons.map(item=>{
  item.type.map(tip=>{
    tiplar.push(tip)
  })
})

let boshmassiv=""
let yangitypes=[]
tiplar.map(item => {
  if(!boshmassiv.includes(item)){
    boshmassiv=boshmassiv+","+item
  }
})

yangitypes=boshmassiv.split(",")
yangitypes.shift()
yangitypes.unshift("All")
console.log(yangitypes)

let type = document.querySelector("#type")

function render2(data){
  data.map(qiymat=>{
    var option = document.createElement("option")
    option.innerText=qiymat
    type.appendChild(option)
  })
}

render2(yangitypes)

function show(){
  let newArr = []
  pokemons.map(pokemon=>{
    pokemon.type.map(tip=>{
      if (type.value === "All"){
        newArr = pokemons
      }else if(type.value === tip){
        newArr.push(pokemon)
      }
    })
  })
  render(newArr)
}

type.onchange=show
show()



// function buttonlike() {
//   let modali = document.querySelector(".likeni_modali")
//   modali.classList.add("d-block")
// }


