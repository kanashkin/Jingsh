function burgerMenu() {
    const openBtn = document.querySelector('.burger-btn'),
        closeBtn = document.querySelector('.mobile__menu-close'),
        menuBlock = document.querySelector('.mobile__menu')

    openBtn.addEventListener('click', function() {
        menuBlock.classList.add('active')
    })

    closeBtn.addEventListener('click', function() {
        menuBlock.classList.remove('active')
    })
    
}

export default burgerMenu