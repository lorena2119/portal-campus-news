import { campusArticles } from '../main.js';

class Campusdetail extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    const shadow = this.shadowRoot;
    const style = document.createElement('style');
    style.innerHTML = `
      .detail {
        position: absolute;
        top: 50%;
        right: 25px;
        background-color:rgb(255, 255, 255); 
        padding: 20px;
        border: 1px solid rgb(231, 246, 255);
        color:rgb(0, 1, 68);
        font-family: 'Poppins', sans-serif; 
        margin-top: 20px;
      }
      h2, p {
        margin: 0 0 10px;
      }
    `;
    shadow.appendChild(style);

    const container = document.createElement('div');
    container.classList.add('detail');
    shadow.appendChild(container);

    document.addEventListener('articulo-seleccionado', (e) => {
      const selectedId = e.detail.id;

      // Limpia contenido anterior
      container.innerHTML = '';

      const article = campusArticles.find(art => art.id === selectedId);
      if (article) {
        container.innerHTML = `
          <h2>${article.title}</h2>
          <p><strong>Autor:</strong> ${article.author}</p>
          <p>${article.date}</p>
          ${article.content}
        `;
      }
    });
  }
}

customElements.define('campus-news-detail', Campusdetail);
export default Campusdetail;