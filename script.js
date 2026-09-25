// Ambil elemen-elemen yang dibutuhkan
const more = document.getElementById('more');
const sidebar = document.getElementById('sidebar');
const sidebarOverlay = document.getElementById('sidebarOverlay');
const sidebarClose = document.getElementById('sidebarClose');

// Fungsi buat buka sidebar
function openSidebar() {
    sidebar.classList.add('active');
    sidebarOverlay.classList.add('active');
    document.body.style.overflow = 'hidden'; // Biar halaman di belakangnya gak bisa di-scroll
}

// Fungsi buat tutup sidebar
function closeSidebar() {
    sidebar.classList.remove('active');
    sidebarOverlay.classList.remove('active');
    document.body.style.overflow = ''; // Kembalikan scroll halaman
}

// Event listener buat tombol Identitas di header
if (more) {
    more.addEventListener('click', (e) => {
        e.preventDefault(); // Mencegah link default (#)
        openSidebar();
    });
}

// Event listener buat tombol close (X) di sidebar
if (sidebarClose) {
    sidebarClose.addEventListener('click', closeSidebar);
}

// Event listener buat overlay (klik area gelap di belakang sidebar)
if (sidebarOverlay) {
    sidebarOverlay.addEventListener('click', closeSidebar);
}

// Event listener buat tombol ESC di keyboard
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && sidebar.classList.contains('active')) {
        closeSidebar();
    }
});

// Optional: Biar menu toggle (burger menu) bisa berfungsi nanti kalo lo mau tambahin
const menuToggle = document.getElementById('menuToggle');
if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        openSidebar ();
    });
}

// Console biar tau kalo JS udah ke-load
console.log('Script berhasil di-load! Sidebar siap dipake.');

// ========== DARK / LIGHT MODE TOGGLE ==========

// Ambil tombol theme toggle
const themeToggle = document.getElementById('themeToggle');
const toggleIcon = document.querySelector('.toggle-icon');

// Cek preferensi yang tersimpan di localStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
    toggleIcon.textContent = '☀️'; // Icon matahari buat dark mode
} else {
    toggleIcon.textContent = '🌙'; // Icon bulan buat light mode
}

// Fungsi buat toggle theme
function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    
    // Ganti icon dan simpan preferensi
    if (document.body.classList.contains('dark-mode')) {
        toggleIcon.textContent = '☀️'; // Ganti ke matahari
        localStorage.setItem('theme', 'dark');
    } else {
        toggleIcon.textContent = '🌙'; // Ganti ke bulan
        localStorage.setItem('theme', 'light');
    }
}

// Event listener buat tombol
if (themeToggle) {
    themeToggle.addEventListener('click', toggleTheme);
}

console.log('Script berhasil di-load! Sidebar & Dark Mode siap dipake.');