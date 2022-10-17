const allowLinks = document.getElementById('allow-links')
const drawer = document.getElementById('drawerToggle')

allowLinks.addEventListener('click', () => {
    drawer.classList.toggle('allow-links')
})