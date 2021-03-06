
// preloader(pantalla de carga)
window.onload = function() {
    spinner = document.getElementById('preloader')
    spinner.style.opacity = '0'
    spinner.style.zIndex = '-1'
}

// Mostrar elementos cuando haces scroll
window.addEventListener('scroll',function(){
    prueba = document.getElementById('servicios-pg-principal')
    posicion = window.scrollY
    // console.log(posicion)
    if (posicion >= 1900){
        prueba.style.opacity = '100%'
    }
})

// navbar efecto scroll
let PosicionPrincipal = window.pageYOffset
window.onscroll = function (){
    let DesplasiamientoActual = window.pageYOffset
    if (DesplasiamientoActual >= PosicionPrincipal){
        let mostrar = document.getElementById('nav').style.top = '-100px'
        nav.style.transitionDuration = '1s'
    }
    else{
        let ocultar = document.getElementById('nav').style.top = '0px'
        nav.style.transitionDuration = '1s'

    }

    if(DesplasiamientoActual >= 5){
        let mostrar = document.getElementById('nav').style.backgroundColor = 'black'
    }
    else{
        let mostrar = document.getElementById('nav').style.backgroundColor = 'transparent'
    }
    PosicionPrincipal = DesplasiamientoActual
}





//funcion para menu menuHamburguesa
function menuHamburguesa () {
    let navmenu = document.getElementById('menu')
    let navenlaces = document.getElementById('enlaces')
    let navlogo = document.getElementById('logo')
    let icono = document.getElementById('menu-icono')
    let redesw = document.getElementById('redesw')
    let redesf = document.getElementById('redesf')

    if (navmenu.checked == true) {
        navenlaces.style.transform = 'translateY(0%)'
        navenlaces.style.backgroundColor = 'white'
        navenlaces.style.opacity = '100%'
        navlogo.style.filter = 'invert(100%)'
        icono.style.filter = 'invert(0%)'
        redesw.style.filter = 'invert(100%)'
        redesf.style.filter = 'invert(100%)'
    }
    else{
        navenlaces.style.transform = 'translateY(-100%)'
        navlogo.style.filter ='invert(0%)'
        icono.style.filter = 'invert(100%)'
        redesw.style.filter = 'invert(0%)'
        redesf.style.filter = 'invert(0%)'
    }
}