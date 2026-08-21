const DEFAULT_SERVICES = [
  ["scissors", "CORTES UNISEX", "Solo sábado y domingo"],
  ["wax", "DEPILACIONES", ""],
  ["straightener", "PLANCHADOS", ""],
  ["hair-makeup", "PEINADO Y MAQUILLAJE", ""],
  ["bleach", "DECOLORACIONES", ""],
  ["hair-treatment", "TRATAMIENTOS CAPILARES", ""],
  ["perm", "BASES CHINAS", ""]
];

const icons = {
  scissors: `<svg viewBox="0 0 80 80" class="professional-icon" aria-hidden="true"><circle cx="22" cy="25" r="10"/><circle cx="22" cy="55" r="10"/><path d="M30 31L69 9"/><path d="M30 49L69 71"/><path d="M30 31L69 71"/></svg>`,
  wax: `<svg viewBox="0 0 80 80" class="professional-icon" aria-hidden="true"><rect x="24" y="25" width="32" height="38" rx="5"/><path d="M24 30H56"/><path d="M30 20H50"/><path d="M35 15H45"/><path d="M40 15V9"/></svg>`,
  straightener: `<svg viewBox="0 0 100 80" class="professional-icon straightener-icon" aria-hidden="true"><path d="M15 18L65 7Q75 5 80 13L82 18Q84 24 76 27L26 41Q17 43 14 35Q12 27 15 18Z"/><path d="M26 41L76 27Q85 25 88 34L89 38Q91 46 82 49L35 62Q26 64 23 56Q21 48 26 41Z"/><path d="M14 35L6 42Q2 45 5 49L14 57"/><path d="M35 62Q47 71 58 67Q69 64 79 70Q88 77 96 70"/><rect x="48" y="23" width="8" height="6" rx="2"/><line x1="31" y1="42" x2="72" y2="31"/><line x1="34" y1="50" x2="75" y2="39"/></svg>`,
  "hair-makeup": `<svg viewBox="0 0 80 80" class="professional-icon" aria-hidden="true"><path d="M18 61Q10 40 25 22Q39 7 56 18Q67 25 65 39"/><path d="M18 61Q31 67 43 58Q52 51 55 42"/><path d="M51 43L70 63"/><path d="M46 39L54 31L61 38L53 46Z"/><path d="M54 31L61 24"/></svg>`,
  bleach: `<svg viewBox="0 0 80 80" class="professional-icon" aria-hidden="true"><path d="M27 22H53L56 65H24Z"/><path d="M31 16H49"/><path d="M34 10H46"/><path d="M43 29L34 45H42L37 57L49 40H41Z"/></svg>`,
  "hair-treatment": `<svg viewBox="0 0 80 80" class="professional-icon" aria-hidden="true"><path d="M17 62Q9 40 23 23Q38 7 56 18Q66 24 65 38"/><path d="M17 62Q30 69 44 59Q53 52 56 41"/><path d="M55 17Q48 27 55 33Q62 27 55 17Z"/><path d="M67 27Q61 35 67 40Q73 35 67 27Z"/></svg>`,
  perm: `<svg viewBox="0 0 80 80" class="professional-icon" aria-hidden="true"><path d="M17 62Q9 40 23 23Q38 7 56 18Q66 24 65 38"/><path d="M17 62Q30 69 44 59Q53 52 56 41"/><path d="M44 25Q57 25 57 36Q57 46 45 46Q36 46 37 37Q38 29 47 31Q53 33 51 39"/></svg>`
};

function renderServices() {
  const container = document.getElementById("servicesGrid");
  if (!container) return;
  container.innerHTML = services.map(service => `
    <article class="service-card">
      <div class="service-symbol">${icons[service[0]]}</div>
      <div><h3>${service[1]}</h3>${service[2] ? `<p>${service[2]}</p>` : ""}</div>
    </article>
  `).join("");
}

// Solo fotografías reales de trabajos/sesión entregadas para esta página.
const DEFAULT_GALLERY = [
  ["assets/color-01.jpg", "Color y acabado"],
  ["assets/color-02.jpg", "Coloración"],
  ["assets/ondas.webp", "Ondas"],
  ["assets/trabajo-01.jpeg", "Peinado"],
  ["assets/trabajo-02.jpeg", "Cabello"],
  ["assets/trabajo-03.jpeg", "Ondas"],
  ["assets/trabajo-04.jpeg", "Color"],
  ["assets/trabajo-05.jpeg", "Rubio"],
  ["assets/trabajo-06.jpeg", "Color"],
  ["assets/trabajo-07.jpeg", "Color fantasía"],
  ["assets/trabajo-08.jpeg", "Color"],
  ["assets/trabajo-09.jpeg", "Maquillaje y peinado"],
  ["assets/trabajo-10.jpeg", "Cabello"],
  ["assets/trabajo-11.jpeg", "Peinado"],
  ["assets/trabajo-12.jpeg", "Peinado de evento"]
];


