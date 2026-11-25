
const datosNegocio = {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    "name": "DE DIEZ MECÁNICA",
    "description": "Taller de mecánica ligera en Caseros, Buenos Aires. Servicios de frenos, dirección, suspensión, mantenimiento general, baterías, electricidad básica y limpieza interior y exterior de vehículos.",
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
        "name": "Caseros, Buenos Aires, Argentina"
    },
    "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Servicios de DE DIEZ MECÁNICA",
        "itemListElement": [
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Mecánica ligera y mantenimiento general"
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Revisión y cambio de pastillas y discos de freno"
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Dirección y suspensión: rótulas, bieletas y extremos de dirección"
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Cambio de baterías y electricidad automotriz básica"
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Cambio de bujías"
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Limpieza interior y exterior de vehículos"
                }
            }
        ]
    }
};

const scriptSEO = document.createElement("script");

scriptSEO.type = "application/ld+json";
scriptSEO.textContent = JSON.stringify(datosNegocio);

document.head.appendChild(scriptSEO);
