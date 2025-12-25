/* TRADUCCIÓ */
let currentLang = "ca";

const translations = {
    ca: {
        subtitle: "Ens casem!",
        invitation:
            "L’Anna i en Toni tenen el plaer de convidar-vos a compartir amb ells el moment en què s’uniran en matrimoni en presència de família i amics.",
        subtext:
            "La cerimònia donarà inici a la celebració, seguida del banquet al restaurant.",
        ceremony_title: "Cerimònia i Celebració",
        ceremony: "Cerimònia",
        reception: "Celebració",
        time: "Hora:",
        details: "+ Detalls",
        duration: "Durada:",
        durationCeremony: "Aproximadament 1 hora",
        durationReception: "De 18:30 pm a 3:00 am",
        parkingCeremony: "Aparcament gratuït al costat de l'ermita",
        parkingReception: "Aparcament gratuït al lloc",
        address: "Adreça:", 
        parking: "Aparcament:",
        dress_code: "Codi de vestimenta:",
        notes: "Notes:",
        veureMaps: "Veure a Google Maps",
        gallery: "Fotos",
        rsvp: "Confirmeu la vostra assistència",
        subRsvp: "Si us plau, confirmeu si podreu celebrar-ho amb nosaltres! Confirmeu l'assistència abans del 15 de març de 2026.",
        name: "El teu nom *",
        attending: "Assistiré",
        not_attending: "No podré assistir",
        maybe: "No estic segur",
        guests: "Número de convidats",
        dietary: "Alèrgies o preferències alimentàries",
        submit: "Enviar",
        attendQuestion: "Assistireu a la nostra boda?*",
        message: "Missatge per als nuvis",
        song: "Una cançó per al nostre casament",
        about: "Sobre",
        adress:"Adreça *",
        final: "No podem esperar per celebrar aquest dia amb vosaltres!"

    },

    en: {
        subtitle: "We are getting married!",
        invitation:
            "Anna and Toni joyfully request the pleasure of your company as they speak their vows and join in marriage in the presence of family and friends.",
        subtext:
            "The ceremony will be followed by the reception at the venue.",
        ceremony_title: "Ceremony & Reception",
        ceremony: "Ceremony",
        reception: "Reception",
        time: "Time:",
        details: "+ Details",
        duration: "Duration:",
        durationCeremony: "Approximately 1 hour",
        durationReception: "From 6:30 pm to 3:00 am",
        parkingCeremony: "Free parking available beside the hermitage",
        parkingReception: "Free parking available on-site",
        address: "Address:",
        parking: "Parking:",
        dress_code: "Dress Code:",
        notes: "Notes:",
        veureMaps: "View on Google Maps",
        gallery: "Gallery",
        rsvp: "RSVP",
        subRsvp: "Please let us know if you can celebrate with us! RSVP by March 15, 2026.",
        name: "Your Name *",
        attending: "Yes, I'll be there!",
        not_attending: "Sorry, I can't attend", 
        maybe: "No estic segur",
        guests: "Number of Guests",
        dietary: "Dietary Restrictions",
        submit: "Submit RSVP",
        attendQuestion: "Will you attend our wedding?*",
        message: "Message for the Couple",
        song: "A song that can't be missed",
        about: "About",
        adress: "Adress *",
        final: "We can't wait to celebrate this day with you!"

    }
};

function setLanguage(lang) {
    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.dataset.i18n;
        if (translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });

    currentLang = lang;
    document.querySelector(".lang-toggle").textContent =
        lang === "ca" ? "EN" : "CAT";
}

function toggleLanguage() {
    setLanguage(currentLang === "ca" ? "en" : "ca");
}

/* ALTRES FUNCIONS */
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

/* GALLERY LOADER */
function loadGallery() {
    // ðŸ“¸ Add your photo filenames here (stored in 'images' folder)
    const photos = [
        'foto1.jpg',
        'foto2.jpg',
        'foto3.jpg',
        'foto4.jpg',
        'foto5.jpg',
        'foto6.jpg',
        'foto7.jpg',
        'foto8.jpg',
        'foto9.jpg',
        'foto10.jpg',
        'foto11.jpg',
        'foto12.jpg',
        'foto13.jpg',
        'foto14.jpg',
        'foto15.jpg'
        // Add or remove photos as needed
    ];
    
    const photosSection = document.getElementById('photos');
    
    // Check if gallery already exists
    if (!photosSection || photosSection.querySelector('.gallery')) {
        return;
    }
    
    // Create gallery container
    const galleryContainer = document.createElement('div');
    galleryContainer.className = 'gallery';
    
    // Create gallery items for each photo
    photos.forEach((photo, index) => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        
        const img = document.createElement('img');
        img.src = `images/galeria/${photo}`; // Adjust path if your folder is different
        img.alt = `Wedding photo ${index + 1}`;
        img.loading = 'lazy'; // Lazy loading for better performance
        
        galleryItem.appendChild(img);
        galleryContainer.appendChild(galleryItem);
    });
    
    photosSection.appendChild(galleryContainer);
}

// Call the function when page loads
document.addEventListener('DOMContentLoaded', loadGallery);

// Event Listeners
document.addEventListener("DOMContentLoaded", function () {
    setLanguage("ca");

    const form = document.querySelector("form");
    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();
            alert("Gràcies per la vostra resposta!");
            this.reset();
        });
    }
});

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