function clickMenu() {
    if (itens.style.display == 'flex') {
        itens.style.display = 'none'
    } else {
        itens.style.display = 'flex'
    }
}

function clickMenu2() {
    if (login.style.display == 'flex') {
        login.style.display = 'none'
    } else {
        login.style.display = 'flex'
    }
}

function mudouTamanho() {
    if (window.innerWidth >= 992){
        itens.style.display = 'flex'
        login.style.display = 'flex'
    }else{
        itens.style.display = 'none'
        login.style.display = 'none'
    }
}