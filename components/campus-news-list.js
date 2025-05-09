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
    `
    shadow.appendChild(style)
    document.addEventListener('DOMContentLoaded', ()=>{
        const categories = campusArticles.map(art => art.category)
        const categoriesSet = new Set(categories)
        
        const rendersection = (category) => {
            const section = document.createElement("section");
            section.id = category
              campusArticles.forEach(element => {
                if (element.category == category){
                  const article = document.createElement('div')
                  article.classList.add('article')
                  article.innerHTML =`
                  <h2>${element.title}</h2>
                  <p>${element.summary}</p>
                  <p>${element.date}</p>
                  `
                  section.appendChild(article)
                }
              });
              
          
              shadow.appendChild(section);
            };
            categoriesSet.forEach(rendersection);
    })

    document.addEventListener('categoria-seleccionada', (e) => {
      const selectedCategory = e.detail.category;
    
      shadow.querySelectorAll('section').forEach(section => {
        if (selectedCategory === 'all') {
          section.hidden = false;
        } else {
          section.hidden = section.id !== selectedCategory;
        }
      });
    });
    
    }
    
}
customElements.define('campus-news-list', Campuslist)
export default Campuslist