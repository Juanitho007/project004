import React from 'react';

const Footer = () => {
  return (
    <div className="w-full text-white text-xl text-center font-bold absolute bottom-0 bg-cyan-400">
      <marquee>
        <a
          href="https://juanitho007.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visita mis otros proyectos
        </a>
      </marquee>
      <span>&#x276e;Hecho con </span>
      <a href="https://www.academlo.com/" target="_blank" rel="noopener noreferrer">
        <i class="bx bx-heart-circle bx-burst"></i>
      </a>
      <span> en Academlo&#x276f;_</span>
    </div>
  );
};

export default Footer;
