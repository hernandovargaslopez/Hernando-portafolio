import { CVData, Language } from "./types";

export const MODEL_CHAT = 'gemini-3-pro-preview';
export const MODEL_IMAGE = 'gemini-2.5-flash-image';

export const SCROLL_PROMPT: Record<Language, string> = {
  [Language.EN]: "Start scrolling to explore",
  [Language.ES]: "Comienza a desplazarte para explorar"
};

export const CV_DATA: Record<Language, CVData> = {
  [Language.EN]: {
    name: "Hernando Vargas López",
    title: "Product Director – Front-End – UI/UX",
    email: "hernan182h@gmail.com",
    phone: "+57 300 800 4819",
    location: "Bogotá / Colombia & Remote",
    whatsapp: "+57 300 800 4819",
    portfolioUrl: "https://hernandovargaslopez.github.io/Hernando-portafolio/",
    summary: "Professional in Graphic Design and Audiovisual Media from Politécnico Grancolombiano University. I have 8 years of experience in developing and leading digital products, as well as designing and building websites and applications. Specialist in HTML, CSS, and JavaScript, dedicated to creating high-quality digital experiences.",
    about: "Extensive experience in front-end development and building digital products, with a focus on interface architecture, accessibility, performance, and user experience. Ability to lead development processes, translate strategic requirements into scalable solutions, and ensure high technical quality standards in digital environments.",
    experience: [
      {
        company: "Scotiabank",
        role: "UX Developer",
        period: "29/03/2023 - Present",
        highlights: [
          "Development and redesign of web pages focused on transactional portals and dynamic.ca.",
          "Created specialized digital experiences for business advising.",
          "Bridged the gap between UX design requirements and technical implementation."
        ]
      },
      {
        company: "Instituto Geográfico Agustín Codazzi (IGAC)",
        role: "Front-End Developer",
        period: "30/08/2021 - 31/12/2024",
        highlights: [
          "Led development for Colombian Space Commission and Cartographic Dictionary interfaces.",
          "Front-end and Visual Design for 'Expediciones IGAC' educational platform.",
          "Optimized web performance and ensured high standards of digital accessibility."
        ]
      },
      {
        company: "Grupo Sancho",
        role: "UI/UX Designer",
        period: "01/06/2021 - 26/08/2022",
        highlights: [
          "Development and conceptualization of user-centered web pages and applications.",
          "Used a tech stack including JavaScript, jQuery, HTML, CSS, and Sass.",
          "Translated business goals into intuitive user interfaces."
        ]
      },
      {
        company: "Kienyke.com",
        role: "Web Designer & Product Lead",
        period: "01/02/2018 - 20/05/2021",
        highlights: [
          "Product Lead for the strategic integral redesign of KienyKe.com.",
          "Design and development for 'Festival de los Sentidos' official event site.",
          "Digital product and project manager aligned with new technological trends."
        ]
      },
      {
        company: "Educational & Institutional Media",
        role: "Graphic Designer – Video Postproduction",
        period: "01/02/2016 - 30/07/2017",
        highlights: [
          "Experience in pre-production, production, and post-production of audiovisual content.",
          "Created comprehensive marketing and institutional campaigns.",
          "Expertise in motion graphics and video editing for educational purposes."
        ]
      }
    ],
    skills: {
      tech: ["React", "AEM", "Drupal", "HTML5", "CSS3", "JavaScript", "jQuery", "Sass", "Scrum", "Accessibility"],
      design: ["Figma", "Adobe XD", "Photoshop", "Illustrator", "After Effects"],
      platforms: ["AEM", "Drupal", "WordPress"],
      tools: ["Excel", "Word"]
    },
    education: [
      {
        school: "Politécnico Grancolombiano University",
        degree: "Bachelor’s Degree in Graphic Design",
        year: "2018"
      },
      {
        school: "Politécnico Grancolombiano University",
        degree: "Bachelor’s Degree in Audiovisual Media",
        year: "2017"
      }
    ],
    languages: ["Spanish (Native)", "English"],
    references: [
      {
        name: "César Monsalvo",
        role: "Technology Director – Kienyke.com",
        contact: "+57 3125222456 / cesar.monsalvo@kienyke.com"
      },
      {
        name: "Pamela Mayorga",
        role: "Deputy Director – IGAC",
        contact: "+57 3043776867 / pamela.mayorga@igac.gov.co"
      }
    ]
  },
  [Language.ES]: {
    name: "Hernando Vargas López",
    title: "Director de Producto – Front-End – UI/UX",
    email: "hernan182h@gmail.com",
    phone: "+57 300 800 4819",
    location: "Bogotá / Colombia y Remoto",
    whatsapp: "+57 300 800 4819",
    portfolioUrl: "https://hernandovargaslopez.github.io/Hernando-portafolio/",
    summary: "Profesional en Diseño Gráfico y Medios Audiovisuales de la Universidad Politécnico Grancolombiano. Tengo 8 años de experiencia en el desarrollo y liderazgo de productos digitales, así como en el diseño y construcción de sitios web y aplicaciones. Especialista en HTML, CSS y JavaScript, dedicado a crear experiencias digitales de alta calidad.",
    about: "Experiencia en desarrollo front-end y productos digitales, con enfoque en interfaces escalables, accesibilidad y rendimiento.",
    experience: [
      {
        company: "Scotiabank",
        role: "Desarrollador UX",
        period: "29/03/2023 - Actualidad",
        highlights: [
          "Desarrollo y rediseño de páginas web enfocadas en portales transaccionales y dynamic.ca.",
          "Creación de experiencias digitales especializadas para asesoría empresarial.",
          "Cierre de brecha entre los requisitos de diseño UX y la implementación técnica."
        ]
      },
      {
        company: "Instituto Geográfico Agustín Codazzi (IGAC)",
        role: "Desarrollador Front-End",
        period: "30/08/2021 - 31/12/2024",
        highlights: [
          "Liderazgo en el desarrollo para la Comisión Colombiana del Espacio y Diccionario Cartográfico.",
          "Proyecto Front-End y Diseño Visual para la plataforma educativa 'Expediciones IGAC'.",
          "Optimización del rendimiento web y garantía de altos estándares de accesibilidad digital."
        ]
      },
      {
        company: "Grupo Sancho",
        role: "Diseñador UI/UX",
        period: "01/06/2021 - 26/08/2022",
        highlights: [
          "Desarrollo y conceptualización de páginas web y aplicaciones centradas en el usuario.",
          "Uso de tecnologías como JavaScript, jQuery, HTML, CSS y Sass.",
          "Traducción de objetivos de negocio en interfaces de usuario intuitivas."
        ]
      },
      {
        company: "Kienyke.com",
        role: "Diseñador Web y Líder de Producto",
        period: "01/02/2018 - 20/05/2021",
        highlights: [
          "Líder de producto en el rediseño estratégico integral de KienyKe.com.",
          "Diseño y desarrollo web para el sitio oficial del 'Festival de los Sentidos'.",
          "Gestor de productos y proyectos digitales, alineado con nuevas tendencias tecnológicas."
        ]
      },
      {
        company: "Medios Educativos e Institucionales",
        role: "Diseñador Gráfico – Posproducción de Video",
        period: "01/02/2016 - 30/07/2017",
        highlights: [
          "Experiencia en pre-producción, producción y post-producción de contenido audiovisual.",
          "Creación de campañas integrales de marketing e institucionales.",
          "Experiencia en motion graphics y edición de video para fines educativos."
        ]
      }
    ],
    skills: {
      tech: ["React", "AEM", "Drupal", "HTML5", "CSS3", "JavaScript", "jQuery", "Sass", "Scrum", "Accessibility"],
      design: ["Figma", "Adobe XD", "Photoshop", "Illustrator", "After Effects"],
      platforms: ["AEM", "Drupal", "WordPress"],
      tools: ["Excel", "Word"]
    },
    education: [
      {
        school: "Universidad Politécnico Grancolombiano",
        degree: "Profesional en Diseño Gráfico",
        year: "2018"
      },
      {
        school: "Universidad Politécnico Grancolombiano",
        degree: "Profesional en Medios Audiovisuales",
        year: "2017"
      }
    ],
    languages: ["Español (Nativo)", "Inglés"],
    references: [
      {
        name: "César Monsalvo",
        role: "Director de Tecnología – Kienyke.com",
        contact: "+57 3125222456 / cesar.monsalvo@kienyke.com"
      },
      {
        name: "Pamela Mayorga",
        role: "Subdirectora – IGAC",
        contact: "+57 3043776867 / pamela.mayorga@igac.gov.co"
      }
    ]
  }
};











