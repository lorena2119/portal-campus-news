import {campusArticles} from '../main.js'


class Campuslist extends HTMLElement{
    constructor(){
        super()
        const shadow = this.attachShadow({ mode: "open" });
        const style = document.createElement('style')
        style.innerHTML = `
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
    `
    shadow.appendChild(style)
    document.addEventListener('DOMContentLoaded', ()=>{
        const categories = campusArticles.map(art => art.category)
        const categoriesSet = new Set(categories)
        
        const rendersection = (category) => {
            const section = document.createElement("section");
            section.id = category
              
          
              shadow.appendChild(section);
            };
            categoriesSet.forEach(rendersection);
    })
    }
}
customElements.define('campus-news-list', Campuslist)
export default Campuslist