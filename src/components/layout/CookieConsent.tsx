"use client";

import { useState, useEffect } from "react";
import styles from "../../styles/CookieConsent.module.css";

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Verificamos o local storage apenas no client-side para evitar hydration errors
    const consent = localStorage.getItem("octant_cookie_consent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("octant_cookie_consent", "true");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.banner}>
        <div className={styles.content}>
          <h3 className={styles.title}><strong>Aviso de Privacidade e Tratamento de Dados</strong></h3>
          <p className={styles.description}>
            Para garantir a melhor experiência, o perfeito alinhamento técnico dos nossos serviços e 
            a integração segura com plataformas de terceiros, utilizamos cookies essenciais e dados 
            de navegação. Ao continuar navegando em nosso ambiente, você concorda ativamente com estas condições.
          </p>
        </div>
        <div className={styles.actions}>
          <button className={styles.acceptButton} onClick={acceptCookies}>
            Aceitar e Continuar
          </button>
        </div>
      </div>
    </div>
  );
}
