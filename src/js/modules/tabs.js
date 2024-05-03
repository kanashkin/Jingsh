function tabs(tabSelector, contentSelector) {
    const tabBtns = document.querySelectorAll(tabSelector),
        tabContents = document.querySelectorAll(contentSelector)

    if (tabBtns && tabContents) {
        tabBtns.forEach(function(tab) {
            tab.addEventListener('click', function() {
                const tabId = tab.getAttribute('data-tab')

                tabBtns.forEach(function(tab) {
                    tab.classList.remove('active')
                })

                tab.classList.add('active')
                
                tabContents.forEach(function(block) {
                    const blockId = block.getAttribute('data-tab')

                    if (tabId === blockId) {
                        block.classList.add('active')
                    } else {
                        block.classList.remove('active')
                    }
                })

            })
        })
    }
}

export default tabs