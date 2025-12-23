function toggleCeremonyDetails() {
    const details = document.getElementById('ceremonyDetails');
    const btn = event.target;

    if (details.style.display === 'none') {
        details.style.display = 'block';
        btn.textContent = '- Hide Details';
    } else {
        details.style.display = 'none';
        btn.textContent = '+ Details';
    }
}

function toggleReceptionDetails() {
    const details = document.getElementById('receptionDetails');
    const btn = event.target;
    
    if (details.style.display === 'none') {
        details.style.display = 'block';
        btn.textContent = '- Hide Details';
    } else {
        details.style.display = 'none';
        btn.textContent = '+ Details';
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your RSVP! We look forward to celebrating with you.');
            this.reset();
        });
    }
});


window.addEventListener('scroll', function () {
    const nav = document.querySelector('nav');

    if (!nav) return;

    if (window.scrollY > 80) {
        nav.classList.add('shrink');
    } else {
        nav.classList.remove('shrink');
    }
});