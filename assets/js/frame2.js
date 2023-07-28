
function scrollIt(element) {
    window.scrollTo({
        'behavior': 'smooth',
        'left': 0,
        'top': element.offsetTop
    });
}

const btns = document.querySelectorAll('.js-btn');
const sections = document.querySelectorAll('.js-section');

btns.forEach((btn) => {
    btn.addEventListener('click', () => {
        const sectionIndex = btn.dataset.section; // Get the data-section value
        const section = document.querySelector(`[data-section="${sectionIndex}"]`); // Find the corresponding section
        scrollIt(section);
    });
});

// <button class="js-btn" data-section="0">Button 1</button>
// <section class="js-section" data-section="0">Section 1</section>

document.getElementById ("btnId").addEventListener ("click", scrollToElement, false);


function scrollToElement() {
    let elmnt = document.getElementById("section2");
    elmnt.scrollIntoView({behavior:'smooth', block:'start'});
}