const links = document.querySelectorAll('.sidebar__page');

// Normalize the current path (remove trailing slashes for consistency)
const currentPath = window.location.pathname.replace(/\/$/, "");

links.forEach(link => {
    // Accessing .pathname on the link object gives the absolute path
    // We also normalize it by removing the trailing slash
    const linkPath = link.pathname.replace(/\/$/, "");

    if (currentPath === linkPath) {
        link.closest('.sidebar__deco')?.classList.add('current-page');
    } 
    // Handle the "Home" edge case where / might be index.html
    else if ((currentPath === "" || currentPath === "/index.html") && linkPath === "/index.html") {
        link.closest('.sidebar__deco')?.classList.add('current-page');
    }
});

