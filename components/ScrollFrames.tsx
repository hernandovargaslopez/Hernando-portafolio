import React, {
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

import { CV_DATA, SCROLL_PROMPT } from '../constants';
import { Language } from '../types';

import {
  Download,
  CircleArrowDown,
} from 'lucide-react';

interface Props {
  frameCount: number;
  language: Language;
}

const ScrollFrames: React.FC<Props> = ({
  frameCount,
  language,
}) => {
  const [frame, setFrame] = useState(1);

  const sectionRef =
    useRef<HTMLElement | null>(null);

  const data = CV_DATA[language];

  const handleDownload = (): void => {
    const fileName =
      language === Language.EN
        ? 'HojadevidahernandovargasL2026EN.pdf'
        : 'HojadevidahernandovargasL2026ES.pdf';

    const link = document.createElement('a');
    link.href = `${import.meta.env.BASE_URL}assets/${fileName}`;
    link.download = fileName;

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const textProgress = (frame - 1) / Math.max(1, frameCount - 1);
  const heroProgress = Math.min(textProgress / 0.5, 1);
const skillsProgress =
    textProgress <= 0.5
      ? 0
      : Math.min((textProgress - 0.5) / 0.5, 1);
  const nameParts = data.name.split(' ');
  const firstName = nameParts[0];
  const lastName = nameParts.slice(1).join(' ');
  const isMobile = window.innerWidth < 768;

  const heroTranslate = isMobile
    ? heroProgress * -25
    : heroProgress * -70;

  const skillsTranslate = isMobile
    ? (1 - skillsProgress) * 40
    : (1 - skillsProgress) * 100;

  const frames = useMemo(() => {
    const base = '/Hernando-portafolio';
    const folder = isMobile ? 'framesmobile' : 'frames';

    return Array.from(
      { length: frameCount },
      (_, i) => {
        const num = String(i + 1).padStart(
          4,
          '0'
        );

        return `${base}/images/${folder}/frame_${num}.jpg`;
      }
    );
  }, [frameCount, isMobile]);

  // precarga
  useEffect(() => {
    frames.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, [frames]);

  useEffect(() => {
    const scrollContainer =
      document.querySelector('main');

    const section =
      sectionRef.current;

    if (!scrollContainer || !section)
      return;

    // cuantos px de scroll por frame
    const pixelsPerFrame = 25;

    // alto total automático
    section.style.height = `${
      window.innerHeight +
      frameCount * pixelsPerFrame
    }px`;

    const updateFrame = () => {
      const rect =
        section.getBoundingClientRect();

      const totalScrollable =
        section.offsetHeight -
        window.innerHeight;

      const progress = Math.min(
        Math.max(
          -rect.top / totalScrollable,
          0
        ),
        1
      );

      const currentFrame =
        Math.min(
          frameCount,
          Math.floor(
            progress *
              (frameCount - 1)
          ) + 1
        );

      setFrame(currentFrame);
    };

    scrollContainer.addEventListener(
      'scroll',
      updateFrame
    );

    window.addEventListener(
      'resize',
      updateFrame
    );

    updateFrame();

    return () => {
      scrollContainer.removeEventListener(
        'scroll',
        updateFrame
      );

      window.removeEventListener(
        'resize',
        updateFrame
      );
    };
  }, [frameCount]);

return (
  <section
    ref={sectionRef}
    className="relative"
  >
    <div className="sticky top-0 h-screen overflow-hidden z-20 mix-blend-multiply h-[100vh]">
      <img
  src={frames[frame - 1]}
  alt="Hernando Vargas Hero"
  className="
    w-full
    h-[calc(100vh-170px)]
    md:h-[calc(100vh+40px)]
    

    object-cover

    mt-[0px]
    md:-mt-[20px]
  "
/>

      {/* HERO */}
      <div
  className="
  absolute
  bottom-[30%] left-1/2
  w-full
  -translate-x-1/2

  md:inset-y-0 md:left-1/2
  md:w-[85%]
  md:-translate-x-1/2

  max-w-5xl

  z-30
  flex flex-col

  items-center md:items-start
  justify-end md:justify-center

  text-center md:text-left

  md:pt-0 md:pb-0

  px-4

  pointer-events-none
"
>
        <div
          style={{
            transform: `translateX(${heroTranslate}%)`,
            opacity: Math.max(0, 1 - heroProgress * 1.1),
          }}
        >
          <h1
            className="font-extrabold tracking-tight text-slate-900 dark:text-white uppercase drop-shadow-md leading-none"
            style={{
              fontSize: "clamp(2rem, 9vw, 4.5rem)",
            }}
          >
            {firstName}
          </h1>

          <p
            className="font-extrabold tracking-tight text-slate-900 dark:text-white uppercase drop-shadow-md leading-none mt-1"
            style={{
              fontSize: "clamp(1.5rem, 7vw, 3rem)",
            }}
          >
            {lastName}
          </p>

          <p
            className="text-[#bf1820] tracking-wide inline-block drop-shadow-sm mt-3"
            style={{
              fontSize: "clamp(.95rem, 3vw, 1.25rem)",
            }}
          >
            {data.title}
          </p>
            <br />
          <button
            onClick={handleDownload}
            className="mt-4 pointer-events-auto inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-full border-2 border-[#bf1820] bg-transparent hover:bg-[#bf1820] hover:text-white active:scale-[0.985] transition-all shadow-md"
          >
            <Download size={15} strokeWidth={2.5} />

            {language === Language.EN
              ? "Download CV"
              : "Descargar CV"}
          </button>
        </div>
      </div>

      {/* SKILLS */}
      <div
  className="
  absolute
  top-[20%] left-1/2
  w-[70%]
  -translate-x-1/2

  md:inset-y-0 md:right-0 md:left-1/2
  md:w-[85%]
  md:-translate-x-1/2

  max-w-5xl
  z-30

  flex flex-col

  items-center md:items-end md:text-left

  px-4
  pt-0 md:pt-[30vh]
  md:pr-6

  pointer-events-none
"
>
        <p
          className="w-full md:w-3/12 font-semibold text-slate-900 dark:text-white mb-2"
          style={{
            fontSize: "clamp(1rem, 3vw, 1.5rem)",
            transform: `translateX(${skillsTranslate}%)`,
            opacity: skillsProgress,
          }}
        >
          {language === Language.EN
            ? "Development"
            : "Desarrollo"}
        </p>

        <div
          className="flex flex-wrap gap-2 w-full md:w-3/12"
          style={{
            transform: `translateX(${skillsTranslate * 0.8}%)`,
            opacity: skillsProgress,
          }}
        >
          {data.skills.tech.map((skill, index) => (
            <span
              key={index}
              className="px-3 py-1 font-medium rounded-full border border-[#bf1820] text-black bg-white/20 backdrop-blur-sm whitespace-nowrap"
              style={{
                fontSize: "clamp(.65rem, 2vw, .8rem)",
              }}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* SCROLL */}
      <div className="absolute bottom-[100px] md:bottom-8 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2 text-white mix-blend-difference pointer-events-none text-center">
        <p
          className="tracking-wide"
          style={{
            fontSize: "clamp(.7rem, 2vw, .9rem)",
          }}
        >
          {SCROLL_PROMPT[language]}
        </p>

        <CircleArrowDown
          size={24}
          className="animate-bounce"
        />
      </div>
    </div>
  </section>
);
};

export default ScrollFrames;