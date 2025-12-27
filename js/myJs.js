// console.log("Hello from my js")
let myFirstH1 = document.querySelector('h1')
let myH1 = document.getElementById("secondH1")
myFirstH1.innerHTML = "<div>hello TEJ</div>"

let btn = document.getElementById("clickMe")
let txt = document.getElementById("myText")

btn.addEventListener('click', function() {
    //alert("you have clicked me")
    // read from input field
    let value = txt.value

    // put the value to the second h1tag
    myH1.innerText = value

    // then remove the value from input
    txt.value = ""
})