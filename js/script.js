const body = document.querySelector("body");
const navbar = document.querySelector(".nav");

    
    window.onscroll = ()=>{
      this.scrollY > 500 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");
}

