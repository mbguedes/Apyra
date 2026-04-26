"use client";

import { useState } from "react";
import { Smartphone, Send } from "lucide-react";
import styles from "../../styles/CallToAction.module.css";

export function CallToAction() {
  const [formData, setFormData] = useState({
    source: "",
    subject: "",
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Mensagem enviada com sucesso! Entraremos em contato em breve.");
    setFormData({ source: "", subject: "", name: "", email: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contato" className={styles.cta}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Informações de Contato */}
          <div className={styles.contactInfo}>
            <h2 className={styles.title}>
              ENTRE EM<br />CONTATO
            </h2>

            <div className={styles.infoList}>
              <div className={styles.infoItem}>
                <Smartphone className={styles.infoIcon} size={24} />
                <span>(11) 94996-8105</span>
              </div>
              <div className={styles.infoItem}>
                <Send className={styles.infoIcon} size={24} />
                <span>contato@octantdigital.com.br</span>
              </div>
            </div>
          </div>

          {/* Formulário */}
          <div className={styles.formWrapper}>
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.formRow}>
                <div className={styles.inputGroup}>
                  <select
                    name="source"
                    value={formData.source}
                    onChange={handleChange}
                    className={styles.input}
                    required
                  >
                    <option value="" disabled hidden>Como chegou aqui?</option>
                    <option value="google">Google</option>
                    <option value="instagram">Instagram</option>
                    <option value="linkedin">LinkedIn</option>
                    <option value="indicacao">Indicação</option>
                    <option value="outros">Outros</option>
                  </select>
                </div>
                <div className={styles.inputGroup}>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={styles.input}
                    required
                  >
                    <option value="" disabled hidden>Assunto</option>
                    <option value="consultoria">Consultoria</option>
                    <option value="projetos">Projetos</option>
                    <option value="parcerias">Parcerias</option>
                    <option value="outros">Outros</option>
                  </select>
                </div>
              </div>

              <div className={styles.formRow}>
                <div className={styles.inputGroup}>
                  <input
                    type="text"
                    name="name"
                    placeholder="Seu Nome"
                    value={formData.name}
                    onChange={handleChange}
                    className={styles.input}
                    required
                  />
                </div>
                <div className={styles.inputGroup}>
                  <input
                    type="email"
                    name="email"
                    placeholder="Seu e-mail"
                    value={formData.email}
                    onChange={handleChange}
                    className={styles.input}
                    required
                  />
                </div>
              </div>

              <div className={styles.inputGroupFull}>
                <textarea
                  name="message"
                  placeholder="Mensagem"
                  value={formData.message}
                  onChange={handleChange}
                  className={styles.textarea}
                  rows={4}
                  required
                ></textarea>
              </div>

              <div className={styles.submitWrapper}>
                <button type="submit" className={styles.submitButton}>
                  Enviar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
