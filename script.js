

class SmoothScroll{

    constructor(links,section){
        this.linksElements = document.querySelectorAll(links);
        this.section = section;
        this.addEventLinks();
    }

    handleSmooth(event){
        event.preventDefault();
        const href = event.target.getAttribute("href");
        const section = document.querySelector(href);
        this.section = section;
        window.scrollTo({
            top: section.offsetTop,
            behavior: "smooth",
        });
       
    }

    addEventLinks(){
        this.linksElements.forEach(link => {
            link.addEventListener("click", this.handleSmooth);
        });
        
    }
}


// class SmoothScrollActive{
//     constructor(smooth){
//         this.currentSection = smooth.getCurrentSection();
//         this.Scroll();
//     }

//     getCurrentSection(){
//         // console.log(this.currentSection);
//     }

//     Scroll(){
//         window.addEventListener("scroll",this.getCurrentSection);
//     }
// }


const smooth = new SmoothScroll("a[href^='#']","Sobre");
// const smoothSection = new SmoothScrollActive(smooth);
// smooth.getCurrentSection();