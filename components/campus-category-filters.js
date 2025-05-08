class CampusFilters extends HTMLElement{
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
  font-family: 'Poppins', sans-serif; 
}
button{
    border-radius: 5px;
    background-color:rgb(231, 246, 255); 
    padding: 10px 8px;
    border: none;
    font-weight: 500;
  font-size: 16px;
  color:rgb(0, 1, 68);
  letter-spacing: 1px;
}
  button:hover, button.active{
  color:rgb(255, 255, 255); 
  background-color:rgb(0, 1, 68);
  }
  </style>
      <div class="logo">
        <button>Todas</button>
        <button>Eventos</button>
        <button>Investigación</button>
        <button>Deportes</button>
        <button>Vida Estudiantil</button>
      </div>
      <slot></slot>
    `
    }
}
customElements.define('campus-category-filters', CampusFilters)
export default CampusFilters