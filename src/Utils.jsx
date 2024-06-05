export function scrollToSection(sectionId) {
    var section = document.getElementById(sectionId);
    window.scroll({
        behavior: 'smooth',
        left: 0,
        top: section.offsetTop
    });
}
