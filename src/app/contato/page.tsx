'use client';

export default function ContatoPage() {
  return (
    <main className="artigos-container">
      <h1>Entre em Contato</h1>
      <div className="contact-form">
        <form className="form-grid">
          <div className="form-group">
            <label htmlFor="name">Nome</label>
            <input type="text" id="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">E-mail</label>
            <input type="email" id="email" required />
          </div>
          <div className="form-group full-width">
            <label htmlFor="message">Mensagem</label>
            <textarea id="message" rows={5} required></textarea>
          </div>
          <button type="submit" className="cta-button">
            Enviar Mensagem
          </button>
        </form>
      </div>
    </main>
  );
}
