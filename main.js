
let button = document.querySelector("button")
let h1 = document.querySelector("h1")





const getcolor =  () =>{
    const rendomNumber = Math.floor (Math.random   () * 16777215);
    const randomcode = "#"  + rendomNumber.toString(16);
    document.body.style.backgroundColor = randomcode
    h1.innerText = randomcode
}


button.addEventListener("click",getcolor )

getcolor()