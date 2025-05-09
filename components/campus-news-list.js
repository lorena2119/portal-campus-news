import {campusArticles} from '../main.js'


class Campuslist extends HTMLElement{
    constructor(){
        super()
        const shadow = this.attachShadow({ mode: "open" });
        const style = document.createElement('style')
        style.innerHTML = `
        section .article{
  background-color:rgb(255, 255, 255); 
  padding: 20px;
  border-top: 1px solid rgb(231, 246, 255);
  color:rgb(0, 1, 68);
  font-family: 'Poppins', sans-serif; 
}
  h2, p{
  margin: 0;
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
                  article.id = element.id
                  article.innerHTML =`
                  <h2>${element.title}</h2>
                  <p>${element.summary}</p>
                  <p>${element.date}</p>
                  `
                  article.addEventListener('click', () => {
                    this.dispatchEvent(new CustomEvent('articulo-seleccionado', {
                      detail: { id: element.id },
                      bubbles: true,
                      composed: true
                    }));
                  });
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