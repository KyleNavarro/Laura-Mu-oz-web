const boton = document.querySelectorAll('.btnPersonal');
const parrafos = document.querySelectorAll('.card-content p');
const imagenes = document.querySelectorAll('.card2 img');

boton.forEach((btn, index) => {
    btn.onclick = function(e){
        e.preventDefault();

        const parrafo = parrafos[index];
        const imagen = imagenes[index];
        parrafo.classList.toggle('paragraphPersonal');

        const parrafoOculto = parrafo.classList.contains('paragraphPersonal');

        btn.textContent = parrafoOculto ? 'Leer más' : 'Leer menos';
        imagen.style.display = parrafoOculto ? 'block' : 'none';
        
    };
});




const cards = document.querySelectorAll('.card2');
const toggleBtn = document.getElementById('toggleCards');

// Oculta todas las cards después de la cuarta
cards.forEach((card, index) => {
    if (index >= 4) {
        card.classList.add('hidden');
    }
});

toggleBtn.addEventListener('click', () => {
    const hiddenCards = document.querySelectorAll('.card2.hidden');
    const isShowing = hiddenCards.length === 0;

    cards.forEach((card, index) => {
        if (index >= 4) {
            card.classList.toggle('hidden');
            card.classList.toggle('show');
        }
    });

    toggleBtn.textContent = isShowing ? 'Ver más' : 'Ver menos';
});
