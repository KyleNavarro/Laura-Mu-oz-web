const toggleBtns = document.querySelectorAll('.toggleText');
const paragraphs = document.querySelectorAll('.experiencia-item p');

toggleBtns.forEach((btn, index) => {
    btn.onclick = function(e) {
        e.preventDefault();

        const paragraph = paragraphs[index];
        paragraph.classList.toggle('hiden');
        toggleBtns[index].textContent =  paragraph.classList.contains('hiden') ? 'Leer más' : 'Leer menos';
    };
})
