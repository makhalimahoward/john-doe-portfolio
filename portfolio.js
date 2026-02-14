function showSidebar(){
    const sidebar = document.querySelector('.sidebar');
    // Instead of display: flex, we change the position to slide it in
    sidebar.style.right = '0';
}

function hideSidebar(){
    const sidebar = document.querySelector('.sidebar');
    // Slide it back off-screen
    sidebar.style.right = '-100%';
}

// Optional: Close sidebar when clicking a link
const sidebarLinks = document.querySelectorAll('.sidebar a');
sidebarLinks.forEach(link => {
    link.onclick = () => {
        hideSidebar();
    };
});