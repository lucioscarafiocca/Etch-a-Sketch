function rows(a) {
    const container = document.querySelector(".container")
    for(let i=0; i < a; i++) {
        const div = document.createElement("div")
        container.appendChild(div)
        div.setAttribute("style", "padding: 0px;")
        div.classList.toggle("rows")

    }

}

function rowsInside (a) {
    const rows = document.querySelectorAll("div.rows")
    rows.forEach((element) => {
        for(let i=0; i < a ; i++) {
            const div = document.createElement("div")
            element.appendChild(div)
            div.classList.toggle("in") 
            div.addEventListener("mouseover", () => div.classList.toggle("change"))
    
        }
        
    } )
    
}

function createDivs(a) {
    rows(a);
    rowsInside(a);
}

const but = document.querySelector(".but")
but.addEventListener("click", () => { 
    let answer = prompt("Add amount of squares per side")
    if ((answer < 101 ) && (answer > 9)) {
        const rows = document.querySelectorAll(".container")
        rows.forEach((element) => {
            element.remove();
        })
        const div = document.createElement("div")
       const body = document.querySelector("body")
       body.appendChild(div)
       div.classList.toggle("container");
       createDivs(answer);
    } else {
        return alert("Please input a number between 10 and 100")
    }

})

console.log(createDivs(10))










