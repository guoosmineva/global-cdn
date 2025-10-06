// geojsdelivr.js (standalone, tanpa API luar)
(function(){
  const INDONESIA_CODE = "ID";

  function ready(fn) {
    if (document.readyState !== 'loading') fn();
    else document.addEventListener('DOMContentLoaded', fn);
  }

  ready(() => {
    // Ambil kode negara dari meta tag yang dibuat oleh PHP
    const meta = document.querySelector("meta[name='cf-ipcountry']");
    const country = meta ? meta.content.toUpperCase() : "XX";

    console.log("Detected country:", country);

    const target = document.getElementById("geo-target");
    if (!target) {
      console.warn("Tidak ada elemen #geo-target di halaman.");
      return;
    }

    if (country === INDONESIA_CODE) {
      // Konten khusus Indonesia
      target.innerHTML = `
        <div class="cloak-id">
          <h1>TES COLOK WILAYAH 🇮🇩</h1>
          <p>Kalo kamu orang indo yang dekil, kumel, item, bau knalpot... kamu pasti bisa liat ini...</p>
        </div>
      `;
    } else {
      // Konten default (global)
      target.innerHTML = `
        <div class="cloak-nonid">
          <h1>Konten Global 🌍</h1>
          <p>Anda melihat versi luar Indonesia.</p>
        </div>
      `;
    }
  });
})();
