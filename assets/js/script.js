const menu = document.getElementById('menu');
const box = document.getElementById('box');

box.style.left = "-300px";

menu.addEventListener('click', ()=>{
    if(box.style.left === "-300px"){
        box.style.left ="0"
        /*menu.style.left ="300px"*/
        menu.classList.remove('bi-list')
        menu.classList.add('bi-x')
    }
    else{
        box.style.left ="-300px"
        /*menu.style.left ="0"*/
        menu.classList.add('bi-list')
        menu.classList.remove('bi-x')
    }
})

const close = document.querySelector('.menu ul');

close.addEventListener('click', ()=>{
    menu.classList.add('bi-list')
    menu.classList.remove('bi-x')
    box.style.left = "-300px"
})

var body = document.querySelector('body');
var mode = document.getElementById('mode');


mode.addEventListener('click', ()=>{
    body.classList.toggle('dark')
    if(body.classList.contains('dark')){
        mode.classList.add('bi-moon-stars-fill')
        mode.classList.remove('bi-sun-fill')
    }
    else{
        mode.classList.remove('bi-moon-stars-fill')
        mode.classList.add('bi-sun-fill')

    }
})

submit.disabled = true

function validation(){
    const submit = document.getElementById('submit');
    const indicador = document.getElementById('indicador');
    const email = document.getElementById('email').value;
    const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/

    if(email.match(pattern)){
        indicador.classList.add('bi-check-circle-fill')
        indicador.classList.remove('bi-x-circle-fill')
        indicador.style.color = "green"
        submit.disabled = false
    }
    else{
        indicador.classList.remove('bi-check-circle-fill')
        indicador.classList.add('bi-x-circle-fill')
        indicador.style.color = "red"
        submit.disabled = true
    }
    if(email === ''){
        indicador.classList.remove('bi-check-circle-fill')
        indicador.classList.remove('bi-x-circle-fill')
    }

}