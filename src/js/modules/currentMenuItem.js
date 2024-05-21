function currentMenuItem(menuItemsClass) {
    const menuItems = document.querySelectorAll(menuItemsClass)
    const currentPageIndex = document.querySelector('main').getAttribute('page-index')
    console.log(menuItems);

    if (menuItems && currentPageIndex) {
        menuItems[currentPageIndex - 1].classList.add('active')
    }
}

export default currentMenuItem