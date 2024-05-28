function scrollToBlocks() {
    const linkBtns = document.querySelectorAll('.scroll-btn')

    if (linkBtns.length> 0) {
        linkBtns.forEach(function(btn) {
            btn.addEventListener('click', function(e) {
                e.preventDefault()

                const currentId = btn.getAttribute('href')
                const currentBlock = document.querySelector(currentId)

                currentBlock.scrollIntoView({
                    behavior: 'smooth'
                })
            })
        })
    }
}

export default scrollToBlocks