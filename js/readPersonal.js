const boton = document.querySelectorAll('.btnPersonal');
const parrafosPersonales = document.querySelectorAll('.card-content p');

boton.forEach((btn, index) => {
    btn.onclick = function(e){
        e.preventDefault();

        const parrafoPersonal = parrafosPersonales[index];
        parrafoPersonal.classList.toggle('paragraphPersonal');
        boton[index].textContent =  parrafoPersonal.classList.contains('paragraphPersonal') ? 'Leer más' : 'Leer menos';
    }
});
