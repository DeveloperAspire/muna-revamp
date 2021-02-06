const icon = document.getElementById('icon');
const mobMenu = document.getElementById('mobile-menu')
const cancel = document.getElementById('cancel')

icon.addEventListener('click', ()=>{
    mobMenu.classList.remove('hidden');
})

cancel.addEventListener('click', ()=>{
    mobMenu.classList.add('hidden')
})