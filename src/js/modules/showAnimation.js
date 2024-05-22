function showAnimation() {
    const animatedElements = document.querySelectorAll('.animation-scroll');

    if (animatedElements.length > 0) {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                }
            });
        });
    
        animatedElements.forEach(function(elem) {
            observer.observe(elem);
        })
    }
}

export default showAnimation