const bola = document.querySelector('.div-bola');

        function moverBola(evento) {
            const x = evento.touches ? evento.touches[0].clientX : evento.clientX;
            const y = evento.touches ? evento.touches[0].clientY : evento.clientY;

            bola.style.left = `${x - bola.offsetWidth / 2}px`;
            bola.style.top = `${y - bola.offsetHeight / 2}px`;
        }

        document.addEventListener('mousemove', moverBola);
        document.addEventListener('touchmove', moverBola);