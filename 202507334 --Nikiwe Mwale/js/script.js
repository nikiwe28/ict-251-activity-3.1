// Display the current year in the website footer
const yearElement = document.getElementById("currentYear");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}


// Handle the contact form
// CONTACT FORM VALIDATION

const contactForm = document.getElementById("contactForm");
const formFeedback = document.getElementById("formFeedback");

if (contactForm && formFeedback) {

    contactForm.addEventListener("submit", function (event) {

        // Stop the page from refreshing
        event.preventDefault();

        // Get the values entered by the visitor
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        // Clear the previous feedback
        formFeedback.textContent = "";

        // Check whether the name is empty
        if (name === "") {
            formFeedback.textContent =
                "Please enter your name.";
            document.getElementById("name").focus();
            return;
        }

        // Check whether the email is valid
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {
            formFeedback.textContent =
                "Please enter a valid email address.";
            document.getElementById("email").focus();
            return;
        }

        // Check whether the message is empty
        if (message === "") {
            formFeedback.textContent =
                "Please enter your message.";
            document.getElementById("message").focus();
            return;
        }

        // Show a successful validation preview
        formFeedback.textContent =
            "Thank you, " + name +
            "! Your information has been validated successfully. " +
            "Your message has NOT been sent.";

    });
}
const formFeedback = document.getElementById("formFeedback");

if (contactForm && formFeedback) {
    contactForm.addEventListener("submit", function (event) {
        // Stop the page from refreshing
        event.preventDefault();

        // Get the information entered by the visitor
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        // Check that all fields have been completed
        if (name === "" || email === "" || message === "") {
            formFeedback.textContent =
                "Please complete all the fields before submitting.";
            return;
        }

        // Check whether the email address has a valid basic format
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {
            formFeedback.textContent =
                "Please enter a valid email address.";
            return;
        }

        // Show a preview of the message
        formFeedback.textContent =
            "Thank you, " + name +
            "! Your information has been checked successfully. " +
            "This is a demonstration only; your message has not been sent.";
    });
}
// Interactive photo gallery
const galleryImage = document.getElementById("galleryImage");
const galleryCaption = document.getElementById("galleryCaption");
const previousPhoto = document.getElementById("previousPhoto");
const nextPhoto = document.getElementById("nextPhoto");

const galleryPhotos = [
    {
        src: "images/profile.jpeg",
        alt: "My profile photo",
        caption: "My profile photo"
    },
    {
        src: "images/childhood-photo.jpeg",
        alt: "My childhood photo",
        caption: "A photo from my childhood"
    },
    {
        src: "images/gallery-collage.jpeg",
        alt: "A collage of my photos",
        caption: "A collection of my favourite memories"
    }
];

let currentPhoto = 0;

function showPhoto(index) {
    if (!galleryImage || !galleryCaption) {
        return;
    }

    currentPhoto =
        (index + galleryPhotos.length) % galleryPhotos.length;

    galleryImage.src = galleryPhotos[currentPhoto].src;
    galleryImage.alt = galleryPhotos[currentPhoto].alt;
    galleryCaption.textContent = galleryPhotos[currentPhoto].caption;
}

if (galleryImage && galleryCaption && previousPhoto && nextPhoto) {
    previousPhoto.addEventListener("click", function () {
        showPhoto(currentPhoto - 1);
    });

    nextPhoto.addEventListener("click", function () {
        showPhoto(currentPhoto + 1);
    });

    showPhoto(0);
}
// DARK AND LIGHT MODE SWITCH

const themeToggle = document.getElementById("themeToggle");

if (themeToggle) {
    themeToggle.addEventListener("click", function () {

        // Switch between the two themes
        document.body.classList.toggle("light-theme");

        // Update the button label
        if (document.body.classList.contains("light-theme")) {
            themeToggle.textContent = "Switch to Dark Mode";
        } else {
            themeToggle.textContent = "Switch to Light Mode";
        }

    });
}