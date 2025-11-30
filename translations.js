// Translation system - simple and working like Natafit
const translations = {
  en: {
    nav: {
      portfolio: "Portfolio",
      services: "Services",
      pricing: "Pricing",
      contact: "Contact"
    },
    hero: {
      title: "🚀 I Create Modern Websites",
      subtitle: "Responsive Design • API Integration • Animations • SEO Optimization",
      btn1: "View Portfolio",
      btn2: "Contact Me"
    },
    stats: {
      responsive: "Responsive",
      fast: "Fast Loading",
      seo: "SEO Optimized",
      support: "Support"
    },
    portfolio: {
      title: "💼 My Work",
      natafit: {
        title: "🏋️ Natafit Fitness Website",
        desc: "Website for a personal fitness trainer with booking form and Telegram integration",
        link: "🔗 Open Website →"
      },
      features: "✨ Features:",
      feature1: {
        title: "Booking Form",
        desc: "With Telegram integration"
      },
      feature2: {
        title: "Testimonials",
        desc: "With ratings & animation"
      },
      feature3: {
        title: "Responsive Design",
        desc: "All devices"
      },
      feature4: {
        title: "Dark Theme",
        desc: "Theme switcher"
      },
      feature5: {
        title: "3 Languages",
        desc: "RU / EN / DE"
      },
      feature6: {
        title: "Fast Loading",
        desc: "Optimized"
      },
      tech: "🛠 Technologies:"
    },
    services: {
      title: "🎯 What I Offer",
      badge: "Popular",
      landing: {
        title: "Landing Page",
        desc: "Single-page website to sell your product or service",
        item1: "✅ Responsive design",
        item2: "✅ Contact form",
        item3: "✅ Animations",
        item4: "✅ SEO optimization"
      },
      business: {
        title: "Business Website",
        desc: "Multi-page website for your company or business",
        item1: "✅ 3-5 pages",
        item2: "✅ Forms & integrations",
        item3: "✅ Dark theme",
        item4: "✅ Multilingual"
      },
      improvements: {
        title: "Website Improvements",
        desc: "Fixes, adding features, optimization of existing website",
        item1: "✅ Bug fixes",
        item2: "✅ New features",
        item3: "✅ Design improvements",
        item4: "✅ Speed optimization"
      }
    },
    pricing: {
      title: "💸 Pricing",
      badge: "Recommended",
      landing: {
        title: "Landing Page",
        price: "from $49",
        delivery: "Delivery: 3 days",
        item1: "✅ 1 page",
        item2: "✅ Responsive design",
        item3: "✅ Contact form",
        item4: "✅ Basic SEO"
      },
      business: {
        title: "Business Website",
        price: "from $99",
        delivery: "Delivery: 5 days",
        item1: "✅ 3-5 pages",
        item2: "✅ Modern design",
        item3: "✅ All forms",
        item4: "✅ Full SEO",
        item5: "✅ 2 weeks support"
      },
      improvements: {
        title: "Improvements",
        price: "from $29",
        delivery: "Delivery: 2 days",
        item1: "✅ Bug fixes",
        item2: "✅ New features",
        item3: "✅ Optimization",
        item4: "✅ Consultation"
      }
    },
    contact: {
      title: "📩 Get in Touch",
      text: "Ready to discuss your project! I respond quickly and work with quality"
    },
    footer: {
      rights: "© 2024 WebDev Portfolio. All rights reserved.",
      made: "Made with ❤️ and code"
    }
  },
  de: {
    nav: {
      portfolio: "Portfolio",
      services: "Leistungen",
      pricing: "Preise",
      contact: "Kontakt"
    },
    hero: {
      title: "🚀 Ich erstelle moderne Websites",
      subtitle: "Responsive Design • API-Integration • Animationen • SEO-Optimierung",
      btn1: "Portfolio ansehen",
      btn2: "Kontakt aufnehmen"
    },
    stats: {
      responsive: "Responsiv",
      fast: "Schnelles Laden",
      seo: "SEO-optimiert",
      support: "Support"
    },
    portfolio: {
      title: "💼 Meine Arbeiten",
      natafit: {
        title: "🏋️ Natafit Fitness-Website",
        desc: "Website für einen Personal Fitness Trainer mit Buchungsformular und Telegram-Integration",
        link: "🔗 Website öffnen →"
      },
      features: "✨ Funktionen:",
      feature1: {
        title: "Buchungsformular",
        desc: "Mit Telegram-Integration"
      },
      feature2: {
        title: "Kundenbewertungen",
        desc: "Mit Bewertungen & Animation"
      },
      feature3: {
        title: "Responsive Design",
        desc: "Alle Geräte"
      },
      feature4: {
        title: "Dunkles Design",
        desc: "Theme-Umschalter"
      },
      feature5: {
        title: "3 Sprachen",
        desc: "RU / EN / DE"
      },
      feature6: {
        title: "Schnelles Laden",
        desc: "Optimiert"
      },
      tech: "🛠 Technologien:"
    },
    services: {
      title: "🎯 Meine Leistungen",
      badge: "Beliebt",
      landing: {
        title: "Landing Page",
        desc: "Einseitige Website zum Verkauf Ihres Produkts oder Ihrer Dienstleistung",
        item1: "✅ Responsives Design",
        item2: "✅ Kontaktformular",
        item3: "✅ Animationen",
        item4: "✅ SEO-Optimierung"
      },
      business: {
        title: "Firmen-Website",
        desc: "Mehrseitige Website für Ihr Unternehmen oder Geschäft",
        item1: "✅ 3-5 Seiten",
        item2: "✅ Formulare & Integrationen",
        item3: "✅ Dunkles Design",
        item4: "✅ Mehrsprachig"
      },
      improvements: {
        title: "Website-Verbesserungen",
        desc: "Fehlerbehebungen, neue Funktionen, Optimierung bestehender Websites",
        item1: "✅ Fehlerbehebungen",
        item2: "✅ Neue Funktionen",
        item3: "✅ Design-Verbesserungen",
        item4: "✅ Geschwindigkeitsoptimierung"
      }
    },
    pricing: {
      title: "💸 Preise",
      badge: "Empfohlen",
      landing: {
        title: "Landing Page",
        price: "ab 49€",
        delivery: "Lieferung: 3 Tage",
        item1: "✅ 1 Seite",
        item2: "✅ Responsives Design",
        item3: "✅ Kontaktformular",
        item4: "✅ Basis-SEO"
      },
      business: {
        title: "Firmen-Website",
        price: "ab 99€",
        delivery: "Lieferung: 5 Tage",
        item1: "✅ 3-5 Seiten",
        item2: "✅ Modernes Design",
        item3: "✅ Alle Formulare",
        item4: "✅ Vollständiges SEO",
        item5: "✅ 2 Wochen Support"
      },
      improvements: {
        title: "Verbesserungen",
        price: "ab 29€",
        delivery: "Lieferung: 2 Tage",
        item1: "✅ Fehlerbehebungen",
        item2: "✅ Neue Funktionen",
        item3: "✅ Optimierung",
        item4: "✅ Beratung"
      }
    },
    contact: {
      title: "📩 Kontakt aufnehmen",
      text: "Bereit, Ihr Projekt zu besprechen! Ich antworte schnell und arbeite qualitativ hochwertig"
    },
    footer: {
      rights: "© 2024 WebDev Portfolio. Alle Rechte vorbehalten.",
      made: "Mit ❤️ und Code erstellt"
    }
  }
};

