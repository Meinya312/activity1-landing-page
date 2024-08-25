document.addEventListener("DOMContentLoaded",function(){
    const hiddenElements = document.querySelectorAll('.hidden-text');

    const oberserver = new IntersectionObserver((entries) => {
        entries.forEach(entry =>{
            if (entry.isIntersecting){
                entry.target.classList.add('show');
                oberserver.unobserve(entry.target);
            }
        });
    }, {threshold: 0.1});
    hiddenElements.forEach((el) => oberserver.observe(el));
});
