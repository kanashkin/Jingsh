function phoneMask() {
    const element = document.getElementById('phone');
    const maskOptions = {
        mask: '+7 (000) 000-00-00',
        lazy: false
    }; 
    const mask = new IMask(element, maskOptions);

    const element2 = document.getElementById('email');
    const maskOptions2 = {    
        mask(value) {
            if (/^[a-z0-9_\.-]+$/.test(value)) return true;
            if (/^[a-z0-9_\.-]+@$/.test(value)) return true;
            if (/^[a-z0-9_\.-]+@[a-z0-9-]+$/.test(value)) return true;
            if (/^[a-z0-9_\.-]+@[a-z0-9-]+\.$/.test(value)) return true;
            if (/^[a-z0-9_\.-]+@[a-z0-9-]+\.[a-z]{1,4}$/.test(value)) return true;
            if (/^[a-z0-9_\.-]+@[a-z0-9-]+\.[a-z]{1,4}\.$/.test(value)) return true;
            if (/^[a-z0-9_\.-]+@[a-z0-9-]+\.[a-z]{1,4}\.[a-z]{1,4}$/.test(value)) return true;
            return false;
        },
        lazy: false
    }; 
    const mask2 = new IMask(element2, maskOptions2);

    const element3 = document.getElementById('card');
    const maskOptions3 = {
        mask: '0000 0000 0000 0000',
        lazy: false
    }; 
    const mask3 = new IMask(element3, maskOptions3);

}

export default phoneMask
