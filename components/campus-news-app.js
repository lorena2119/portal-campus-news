class CampusNewsApp extends HTMLElement{
    constructor(){
        super()
        const shadow = this.attachShadow({ mode: "open" });
        shadow.innerHTML = `
      <style>
        .logo {
  background-color:rgb(255, 255, 255); 
  padding: 20px;
  display: flex;
  align-items:center;
  justify-content: center;
  text-align: center;
  color:rgb(0, 1, 68);
  gap: 1%;
  border-bottom: 1px solid rgb(231, 246, 255);
  font-family: 'Poppins', sans-serif; 

}
  img{
  width:60px;
  object-fit: cover
  }

.logo h1 {
  margin: 0;
  font-size: 32px;
  font-weight: 700;
  letter-spacing: 1px;
}
  </style>
      <div class="logo">
        <img src="../img/birrete.jpg">
        <h1>Campus News</h1>
      </div>
      <slot></slot>
    `
    }
}
customElements.define('campus-news-app', CampusNewsApp)
export default CampusNewsApp