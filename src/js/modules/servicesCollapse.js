function servicesCollapse() {
    const collapseItems = document.querySelectorAll('.collapse__item')

    if (collapseItems.length > 0) {
        collapseItems.forEach(function(item) {

            let unActiveHeight = item.querySelector('.services__item-header').scrollHeight + 12
            item.style.height = unActiveHeight + 'px'
            
            item.addEventListener('click', function() {
                let activeHeight = item.scrollHeight

                if (!item.classList.contains('active')) {
                    item.style.height = activeHeight + 'px'
                } else {
                    item.style.height = unActiveHeight + 'px'
                }

                item.classList.toggle('active')
            })
        })
    }
}

export default servicesCollapse