export const DASHBOARD_CONTENT = {
  [Language.EN]: {
    available: "Available for New Opportunities",
    intro: "Crafting high-quality digital experiences for over 8 years. I lead product vision from conceptual design to frontend architectural excellence.",
    highlights: "Featured Projects",
    stats: [
      {
        label: "Front-End",
        val: (
          <>
            React / Angular / CMS
            <br />
            HTML / CSS / JavaScript
          </>
        ),
        icon: "Code"
      },
      { label: "Diseño", val: "Figma/Adobe", icon: "Palette" },
      { label: "Estrategia", val: "Líder de Producto", icon: "TrendingUp" },
      { label: "Ubicación", val: "Bogotá / Global", icon: "Globe" }
    ],
    experienceBtn: "Review Experience",
    messageBtn: "Send Message",
    viewGallery: "View Gallery",
    projects: [
      {
        title: "Interface Design for Scotiabank Canada",
        category: "Fintech, UX Development",
        desc: "Integration of key functionalities, alignment with the institutional visual identity, and compliance with accessibility and usability standards.",
        tags: ["Fintech", "UX", "Security"],
        color: "from-blue-600 to-[#bf1820]",
        gallery: ["images/trabajo-1.png"]
      },
      {
        title: "Financial Portals Optimization @ dynamic.ca",
        category: "Fintech, UX Development",
        desc: "Web design and optimization for financial portals and investment fund platforms, focusing on security, efficiency, and user experience.",
        tags: ["Fintech", "UX", "Security"],
        color: "from-blue-600 to-[#bf1820]",
        gallery: ["images/trabajo-2.png"]
      },
      {
        title: "Cartographic Dictionary (IGAC)",
        category: "Frontend / Accessibility",
        desc: "Creation of accessible digital solutions and intuitive interfaces for the official Cartographic Dictionary of Colombia.",
        tags: ["Accessibility", "Frontend", "UI"],
        color: "from-emerald-500 to-teal-700",
        gallery: ["images/trabajo-3.png"]
      },
      {
        title: "Colombian Space Commission (CCE)",
        category: "Government / Web Architecture",
        desc: "Official website for CCE. Hierarchical information architecture and modern interface aligned with Digital Government guidelines.",
        tags: ["GovTech", "Architecture", "Design"],
        color: "from-slate-700 to-slate-900",
        gallery: ["images/comision.mp4"]
      },      
      {
        title: "Expediciones IGAC Platform",
        category: "Educational / Visual Design",
        desc: "Web platform development for geographic and educational content dissemination. Conceptual visual design and technical implementation.",
        tags: ["Education", "Visual Design", "JS"],
        color: "from-orange-500 to-amber-600",
        gallery: ["images/trabajo-4.png"]
      },
      {
        title: "KienyKe.com Integral Redesign",
        category: "Product Leadership / UI-UX",
        desc: "Strategic redesign of the news portal. Coordination of information architecture, UX, and UI for one of the country's top digital media.",
        tags: ["Leadership", "Product", "Media"],
        color: "from-red-600 to-rose-700",
        gallery: ["images/trabajo-5.png"]
      },
      {
        title: "Festival de los Sentidos Site",
        category: "Event Design / Development",
        desc: "Design and development of the official site for KienyKe's flagship innovation and journalism event. Immersive digital experience.",
        tags: ["Events", "Immersive", "Branding"],
        color: "from-purple-600 to-fuchsia-700",
        gallery: ["images/trabajo-6.png"]
      }
    ]
  },
  [Language.ES]: {
    available: "Disponible para Nuevas Oportunidades",
    intro: "Creando experiencias digitales de alta calidad por más de 8 años. Lidero la visión del producto desde el diseño conceptual hasta la excelencia arquitectónica front-end.",
    highlights: "Proyectos Destacados",
    stats: [
      { label: "Frontend", 
        val: (
          <>
            React / Angular / CMS
            <br />
            HTML / CSS / JavaScript
          </>
        ), 
        icon: "Code" 
      },
      { label: "Diseño", val: "Figma/Adobe", icon: "Palette" },
      { label: "Estrategia", val: "Líder de Producto", icon: "TrendingUp" },
      { label: "Ubicación", val: "Bogotá / Global", icon: "Globe" }
    ],
    experienceBtn: "Ver Experiencia",
    messageBtn: "Enviar Mensaje",
    viewGallery: "Ver Galería",
    projects: [
      {
        title: "Diseño de Interfaz para Scotiabank Canadá",
        category: "Fintech, Desarrollo UX",
        desc: "Integración de funcionalidades clave, alineamiento con la identidad visual institucional y cumplimiento de estándares de accesibilidad y usabilidad.",
        tags: ["Fintech", "UX", "Seguridad"],
        color: "from-blue-600 to-[#bf1820]",
        gallery: ["images/trabajo-1.png"]
      },
      {
        title: "Optimización de Portales Financieros @ dynamic.ca",
        category: "Fintech, Desarrollo UX",
        desc: "Diseño web y optimización de portales financieros y plataformas de fondos de inversión, con enfoque en seguridad, eficiencia y experiencia de usuario.",
        tags: ["Fintech", "UX", "Seguridad"],
        color: "from-blue-600 to-[#bf1820]",
        gallery: ["images/trabajo-2.png"]
      },
      {
        title: "Diccionario Cartográfico (IGAC)",
        category: "Frontend / Accesibilidad",
        desc: "Creación de soluciones digitales accesibles e interfaces intuitivas para el Diccionario Cartográfico oficial de Colombia.",
        tags: ["Accesibilidad", "Frontend", "UI"],
        color: "from-emerald-500 to-teal-700",
        gallery: ["images/trabajo-3.png"]
      },
      {
        title: "Comisión Colombiana del Espacio (CCE)",
        category: "Gobierno / Arquitectura Web",
        desc: "Sitio web oficial de la CCE. Arquitectura de información jerárquica e interfaz moderna alineada con lineamientos de Gobierno Digital.",
        tags: ["GovTech", "Arquitectura", "Diseño"],
        color: "from-slate-700 to-slate-900",
        gallery: ["images/comision.mp4"]
      },      
      {
        title: "Plataforma Expediciones IGAC",
        category: "Educativo / Diseño Visual",
        desc: "Desarrollo de plataforma web para la difusión de contenidos geográficos y educativos. Diseño visual conceptual e implementación técnica.",
        tags: ["Educación", "Diseño Visual", "JS"],
        color: "from-orange-500 to-amber-600",
        gallery: ["images/trabajo-4.png"]
      },
      {
        title: "Rediseño Integral KienyKe.com",
        category: "Liderazgo de Producto / UI-UX",
        desc: "Rediseño estratégico del portal de noticias. Coordinación de arquitectura de información, UX y UI para uno de los principales medios digitales del país.",
        tags: ["Liderazgo", "Producto", "Medios"],
        color: "from-red-600 to-rose-700",
        gallery: ["images/trabajo-5.png"]
      },
      {
        title: "Sitio Festival de los Sentidos",
        category: "Diseño y Desarrollo de Eventos",
        desc: "Diseño y desarrollo del sitio oficial del evento insignia de innovación y periodismo de KienyKe. Experiencia digital inmersiva.",
        tags: ["Eventos", "Inmersivo", "Branding"],
        color: "from-purple-600 to-fuchsia-700",
        gallery: ["images/trabajo-7.png"]
      }
    ]
  }
};