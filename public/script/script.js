
const humBtn = document.getElementById('hum-menu')
const sideDrawer = document.getElementById('sd-con')
const closeMenu = document.getElementById('cls-menu')

function clickable() {
    sideDrawer.style.display = 'block'
    humBtn.style.display = 'none'
    closeMenu.style.display = 'block'
}

function hideClsBtn() {
    sideDrawer.style.display = 'none'
    humBtn.style.display = 'block'
    closeMenu.style.display = 'none'
}

closeMenu.addEventListener('click', hideClsBtn)
humBtn.addEventListener('click', clickable)