// Helper function to get translation by key path
function getTranslation(key, lang) {
  const keys = key.split('.');
  let value = translations[lang];
  
  for (const k of keys) {
    if (value && value[k] !== undefined) {
      value = value[k];
    } else {
      return null;
    }
  }
  
  return value;
}

// Apply translations to page
function updateTranslations(lang) {
  document.querySelectorAll('[data-translate]').forEach(element => {
    const key = element.getAttribute('data-translate');
    const translation = getTranslation(key, lang);
    if (translation) {
      element.textContent = translation;
    }
  });
  
  document.documentElement.lang = lang;
}

// Store value in localStorage
function storeValue(key, value) {
  try {
    localStorage.setItem(key, value);
  } catch (e) {
    console.warn('localStorage not available:', e);
  }
}

// Get stored value from localStorage
function getStoredValue(key, defaultValue) {
  try {
    return localStorage.getItem(key) || defaultValue;
  } catch (e) {
    return defaultValue;
  }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
  console.log('Portfolio translations loaded');
  const savedLang = getStoredValue('lang', 'en');
  console.log('Saved language:', savedLang);
  
  // Apply saved language
  updateTranslations(savedLang);
  
  // Set select value
  const langSelect = document.getElementById('lang-select');
  if (langSelect) {
    langSelect.value = savedLang;
    console.log('Select found, value set to:', savedLang);
  } else {
    console.error('lang-select not found!');
  }
  
  // Listen for language change - RELOAD PAGE
  if (langSelect) {
    langSelect.addEventListener('change', (e) => {
      const newLang = e.target.value;
      console.log('Language changed to:', newLang);
      storeValue('lang', newLang);
      console.log('Reloading page...');
      // Reload page to apply new language
      setTimeout(() => {
        window.location.reload();
      }, 100);
    });
  }
});
const translations = {
  en: {
    nav: {
      portfolio: "Portfolio",
      services: "Services",
      pricing: "Pricing",
      contact: "Contact"
    },
    hero: {
      title: "🚀 I Create Modern Websites",
      subtitle: "Responsive Design • API Integration • Animations • SEO Optimization",
      btn1: "View Portfolio",
      btn2: "Contact Me"
    },
    stats: {
      responsive: "Responsive",
      fast: "Fast Loading",
      seo: "SEO Optimized",
      support: "Support"
    },
    portfolio: {
      title: "💼 My Work",
      natafit: {
        title: "🏋️ Natafit Fitness Website",
        desc: "Website for a personal fitness trainer with booking form and Telegram integration",
        link: "🔗 Open Website →"
      },
      features: "✨ Features:",
      feature1: {
        title: "Booking Form",
        desc: "With Telegram integration"
      },
      feature2: {
        title: "Testimonials",
        desc: "With ratings & animation"
      },
      feature3: {
        title: "Responsive Design",
        desc: "All devices"
      },
      feature4: {
        title: "Dark Theme",
        desc: "Theme switcher"
      },
      feature5: {
        title: "3 Languages",
        desc: "RU / EN / DE"
      },
      feature6: {
        title: "Fast Loading",
        desc: "Optimized"
      },
      tech: "🛠 Technologies:"
    },
    services: {
      title: "🎯 What I Offer",
      badge: "Popular",
      landing: {
        title: "Landing Page",
        desc: "Single-page website to sell your product or service",
        item1: "✅ Responsive design",
        item2: "✅ Contact form",
        item3: "✅ Animations",
        item4: "✅ SEO optimization"
      },
      business: {
        title: "Business Website",
        desc: "Multi-page website for your company or business",
        item1: "✅ 3-5 pages",
        item2: "✅ Forms & integrations",
        item3: "✅ Dark theme",
        item4: "✅ Multilingual"
      },
      improvements: {
        title: "Website Improvements",
        desc: "Fixes, adding features, optimization of existing website",
        item1: "✅ Bug fixes",
        item2: "✅ New features",
        item3: "✅ Design improvements",
        item4: "✅ Speed optimization"
      }
    },
    pricing: {
      title: "💸 Pricing",
      badge: "Recommended",
      landing: {
        title: "Landing Page",
        price: "from $49",
        delivery: "Delivery: 3 days",
        item1: "✅ 1 page",
        item2: "✅ Responsive design",
        item3: "✅ Contact form",
        item4: "✅ Basic SEO"
      },
      business: {
        title: "Business Website",
        price: "from $99",
        delivery: "Delivery: 5 days",
        item1: "✅ 3-5 pages",
        item2: "✅ Modern design",
        item3: "✅ All forms",
        item4: "✅ Full SEO",
        item5: "✅ 2 weeks support"
      },
      improvements: {
        title: "Improvements",
        price: "from $29",
        delivery: "Delivery: 2 days",
        item1: "✅ Bug fixes",
        item2: "✅ New features",
        item3: "✅ Optimization",
        item4: "✅ Consultation"
      }
    },
    contact: {
      title: "📩 Get in Touch",
      text: "Ready to discuss your project! I respond quickly and work with quality"
    },
    footer: {
      rights: "© 2024 WebDev Portfolio. All rights reserved.",
      made: "Made with ❤️ and code"
    }
  },
  de: {
    nav: {
      portfolio: "Portfolio",
      services: "Leistungen",
      pricing: "Preise",
      contact: "Kontakt"
    },
    hero: {
      title: "🚀 Ich erstelle moderne Websites",
      subtitle: "Responsive Design • API-Integration • Animationen • SEO-Optimierung",
      btn1: "Portfolio ansehen",
      btn2: "Kontakt aufnehmen"
    },
    stats: {
      responsive: "Responsiv",
      fast: "Schnelles Laden",
      seo: "SEO-optimiert",
      support: "Support"
    },
    portfolio: {
      title: "💼 Meine Arbeiten",
      natafit: {
        title: "🏋️ Natafit Fitness-Website",
        desc: "Website für einen Personal Fitness Trainer mit Buchungsformular und Telegram-Integration",
        link: "🔗 Website öffnen →"
      },
      features: "✨ Funktionen:",
      feature1: {
        title: "Buchungsformular",
        desc: "Mit Telegram-Integration"
      },
      feature2: {
        title: "Kundenbewertungen",
        desc: "Mit Bewertungen & Animation"
      },
      feature3: {
        title: "Responsive Design",
        desc: "Alle Geräte"
      },
      feature4: {
        title: "Dunkles Design",
        desc: "Theme-Umschalter"
      },
      feature5: {
        title: "3 Sprachen",
        desc: "RU / EN / DE"
      },
      feature6: {
        title: "Schnelles Laden",
        desc: "Optimiert"
      },
      tech: "🛠 Technologien:"
    },
    services: {
      title: "🎯 Meine Leistungen",
      badge: "Beliebt",
      landing: {
        title: "Landing Page",
        desc: "Einseitige Website zum Verkauf Ihres Produkts oder Ihrer Dienstleistung",
        item1: "✅ Responsives Design",
        item2: "✅ Kontaktformular",
        item3: "✅ Animationen",
        item4: "✅ SEO-Optimierung"
      },
      business: {
        title: "Firmen-Website",
        desc: "Mehrseitige Website für Ihr Unternehmen oder Geschäft",
        item1: "✅ 3-5 Seiten",
        item2: "✅ Formulare & Integrationen",
        item3: "✅ Dunkles Design",
        item4: "✅ Mehrsprachig"
      },
      improvements: {
        title: "Website-Verbesserungen",
        desc: "Fehlerbehebungen, neue Funktionen, Optimierung bestehender Websites",
        item1: "✅ Fehlerbehebungen",
        item2: "✅ Neue Funktionen",
        item3: "✅ Design-Verbesserungen",
        item4: "✅ Geschwindigkeitsoptimierung"
      }
    },
    pricing: {
      title: "💸 Preise",
      badge: "Empfohlen",
      landing: {
        title: "Landing Page",
        price: "ab 49€",
        delivery: "Lieferung: 3 Tage",
        item1: "✅ 1 Seite",
        item2: "✅ Responsives Design",
        item3: "✅ Kontaktformular",
        item4: "✅ Basis-SEO"
      },
      business: {
        title: "Firmen-Website",
        price: "ab 99€",
        delivery: "Lieferung: 5 Tage",
        item1: "✅ 3-5 Seiten",
        item2: "✅ Modernes Design",
        item3: "✅ Alle Formulare",
        item4: "✅ Vollständiges SEO",
        item5: "✅ 2 Wochen Support"
      },
      improvements: {
        title: "Verbesserungen",
        price: "ab 29€",
        delivery: "Lieferung: 2 Tage",
        item1: "✅ Fehlerbehebungen",
        item2: "✅ Neue Funktionen",
        item3: "✅ Optimierung",
        item4: "✅ Beratung"
      }
    },
    contact: {
      title: "📩 Kontakt aufnehmen",
      text: "Bereit, Ihr Projekt zu besprechen! Ich antworte schnell und arbeite qualitativ hochwertig"
    },
    footer: {
      rights: "© 2024 WebDev Portfolio. Alle Rechte vorbehalten.",
      made: "Mit ❤️ und Code erstellt"
    }
  }
};

