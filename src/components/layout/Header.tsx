"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "../../styles/Header.module.css";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""} ${isMenuOpen ? styles.menuOpen : ""}`}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link href="/" onClick={closeMenu}>
            <span className={styles.apyra}>Apyra</span>
            <span className={styles.dot}>.</span>
          </Link>
        </div>
        
        {/* Desktop Nav */}
        <nav className={styles.nav}>
          <Link href="#sobre" className={styles.link}>Sobre</Link>
          <Link href="#servicos" className={styles.link}>Serviços</Link>
          <Link href="#diferenciais" className={styles.link}>Diferenciais</Link>
        </nav>
        
        <div className={styles.actions}>
          <a href="https://wa.me/5511949968105?text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20um%20especialista%20da%20Apyra!" target="_blank" rel="noopener noreferrer" className={styles.cta}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Faça Apyra agora!
          </a>
          
          {/* Hamburger Menu Button */}
          <button 
            className={`${styles.hamburger} ${isMenuOpen ? styles.active : ""}`} 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span className={styles.line}></span>
            <span className={styles.line}></span>
            <span className={styles.line}></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.mobileMenuOpen : ""}`}>
        <nav className={styles.mobileNav}>
          <Link href="#sobre" className={styles.mobileLink} onClick={closeMenu}>Sobre</Link>
          <Link href="#servicos" className={styles.mobileLink} onClick={closeMenu}>Serviços</Link>
          <Link href="#diferenciais" className={styles.mobileLink} onClick={closeMenu}>Diferenciais</Link>
          <a href="https://wa.me/5511949968105?text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20um%20especialista%20da%20Apyra!" target="_blank" rel="noopener noreferrer" className={styles.mobileCta} onClick={closeMenu}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Faça Apyra agora!
          </a>
        </nav>
      </div>
    </header>
  );
}
