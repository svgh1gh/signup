let x=document.getElementById("pass")
let y=document.getElementById("passtoo")
let z=document.getElementById("sign")
let g=document.getElementById("dura")
z.onclick = (event) =>{
    if(x.value!==y.value){
        g.innerText="Вы не приняты"
    }
}