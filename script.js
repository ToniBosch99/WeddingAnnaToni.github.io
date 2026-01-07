/* TRADUCCIÓ */
let currentLang = "ca";

const translations = {
    ca: {
        subtitle: "Ens casem!",
        date: "Divendres 10 d'Abril de 2026",
        invitation:
            "Ens fa molta il·lusió compartir aquest dia tant especial amb vosaltres.",
        subtext:
            "Us esperem el divendres 10 d'Abril a les 16:45 a l'Ermita de Sant Joan de Can Roure (Matadepera) per a la cerimònia i seguidament soparem a la masia La Tartana.",
        ceremony_title: "Cerimònia i Celebració",
        home_: "Inici",
        ceremony: "Cerimònia",
        reception: "Celebració",
        time: "Hora:",
        details: "+ Detalls",
        duration: "Durada:",
        durationCeremony: "Aproximadament 1 hora",
        durationReception: "De 18:30 a 3:00",
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
        guests: "Vens amb acompanyant?",
        dietary: "Alèrgies o preferències alimentàries",
        submit: "Enviar",
        attendQuestion: "Assistireu a la nostra boda?*",
        message: "Missatge per als nuvis",
        song: "Suggeriments per a la playlist del casament?",
        about: "Sobre",
        adress:"Adreça *",
        final: "Us hi esperem!",
        thks: "Gràcies!",
        thanks_title: "Gràcies!",
        thanks_msg: "Hem rebut la vostra resposta correctament.",
        Anything_else: "Alguna cosa més que vulgueu comentar-nos?"

    },

    en: {
        subtitle: "We are getting married!",
        date: "Friday, April 10th, 2026",
        invitation:
            "We would be thrilled to share this special day with you.",
        subtext:
            "We would love you to be with us on Friday, April 10th at 4:45 pm at the Chapel of Sant Joan de Can Roure (Matadepera) for the ceremony, followed by a reception at Masia La Tartana.",
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
        guests: "Will you bring a guest?",
        dietary: "Dietary Restrictions",
        submit: "Submit RSVP",
        attendQuestion: "Will you attend our wedding?*",
        message: "Message for the Couple",
        song: "Would you like to suggest a song for the wedding playlist?",
        about: "About",
        adress: "Address *",
        final: "Looking forward to see you!",
        thks: "Thank you!",
        thanks_title: "Thank you!",
        thanks_msg: "We have received your RSVP successfully.",
        Anything_else: "Anything else you'd like us to know?"
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
// Replace the guestSelect listener with this:
const guestCheckbox = document.getElementById('guests');
const statusText = document.getElementById('guest-status');

guestCheckbox.addEventListener('change', function() {
    const form = document.querySelector('form');
    const existingGuestForms = form.querySelectorAll('.guest-form-group');
    existingGuestForms.forEach(el => el.remove());
    // 1. Update the Yes/No text based on language
    if (this.checked) {
        statusText.textContent = (currentLang === "ca") ? "Sí" : "Yes";
        statusText.style.color = "#7a9b4a"; // Green for Yes
        statusText.style.fontWeight = "bold";
    } else {
        statusText.textContent = (currentLang === "ca") ? "No" : "No";
        statusText.style.color = "#666"; // Grey for No
        statusText.style.fontWeight = "normal";
    }

    // 2. Handle the extra name field logic
    

    if (this.checked) {
        const guestFormGroup = this.closest('.form-group');
        const newFormGroup = document.createElement('div');
        newFormGroup.className = 'form-group guest-form-group';
        newFormGroup.innerHTML = `
            <label for="guest2_name" data-i18n="nameExtra"></label>
            <input type="text" id="guest2_name" name="guest2_name" required>
        `;
        guestFormGroup.insertAdjacentElement('afterend', newFormGroup);
        
        if (typeof setLanguage !== 'undefined') {
            updateNewFieldTranslations();
        }
    }
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
        'foto15.jpg',
        'foto16.jpg',
        'foto17.jpg',
        'foto18.jpg'
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
    const scriptURL = 'https://script.google.com/macros/s/AKfycbyF944NK9nYJS9-i60ayyM78DlKsNQikmJbhsbLj_hQ1lJByPdzBTKSzHpfCEzDXfKxZw/exec';
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();

            // 1. Show Loading State
            const submitBtn = form.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.disabled = true;
            submitBtn.textContent = (currentLang === "ca") ? "Enviant..." : "Sending...";

            // First, capture the form data
            const formData = new FormData(form);
            
            // Append language variable
            formData.append('lang', currentLang);
            console.log("Form Data to be sent:");
            console.table(Object.fromEntries(formData));

            fetch(scriptURL, { method: 'POST', body: formData })
                .then(response => response.text())
                .then(result => {
                    if (result.trim() === "Success") {
                        // 2. Hide Form and show Success Message
                        form.style.opacity = '0';
                        setTimeout(() => {
                            form.style.display = 'none';
                            const successDiv = document.getElementById('form-success');
                            const guestDiv = document.getElementById('guests-section');
                            if (successDiv) {
                                successDiv.style.display = 'block';
                                successDiv.scrollIntoView({ behavior: 'smooth' });
                            }
                            if (guestDiv) {
                                guestDiv.style.display = 'none';
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