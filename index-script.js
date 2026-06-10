const menuBtn = document.getElementById("menu-btn");
const dropdownMenu = document.getElementById("dropdown-menu");
const chevron = document.getElementById("chevron");

const langBtn = document.getElementById("lang-btn");
const langDropdown = document.getElementById("lang-dropdown");
const langChevron = document.getElementById("lang-chevron");

// Gestione Menu Principale (Sinistra)
if (menuBtn && dropdownMenu && chevron) {
    menuBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        const isOpen = dropdownMenu.classList.toggle("active");
        chevron.classList.toggle("open", isOpen);
        
        // Chiude il menu della lingua se aperto
        if (langDropdown && langChevron) {
            langDropdown.classList.remove("active");
            langChevron.classList.remove("open");
        }
    });
}

// Gestione Menu Lingua (Destra)
if (langBtn && langDropdown && langChevron) {
    langBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        const isOpen = langDropdown.classList.toggle("active");
        langChevron.classList.toggle("open", isOpen);
        
        // Chiude il menu principale se aperto
        if (dropdownMenu && chevron) {
            dropdownMenu.classList.remove("active");
            chevron.classList.remove("open");
        }
    });
}

// Chiusura di entrambi i menu cliccando fuori
document.addEventListener("click", () => {
    if (dropdownMenu && chevron) {
        dropdownMenu.classList.remove("active");
        chevron.classList.remove("open");
    }
    if (langDropdown && langChevron) {
        langDropdown.classList.remove("active");
        langChevron.classList.remove("open");
    }
});