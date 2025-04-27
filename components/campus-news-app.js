class CampusNewsApp extends HTMLElement{
    constructor(){
        super()
        const shadow = this.attachShadow({ mode: "open" });
        shadow.innerHTML = `
      <style>
        .logo {
  background-color: #264653; /* Azul oscuro elegante */
  padding: 20px;
  text-align: center;
  color: #ffffff; /* Texto blanco */
  font-family: 'Poppins', sans-serif; /* Fuente moderna */
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
}

.logo h1 {
  margin: 0;
  font-size: 32px;
  font-weight: 700;
  letter-spacing: 1px;
}
      </style>
      <div class="logo">
        <i class='bx bxs-rocket'></i>
        <h1>Campus News</h1>
        <slot></slot>
      </div>
    `
    }
}
customElements.define('campus-news-app', CampusNewsApp)
export default CampusNewsApp