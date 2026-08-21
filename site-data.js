const AVRIL_DEFAULT_DATA = {
  businessName: "AVRIL",
  tagline: "Salón Peluquería",
  heroText1: "Más de 10 años realzando tu belleza",
  heroText2: "Cambios de look, cortes y servicios de belleza",
  phone: "812 432 4587",
  whatsapp: "528124324587",
  address: "Sierra Cantabria #122\nCol. Sierra Real 3er sector",
  mapUrl: "https://www.google.com/maps/search/?api=1&query=Sierra+Cantabria+122+Sierra+Real+Garcia+Nuevo+Leon",
  schedule: "Lunes a Domingo\n1:00 p. m. – 8:00 p. m.",
  instagram: "https://www.instagram.com/avril.peluqueria/",
  facebook: "",
  tiktok: "",
  services: [
    ["scissors", "CORTES UNISEX", "Solo sábado y domingo"],
    ["wax", "DEPILACIONES", ""],
    ["straightener", "PLANCHADOS", ""],
    ["hair-makeup", "PEINADO Y MAQUILLAJE", ""],
    ["bleach", "DECOLORACIONES", ""],
    ["hair-treatment", "TRATAMIENTOS CAPILARES", ""],
    ["perm", "BASES CHINAS", ""]
  ],
  gallery: [
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
  ]
};

function avrilLoadData() {
  try {
    const saved = JSON.parse(localStorage.getItem("avrilSiteData") || "null");
    if (!saved) return structuredClone(AVRIL_DEFAULT_DATA);
    return Object.assign(structuredClone(AVRIL_DEFAULT_DATA), saved);
  } catch (e) {
    return structuredClone(AVRIL_DEFAULT_DATA);
  }
}

function avrilSaveData(data) {
  localStorage.setItem("avrilSiteData", JSON.stringify(data));
}

function avrilResetData() {
  localStorage.removeItem("avrilSiteData");
}
