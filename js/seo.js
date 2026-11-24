
const datosNegocio = {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    "name": "DE DIEZ MECÁNICA",
    "description": "Mecánica ligera y limpieza interior y exterior de vehículos en Caseros, Buenos Aires.",
    "telephone": "+5492665004186",
    "url": "https://dediezmecanica.com.ar/",
    "address": {
        "@type": "PostalAddress",
        "streetAddress": "Martín de Alzaga 2874",
        "addressLocality": "Caseros",
        "addressRegion": "Buenos Aires",
        "addressCountry": "AR"
    },
    "areaServed": {
        "@type": "Place",
        "name": "Caseros y alrededores, Buenos Aires"
    }
};

const scriptSEO = document.createElement("script");

scriptSEO.type = "application/ld+json";
scriptSEO.textContent = JSON.stringify(datosNegocio);

document.head.appendChild(scriptSEO);
