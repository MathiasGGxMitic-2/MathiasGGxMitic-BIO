const menuBtn = document.getElementById("menu-btn");
const dropdownMenu = document.getElementById("dropdown-menu");
const chevron = document.getElementById("chevron");

if (menuBtn && dropdownMenu && chevron) {
    menuBtn.addEventListener("click", () => {
        const isOpen = dropdownMenu.classList.toggle("active");
        chevron.classList.toggle("open", isOpen);
    });

    document.addEventListener("click", (e) => {
        if (!dropdownMenu.contains(e.target) && !menuBtn.contains(e.target)) {
            dropdownMenu.classList.remove("active");
            chevron.classList.remove("open");
        }
    });
}