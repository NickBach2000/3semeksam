document.addEventListener("scroll", () => {
    const fadeInElements = document.querySelectorAll(".beskrivelse, .events"); // Vælg både .beskrivelse og .events
    const windowHeight = window.innerHeight;

    fadeInElements.forEach(fadeInElement => {
        const rect = fadeInElement.getBoundingClientRect();

        // Tjek om elementet er synligt i viewporten
        if (rect.top <= windowHeight && rect.bottom >= 0) {
            fadeInElement.classList.add("visible"); // Tilføj fade-in klasse
        }
    });
});