// Get nested translation
function getTranslation(lang, key) {
  const keys = key.split('.');
  let value = translations[lang];
  
  for (const k of keys) {
    if (value && value[k] !== undefined) {
      value = value[k];
    } else {
      return translations.en[key] || key; // Fallback to English
    }
  }
  
  return value;
}

// Apply translations to page
function applyTranslations(lang) {
  document.querySelectorAll('[data-translate]').forEach(element => {
    const key = element.getAttribute('data-translate');
    const translation = getTranslation(lang, key);
    element.textContent = translation;
  });
  
  // Update HTML lang attribute
  document.documentElement.lang = lang;
}

// Initialize language system
function initLanguage() {
  const langButtons = document.querySelectorAll('.lang-btn');
  const savedLang = localStorage.getItem('language') || 'en';
  
  console.log('Language buttons found:', langButtons.length);
  console.log('Saved language:', savedLang);
  
  // Set active button
  langButtons.forEach(btn => {
    if (btn.dataset.lang === savedLang) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
  
  // Apply saved language
  applyTranslations(savedLang);
  
  // Listen for language change - reload page on change
  langButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const newLang = btn.dataset.lang;
      console.log('Clicked language:', newLang);
      
      // Always save and reload
      localStorage.setItem('language', newLang);
      
      // Update active state
      langButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      // Reload page
      setTimeout(() => {
        window.location.reload();
      }, 100);
    });
  });
}

// Initialize on page load
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initLanguage);
} else {
  initLanguage();
}
