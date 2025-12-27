/* TRADUCCIÓ */
let currentLang = "ca";

const translations = {
    ca: {
        subtitle: "Ens casem!",
        date: "Divendres 10 d'Abril de 2026",
        invitation:
            "Ens fa molta il·lusió compartir aquest dia tant especial amb vosaltres.",
        subtext:
            "Us esperem el divendres 10 d'Abril a les 05:00 pm a l'Ermita de Sant Joan de Can Roure (Matadepera) i després soparem a la masia La Tartana.",
        ceremony_title: "Cerimònia i Celebració",
        home_: "Inici",
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
        nameExtra: "Nom del teu acompanyant *",
        attending: "Assistiré",
        not_attending: "No podré assistir",
        maybe: "No estic segur",
        guests: "Número de convidats",
        dietary: "Alèrgies o preferències alimentàries",
        submit: "Enviar",
        attendQuestion: "Assistireu a la nostra boda?*",
        message: "Missatge per als nuvis",
        song: "Una cançó per a que soni al nostre casament",
        about: "Sobre",
        adress:"Adreça *",
        final: "Us hi esperem!",
        thks: "Gràcies!",
        thanks_title: "Gràcies!",
        thanks_msg: "Hem rebut la vostra resposta correctament."

    },

    en: {
        subtitle: "We are getting married!",
        date: "Friday, April 10th, 2026",
        invitation:
            "We are thrilled to share this special day with you.",
        subtext:
            "We look forward to seeing you on Friday, April 10th at 5:00 pm at the Chapel of Sant Joan de Can Roure (Matadepera) followed by dinner at Masia La Tartana .",
        ceremony_title: "Ceremony & Reception",
        home_: "Home",
        ceremony: "Ceremony",
        reception: "Reception",
        time: "Time:",
        details: "+ Details",
        duration: "Duration:",
        durationCeremony: "Approximately 1 hour",
        durationReception: "From 6:30 pm to 3:00 am",
        parkingCeremony: "Free parking available beside the chapel",
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
        nameExtra: "Your Guest's Name *",
        attending: "Yes, I'll be there!",
        not_attending: "Sorry, I can't attend", 
        maybe: "I'm not sure",
        guests: "Number of Guests",
        dietary: "Dietary Restrictions",
        submit: "Submit RSVP",
        attendQuestion: "Will you attend our wedding?*",
        message: "Message for the Couple",
        song: "A song that can't be missed",
        about: "About",
        adress: "Adress *",
        final: "Looking forward to see you!",
        thks: "Thank you!",
        thanks_title: "Thank you!",
        thanks_msg: "We have received your RSVP successfully."

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
        lang === "ca" ? "ENG" : "CAT";
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

// Per als  +1s
document.addEventListener('DOMContentLoaded', function() {
    const guestSelect = document.getElementById('guests');
    
    guestSelect.addEventListener('change', function() {
        const numGuests = parseInt(this.value);
        const form = document.querySelector('form');
        
        // Remove existing guest forms if any
        const existingGuestForms = form.querySelectorAll('.guest-form-group');
        existingGuestForms.forEach(el => el.remove());
        
        // If 2 guests selected, add second guest form
        if (numGuests === 2) {
            // Find the guests form group to insert after it
            const guestFormGroup = guestSelect.closest('.form-group');
            
            // Create new form group for second guest
            const newFormGroup = document.createElement('div');
            newFormGroup.className = 'form-group guest-form-group';
            newFormGroup.innerHTML = `
                <label for="guest2_name" data-i18n="nameExtra"></label>
                <input type="text" id="guest2_name" name="guest2_name" required>
            `;
            
            // Insert after the guests dropdown
            guestFormGroup.insertAdjacentElement('afterend', newFormGroup);
            
            // Re-apply translations if language feature is active
            if (typeof setLanguage !== 'undefined') {
                updateNewFieldTranslations();
            }
        }
    });
});

// Helper function to translate newly added fields
function updateNewFieldTranslations() {
    const label = document.querySelector('.guest-form-group label[data-i18n]');
    if (label) {
        const key = label.dataset.i18n;
        const translation = translations[currentLang][key];
        label.textContent = translation;
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

// API per la RSVP
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const scriptURL = 'https://script.google.com/macros/s/AKfycbwR7XLA1aNawyUWXbHP4-yINL-C5tI6fT0GRHfFV1xL7NbzUirDYF_Iiadx99wXu9JAjg/exec';
    
    // Add the current language (e.g., 'ca' or 'en') to the data being sent
    formData.append('lang', currentLang);
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();

            // 1. Show Loading State
            const submitBtn = form.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.disabled = true;
            submitBtn.textContent = (currentLang === "ca") ? "Enviant..." : "Sending...";

            fetch(scriptURL, { method: 'POST', body: new FormData(form) })
                .then(response => response.text())
                .then(result => {
                    if (result.trim() === "Success") {
                        // 2. Hide Form and show Success Message
                        form.style.opacity = '0';
                        setTimeout(() => {
                            form.style.display = 'none';
                            const successDiv = document.getElementById('form-success');
                            if (successDiv) {
                                successDiv.style.display = 'block';
                                successDiv.scrollIntoView({ behavior: 'smooth' });
                            }
                        }, 400);
                    } else {
                        throw new Error(result);
                    }
                })
                .catch(error => {
                    console.error('Error!', error.message);
                    alert("Error: " + error.message);
                    submitBtn.disabled = false;
                    submitBtn.textContent = originalText;
                });
        });
    }
});

// -------------- Event Listeners
document.addEventListener("DOMContentLoaded", function () {
    setLanguage("ca");

    const form = document.querySelector("form");
    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();
            const confMsg = (currentLang === "ca")
                    ? "Estem enviant la teva resposta!"
                    : "We are sending your RSVP!";
                alert(confMsg);
            this.reset();
        });
    }
});

/* Navbar Shrink on Scroll */
window.addEventListener('scroll', function () {
    const nav = document.querySelector('nav');

    if (!nav) return;

    if (window.scrollY > 80) {
        nav.classList.add('shrink');
    } else {
        nav.classList.remove('shrink');
    }
});

/* Mobile Menu Toggle */
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger-menu');
    const nav = document.querySelector('nav');
    
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            nav.classList.toggle('active');
        });

        // Close menu when a nav link is clicked
        nav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', function() {
                hamburger.classList.remove('active');
                nav.classList.remove('active');
            });
        });
    }
});