const siteData = (typeof avrilLoadData === "function") ? avrilLoadData() : null;
const services = siteData?.services || DEFAULT_SERVICES;
const gallery = siteData?.gallery || DEFAULT_GALLERY;

function applySiteData() {
  if (!siteData) return;
  const setText = (id, value) => { const el=document.getElementById(id); if(el) el.textContent=value; };
  const setHTML = (id, value) => { const el=document.getElementById(id); if(el) el.innerHTML=value; };
  setText("heroText1", siteData.heroText1);
  setText("heroText2", siteData.heroText2);
  setHTML("addressText", String(siteData.address||"").replace(/\n/g,"<br>"));
  setHTML("scheduleText", String(siteData.schedule||"").replace(/\n/g,"<br>"));
  setText("phoneText", siteData.phone);
  document.querySelectorAll('a[href*="wa.me"]').forEach(a=>a.href=`https://wa.me/${siteData.whatsapp}?text=Hola%20Avril%2C%20quiero%20agendar%20una%20cita.`);
  const phoneHref=`tel:+${String(siteData.whatsapp||"")}`;
  document.querySelectorAll('.phone-number').forEach(el=>el.textContent=siteData.phone);
  document.querySelectorAll('.phone-icon').forEach(el=>{ const a=el.parentElement.querySelector('a[href^="tel:"]'); if(a)a.href=phoneHref; });
  const map=document.querySelector('.location-icon')?.parentElement?.querySelector('a'); if(map && siteData.mapUrl) map.href=siteData.mapUrl;
  const socials=document.querySelectorAll('.socials a');
  if(socials[0]){socials[0].href=siteData.instagram||"#";socials[0].style.display=siteData.instagram?"inline-flex":"none";}
  if(socials[1]){socials[1].href=siteData.facebook||"#";socials[1].style.display=siteData.facebook?"inline-flex":"none";}
  if(socials[2]){socials[2].href=siteData.tiktok||"#";socials[2].style.display=siteData.tiktok?"inline-flex":"none";}
}

let start = 0;

function visibleCount() {
  if (window.innerWidth <= 760) return 2;
  if (window.innerWidth <= 1100) return 3;
  return 5;
}

function createGalleryItem(photo, index) {
  const button = document.createElement("button");
  button.className = "gallery-item";
  button.type = "button";
  button.innerHTML = `<img src="${photo[0]}" alt="${photo[1]}" loading="lazy"><span>${photo[1]}</span>`;
  button.addEventListener("click", () => lightbox(index));
  return button;
}

function renderGallery() {
  const container = document.getElementById("galleryGrid");
  if (!container) return;
  container.innerHTML = "";
  const count = visibleCount();
  for (let i = 0; i < count; i++) {
    const index = (start + i) % gallery.length;
    container.appendChild(createGalleryItem(gallery[index], index));
  }
}

function showAllGallery() {
  const container = document.getElementById("galleryGrid");
  if (!container) return;
  container.classList.add("all-gallery");
  container.innerHTML = "";
  gallery.forEach((photo, index) => container.appendChild(createGalleryItem(photo, index)));
  document.getElementById("showAll").textContent = "MOSTRAR MENOS ↑";
}

function lightbox(index) {
  const photo = gallery[index];
  const box = document.createElement("div");
  box.className = "lightbox";
  box.innerHTML = `<button class="close" type="button" aria-label="Cerrar">×</button><img src="${photo[0]}" alt="${photo[1]}"><p>${photo[1]}</p>`;
  document.body.appendChild(box);
  box.querySelector(".close").addEventListener("click", () => box.remove());
  box.addEventListener("click", event => { if (event.target === box) box.remove(); });
}

document.addEventListener("DOMContentLoaded", () => {
  applySiteData();
  renderServices();
  renderGallery();

  const menuButton = document.querySelector(".menu-btn");
  const navLinks = document.getElementById("navLinks");
  if (menuButton && navLinks) {
    menuButton.addEventListener("click", () => navLinks.classList.toggle("open"));
    navLinks.querySelectorAll("a").forEach(link => link.addEventListener("click", () => navLinks.classList.remove("open")));
  }

  document.getElementById("next")?.addEventListener("click", () => { start = (start + 1) % gallery.length; renderGallery(); });
  document.getElementById("prev")?.addEventListener("click", () => { start = (start - 1 + gallery.length) % gallery.length; renderGallery(); });

  let allShown = false;
  document.getElementById("showAll")?.addEventListener("click", () => {
    allShown = !allShown;
    if (allShown) showAllGallery();
    else { document.getElementById("showAll").textContent = "VER TODA LA GALERÍA →"; document.getElementById("galleryGrid").classList.remove("all-gallery"); renderGallery(); }
  });
});

let resizeTimer;
window.addEventListener("resize", () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(renderGallery, 150);
});
