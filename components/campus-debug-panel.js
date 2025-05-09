import { campusArticles } from '../main.js';

class Campusdebug extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    const shadow = this.shadowRoot;
    const style = document.createElement('style');
    style.innerHTML = `
      .debug {
        position: absolute;
        width: 20%;
        height: 93.5%;
        top: 185px;
        right: 7px;
        padding: 20px;
        border-left: 1px solid rgb(231, 246, 255);
        color:rgb(0, 1, 68);
        font-family: 'Poppins', sans-serif; 
        margin-top: 20px;
      }
        button{
        font-family: 'Poppins', sans-serif; 
        padding: 10px;
        border: none;
        font-size:16px;
        border-radius: 10px;
        color:rgb(255, 255, 255);
        background-color: rgb(0, 1, 68);
        }
        .mostrar{
        position: absolute;
        top: 250px;
        right: 200px;
        }
      h2, p {
        margin: 0 0 10px;
      }
    `;
    shadow.appendChild(style);

    const container = document.createElement('div');
    container.classList.add('debug');
    shadow.appendChild(container);

    document.addEventListener('articulo-seleccionado', (e) => {
      const selectedId = e.detail.id;

      // Limpia contenido anterior
      container.innerHTML = '';

      const article = campusArticles.find(art => art.id === selectedId);
      
      if (article) {
        container.innerHTML = `
          <h2>Debug Panel</h2>
          <p><strong>Categoría:</strong> ${article.category}</p>
          <p><strong>ID:</strong> ${article.id}</p>
          <p><strong>Total:</strong> ${campusArticles.length}</p>
          <button id="ocultar">Ocultar</button>
        `;

        const ocultar = shadow.getElementById('ocultar')
        ocultar.addEventListener('click', ()=>{
            container.hidden = true
            const button = document.createElement('button')
            button.textContent= 'Mostrar Debug'
            button.classList.add('mostrar')
            shadow.appendChild(button)
            button.addEventListener('click', ()=>{
                container.hidden = false
                button.hidden = true
            })
        })
      }

    });
  }
}

customElements.define('campus-debug-panel', Campusdebug);
export default Campusdebug;