const header = document.querySelector("header");

window.addEventListener ("scroll", function(){
    header.classList.toggle ("sticky", window.scrollY > 200)
})

let menu = document.querySelector('.checkbox')
let navlist = document.querySelector('.navlist')

menu.onclick = () => {
    menu.classList.toggle('checkbox');
    navlist.classList.toggle('open');
};

window.onscroll = () => {
    menu.classList.remove('checkbox');
    navlist.classList.remove('open');
};
