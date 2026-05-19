const modal = document.getElementById('photoModal');
const modalImg = document.getElementById('imgFull');
const closeBtn = document.querySelector('.close-modal');

// Menambahkan fungsi klik pada setiap gambar di galeri
document.querySelectorAll('.gallery-item img').forEach(img => {
    img.onclick = function() {
        modal.style.display = "flex";
        modalImg.src = this.src;
    }
});

// Fungsi untuk menutup modal saat tombol close diklik
closeBtn.onclick = () => modal.style.display = "none";

// Fungsi untuk menutup modal saat area di luar gambar diklik
window.onclick = (event) => { 
    if (event.target == modal) modal.style.display = "none"; 
}