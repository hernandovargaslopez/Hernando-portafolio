
import { CVData, Language } from "./types";

export const MODEL_CHAT = 'gemini-3-pro-preview';
export const MODEL_IMAGE = 'gemini-2.5-flash-image';

export const CV_DATA: Record<Language, CVData> = {
  [Language.EN]: {
    name: "Hernando Vargas López",
    title: "Product Director – Front-End – UI/UX",
    email: "hernan182h@gmail.com",
    phone: "+57 300 800 4819",
    location: "Bogotá / Colombia & Remote",
    whatsapp: "+57 300 800 4819",
    portfolioUrl: "https://hernandovargaslopez.github.io/Hernando-portafolio/",
    summary: "Professional in Graphic Design and Audiovisual Media from Politécnico Grancolombiano University. I have 5 years of experience in developing and leading digital products, as well as designing and building websites and applications. Specialist in HTML, CSS, and JavaScript, dedicated to creating high-quality digital experiences.",
    experience: [
      {
        company: "Scotiabank",
        role: "UX Developer",
        period: "29/03/2023 - Present",
        highlights: [
          "Development and redesign of web pages focused on transactional portals.",
          "Created specialized digital experiences for business advising.",
          "Bridged the gap between UX design requirements and technical implementation."
        ]
      },
      {
        company: "Instituto Geográfico Agustín Codazzi (IGAC)",
        role: "Front-End Developer",
        period: "30/08/2021 - 31/12/2024",
        highlights: [
          "Specialist in HTML, CSS and JavaScript working on the institute's digital environment.",
          "Optimized web performance and ensured high standards of digital accessibility.",
          "Maintained complex digital environments for government-scale projects."
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
        role: "Web Designer",
        period: "01/02/2018 - 20/05/2021",
        highlights: [
          "Digital product and project manager aligned with new technological trends.",
          "Provided solutions for successful project execution in a fast-paced digital media environment.",
          "Managed cross-functional design and technology workflows."
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
      tech: ["HTML5", "CSS3", "JavaScript", "jQuery", "Sass", "Scrum", "Accessibility"],
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
    summary: "Profesional en Diseño Gráfico y Medios Audiovisuales de la Universidad Politécnico Grancolombiano. Tengo 5 años de experiencia en el desarrollo y liderazgo de productos digitales, así como en el diseño y construcción de sitios web y aplicaciones. Especialista en HTML, CSS y JavaScript, dedicado a crear experiencias digitales de alta calidad.",
    experience: [
      {
        company: "Scotiabank",
        role: "Desarrollador UX",
        period: "29/03/2023 - Actualidad",
        highlights: [
          "Desarrollo y rediseño de páginas web enfocadas en portales transaccionales.",
          "Creación de experiencias digitales especializadas para asesoría empresarial.",
          "Cierre de brecha entre los requisitos de diseño UX y la implementación técnica."
        ]
      },
      {
        company: "Instituto Geográfico Agustín Codazzi (IGAC)",
        role: "Desarrollador Front-End",
        period: "30/08/2021 - 31/12/2024",
        highlights: [
          "Especialista en HTML, CSS y JavaScript trabajando en el entorno digital del instituto.",
          "Optimización del rendimiento web y garantía de altos estándares de accesibilidad digital.",
          "Mantenimiento de entornos digitales complejos para proyectos a escala gubernamental."
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
        role: "Diseñador Web",
        period: "01/02/2018 - 20/05/2021",
        highlights: [
          "Gestor de productos y proyectos digitales, alineado con nuevas tendencias tecnológicas.",
          "Suministro de soluciones para la ejecución exitosa de proyectos en un entorno de medios digitales acelerado.",
          "Gestión de flujos de trabajo de diseño y tecnología multifuncionales."
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
      tech: ["HTML5", "CSS3", "JavaScript", "jQuery", "Sass", "Scrum", "Accesibilidad"],
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
    intro: "Crafting high-quality digital experiences for over 5 years. I lead product vision from conceptual design to frontend architectural excellence.",
    highlights: "Project Highlights",
    stats: [
      { label: "Frontend", val: "HTML/CSS/JS", icon: "💻" },
      { label: "Design", val: "Figma/Adobe", icon: "🎨" },
      { label: "Strategy", val: "Product Lead", icon: "📊" },
      { label: "Location", val: "Bogotá / Global", icon: "🌐" }
    ],
    experienceBtn: "Review Experience",
    messageBtn: "Send Message",
    viewGallery: "View Gallery",
    projects: [
      {
        title: "Transactional Banking Portal",
        category: "UX Development @ Scotiabank",
        desc: "Redesigned complex financial workflows into intuitive transactional interfaces for business users.",
        tags: ["UX", "React", "Finance"],
        color: "from-red-500 to-rose-600",
        gallery: [
          "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1000&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop"
        ]
      },
      {
        title: "IGAC Digital Environment",
        category: "Frontend @ IGAC",
        desc: "Maintained and optimized the national geographic institute's high-traffic digital infrastructure.",
        tags: ["Performance", "JS", "Accessibility"],
        color: "from-blue-500 to-cyan-600",
        gallery: [
          "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=1000&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=1000&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1000&auto=format&fit=crop"
        ]
      },
      {
        title: "User-Centered Applications",
        category: "UI/UX @ Grupo Sancho",
        desc: "Conceptualized and built responsive web applications using modern CSS architectures and jQuery.",
        tags: ["UI/UX", "Sass", "jQuery"],
        color: "from-amber-500 to-orange-600",
        gallery: [
          "https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?q=80&w=1000&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1545235617-9465d2a55698?q=80&w=1000&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1000&auto=format&fit=crop"
        ]
      }
    ]
  },
  [Language.ES]: {
    available: "Disponible para Nuevas Oportunidades",
    intro: "Creando experiencias digitales de alta calidad por más de 5 años. Lidero la visión del producto desde el diseño conceptual hasta la excelencia arquitectónica front-end.",
    highlights: "Proyectos Destacados",
    stats: [
      { label: "Frontend", val: "HTML/CSS/JS", icon: "💻" },
      { label: "Diseño", val: "Figma/Adobe", icon: "🎨" },
      { label: "Estrategia", val: "Líder de Producto", icon: "📊" },
      { label: "Ubicación", val: "Bogotá / Global", icon: "🌐" }
    ],
    experienceBtn: "Revisar Experiencia",
    messageBtn: "Enviar Mensaje",
    viewGallery: "Ver Galería",
    projects: [
      {
        title: "Portal Bancario Transaccional",
        category: "Desarrollo UX @ Scotiabank",
        desc: "Rediseño de flujos financieros complejos en interfaces transaccionales intuitivas para usuarios empresariales.",
        tags: ["UX", "React", "Finanzas"],
        color: "from-red-500 to-rose-600",
        gallery: [
          "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1000&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop"
        ]
      },
      {
        title: "Entorno Digital IGAC",
        category: "Front-End @ IGAC",
        desc: "Mantenimiento y optimización de la infraestructura digital de alto tráfico del instituto geográfico nacional.",
        tags: ["Rendimiento", "JS", "Accesibilidad"],
        color: "from-blue-500 to-cyan-600",
        gallery: [
          "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=1000&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=1000&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1000&auto=format&fit=crop"
        ]
      },
      {
        title: "Aplicaciones Centradas en el Usuario",
        category: "UI/UX @ Grupo Sancho",
        desc: "Conceptualización y construcción de aplicaciones web responsivas utilizando arquitecturas CSS modernas y jQuery.",
        tags: ["UI/UX", "Sass", "jQuery"],
        color: "from-amber-500 to-orange-600",
        gallery: [
          "https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?q=80&w=1000&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1545235617-9465d2a55698?q=80&w=1000&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1000&auto=format&fit=crop"
        ]
      }
    ]
  }
};
