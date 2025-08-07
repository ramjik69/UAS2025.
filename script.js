function pesan() {
  window.location.href = "transaksi.html";
}

function validateForm(e) {
  const form = document.querySelector('form');
  const nama = form.nama.value.trim();
  const email = form.email.value.trim();
  const telepon = form.telepon.value.trim();

  if (!nama || !email || !telepon) {
    alert("Mohon lengkapi semua field yang wajib diisi.");
    e.preventDefault();
    return false;
  }

  return true; // Agar form lanjut ke invoice.html
}

if (window.location.pathname.includes('invoice.html')) {
  const params = new URLSearchParams(window.location.search);
  document.getElementById('nama').textContent = params.get('nama') || '-';
  document.getElementById('email').textContent = params.get('email') || '-';
  document.getElementById('telepon').textContent = params.get('telepon') || '-';
  document.getElementById('jasa').textContent = params.get('jasa') || '-';
  document.getElementById('tanggal').textContent = params.get('tanggal') || '-';
}