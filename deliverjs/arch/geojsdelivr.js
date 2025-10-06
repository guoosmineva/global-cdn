
(async function(){
  const GEO_API = "https://ipapi.co/json/"; 
  const INDONESIA_CODE = "ID";
  const TIMEOUT_MS = 2000;

 
  function fetchWithTimeout(url, opts = {}, timeout = TIMEOUT_MS) {
    return Promise.race([
      fetch(url, opts),
      new Promise((_, rej) => setTimeout(() => rej(new Error("geo timeout")), timeout))
    ]);
  }

  try {
    const res = await fetchWithTimeout(GEO_API, {cache: "no-store"});
    if (!res.ok) throw new Error("geo failed");
    const info = await res.json();
    const country = (info.country || info.country_code || "").toUpperCase();

    
    if (country === INDONESIA_CODE) {
      
      const target = document.getElementById("geo-target");
      if (target) {
        target.innerHTML = `
          <!-- Contoh tampilan lokal -->
          <h1>TES COLOK WILAYAH 🇮🇩</h1>
          <p>Kalo kamu orang indo yang dekil, kumel, item, bau knalpot... kamu pasti bisa liat ini...</p>
        `;
      }

    } else {
      
      document.documentElement.setAttribute("data-geo", country || "unknown");
    }
  } catch (e) {
    
    console.warn("Geo detect failed:", e);
    document.documentElement.setAttribute("data-geo", "unknown");
  }
})();
