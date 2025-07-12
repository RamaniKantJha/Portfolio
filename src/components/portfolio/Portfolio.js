import React, { useRef, useEffect, useState } from 'react';
import './Portfolio.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import IMG1 from '../../assets/portfolio1.jpg';
import IMG2 from '../../assets/portfolio2.jpg';
import IMG3 from '../../assets/portfolio3.jpg';
import IMG4 from '../../assets/portfolio4.jpg';
import IMG5 from '../../assets/portfolio5.png';
import IMG6 from '../../assets/portfolio6.jpg';
import { motion, AnimatePresence } from 'framer-motion';

const projects = [
  {
    img: IMG1,
    tag: 'frontend',
    title: 'Responsive Portfolio Website',
    location: 'React, CSS',
    bgClass: 'swiper-slide--one',
  },
  {
    img: IMG2,
    tag: 'data science',
    title: 'ML Model Deployment',
    location: 'Python, Flask',
    bgClass: 'swiper-slide--two',
  },
  {
    img: IMG3,
    tag: 'backend',
    title: 'RESTful API Service',
    location: 'Node.js, Express',
    bgClass: 'swiper-slide--three',
  },
  {
    img: IMG4,
    tag: 'ui/ux',
    title: 'UI/UX Dashboard Design',
    location: 'Figma, React',
    bgClass: 'swiper-slide--four',
  },
  {
    img: IMG5,
    tag: 'content',
    title: 'Technical Blog Platform',
    location: 'Next.js, Markdown',
    bgClass: 'swiper-slide--five',
  },
  {
    img: IMG6,
    tag: 'fullstack',
    title: 'E-commerce Web App',
    location: 'MERN Stack',
    bgClass: 'swiper-slide--six',
  },
];

const FILTERS = [
  { label: 'All', value: 'all' },
  { label: 'Frontend', value: 'frontend' },
  { label: 'Backend', value: 'backend' },
  { label: 'Data Science', value: 'data science' },
  { label: 'UI/UX', value: 'ui/ux' },
  { label: 'Content', value: 'content' },
  { label: 'Fullstack', value: 'fullstack' },
];

const Portfolio = ({ onMinimize }) => {
  const swiperRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const [filter, setFilter] = useState('all');
  const [filteredProjects, setFilteredProjects] = useState(projects);

  useEffect(() => {
    if (filter === 'all') setFilteredProjects(projects);
    else setFilteredProjects(projects.filter(p => p.tag === filter));
  }, [filter]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Minimize when last slide is reached and user scrolls further
  const handleReachEnd = () => {
    if (onMinimize) onMinimize();
  };

  // Make the whole section respond to scroll and forward to Swiper
  const handleSectionWheel = (e) => {
    if (swiperRef.current && swiperRef.current.swiper) {
      if (isMobile) {
        // On mobile, only respond to vertical scroll, ignore horizontal
        if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
          if (e.deltaY > 0) {
            swiperRef.current.swiper.slideNext();
          } else if (e.deltaY < 0) {
            swiperRef.current.swiper.slidePrev();
          }
          e.preventDefault();
        }
      } else {
        // On desktop, respond to horizontal or vertical scroll
        const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
        if (delta > 0) {
          swiperRef.current.swiper.slideNext();
        } else if (delta < 0) {
          swiperRef.current.swiper.slidePrev();
        }
        e.preventDefault();
      }
    }
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.98 },
    visible: {
      opacity: 1, y: 0, scale: 1,
      transition: { duration: 0.7, ease: 'easeOut', staggerChildren: 0.15 }
    }
  };

  return (
    <motion.section id="projects" className="projects__carousel-section" onWheel={handleSectionWheel}
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.h5 initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>My Recent Work</motion.h5>
      <motion.h2 initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} viewport={{ once: true }}>Projects</motion.h2>
      {/* Filter Buttons */}
      <motion.div
        className="portfolio__filters"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center', marginBottom: '2rem' }}
      >
        {FILTERS.map(f => (
          <motion.button
            key={f.value}
            onClick={() => setFilter(f.value)}
            className={filter === f.value ? 'portfolio__filter-btn active' : 'portfolio__filter-btn'}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.96 }}
            style={{
              background: filter === f.value ? 'var(--gradient-primary)' : 'var(--gradient-card)',
              color: filter === f.value ? 'var(--color-bg)' : 'var(--color-primary)',
              border: 'none',
              borderRadius: '2rem',
              padding: '0.5em 1.2em',
              fontWeight: 500,
              fontSize: '1rem',
              cursor: 'pointer',
              boxShadow: filter === f.value ? 'var(--shadow-primary)' : 'var(--shadow-glass)',
              transition: 'background 0.3s, color 0.3s, box-shadow 0.3s',
            }}
          >
            {f.label}
          </motion.button>
        ))}
      </motion.div>
      <Swiper
        ref={swiperRef}
        direction={isMobile ? 'vertical' : 'horizontal'}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2,
          slideShadows: true,
        }}
        spaceBetween={60}
        loop={false}
        pagination={{ clickable: true }}
        onReachEnd={handleReachEnd}
        modules={[EffectCoverflow, Pagination]}
        className="swiper"
      >
        <AnimatePresence initial={false}>
          {filteredProjects.map((project, idx) => (
            <SwiperSlide
              key={project.title}
              className={`swiper-slide ${project.bgClass}`}
              style={{ backgroundImage: `linear-gradient(to top, #0a0a23, #203a4300, #2c536400), url(${project.img})` }}
            >
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.4 }}
              >{project.tag}</motion.span>
              <div>
                <h2>{project.title}</h2>
                <p>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                  {project.location}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </AnimatePresence>
        <div className="swiper-pagination"></div>
      </Swiper>
    </motion.section>
  );
};

export default Portfolio;