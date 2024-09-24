let mobileMenu = document.getElementById('mobile-menu')

mobileMenu.style.display = 'none'
function menu() {
    console.log('clicked')
    if(mobileMenu.style.display == 'none') {
        mobileMenu.style.display = 'flex'
    }
    else {
        mobileMenu.style.display = 'none'
    }
}
