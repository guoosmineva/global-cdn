(async function(){
  const INDONESIA_CODE = "ID";
  const GEO_API_LOCAL = "http://mauritiusattractions.com/geo.php"; // <-- ganti domain kamu di sini

  async function detectCountry() {
    try {
      const res = await fetch(GEO_API_LOCAL, {cache: "no-store"});
      if (!res.ok) throw new Error("geo fetch failed");
      const data = await res.json();
      return (data.country || "").toUpperCase();
    } catch (e) {
      console.warn("Geo detect failed:", e);
      return "XX";
    }
  }

  function ready(fn) {
    if (document.readyState !== "loading") fn();
    else document.addEventListener("DOMContentLoaded", fn);
  }

  const country = await detectCountry();
  console.log("Detected country:", country);

  ready(() => {
    const target = document.getElementById("geo-target");
    if (!target) return console.warn("Elemen #geo-target tidak ditemukan.");

    if (country === INDONESIA_CODE) {
      target.innerHTML = `
        <div class="cloak-id">
          <h1>TES COLOK WILAYAH 🇮🇩</h1>
          <p>Konten ini hanya muncul untuk visitor dari Indonesia.</p>
        </div>
      `;
    } else {
      target.innerHTML = `
        <div class="cloak-nonid">
          <h1>Konten Global 🌍</h1>
          <p>Ini versi global untuk luar Indonesia.</p>
        </div>
      `;
    }
  });
})();
