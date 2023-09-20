let menubtn = document.getElementById('menu');
let closebtn = document.getElementById('nav-close');
let navbar= document.getElementById('navbar');

menubtn.addEventListener('click',()=>{
    navbar.classList.add('OneshaNavbar')
})

closebtn.addEventListener('click',()=>{
    navbar.classList.remove('OneshaNavbar')
})
