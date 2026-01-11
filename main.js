const cursosData = [
    {
        id: 1,
        titulo: "Yoga con Perros para Principiantes",
        descripcion: "Aprende las bases del yoga junto a tu compañero canino.",
        icono: "yoga"
    },
    {
        id: 2,
        titulo: "Experiencia Completa",
        descripcion: "Programa intensivo que combina yoga avanzado y naturaleza.",
        icono: "dogga"
    },
    {
        id: 3,
        titulo: "Meditación Canina",
        descripcion: "Descubre la calma a través de la meditación conjunta.",
        icono: "meditacion"
    }
];

document.addEventListener('DOMContentLoaded', function() {
    

    if (typeof AOS !== 'undefined') {
        AOS.init({ duration: 800, once: true });
    }

    const toggleNav = document.querySelector('.nav-toggle');
    const menuNav = document.querySelector('.nav-menu');
    
    if (toggleNav) {
        toggleNav.addEventListener('click', () => {
            menuNav.classList.toggle('active');
            toggleNav.classList.toggle('active');
        });
    }


    const listado = document.getElementById('cursos-listado');
    const spinner = document.getElementById('loading-spinner');
    
    if(spinner) spinner.style.display = 'none'; 

    if (listado) {
        cursosData.forEach((curso, index) => {
            const tarjeta = document.createElement('div');
            tarjeta.className = 'service-card';
            tarjeta.setAttribute('data-aos', 'fade-up');
            
        
            tarjeta.innerHTML = `
                <div class="service-icon">Yoga</div>
                <h3 class="service-title">${curso.titulo}</h3>
                <p class="service-description">${curso.descripcion}</p>
                <button class="ver-detalles">Más info</button>
            `;
            
        
            tarjeta.querySelector('button').addEventListener('click', () => {
                alert('Detalle del curso próximamente');
            });
            
            listado.appendChild(tarjeta);
        });
    }


    document.querySelectorAll('a[href^="#"]').forEach(ancla => {
        ancla.addEventListener('click', function(e) {
            e.preventDefault();
            const objetivo = document.querySelector(this.getAttribute('href'));
            if(objetivo) objetivo.scrollIntoView({ behavior: 'smooth' });
        });
    });

    console.log('Frontend cargado correctamente.');
});