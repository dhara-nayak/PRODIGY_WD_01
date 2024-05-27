window.addEventListener("scroll",function(){
    const navbar=document.getElementById("container");
    if(window.scrollY>80){
        navbar.style.backgroundColor="#000";
    }
    else{
        navbar.style.backgroundColor="";
    }
});
document.addEventListener("DOMContentLoaded",function(){
    const navLinks=document.querySelectorAll("#navbar a");
    navLinks.forEach((link)=>{
        link.addEventListener("mouseenter",function(){
            this.style.color='#3d8a8a';
        });
        link.addEventListener("mouseleave",function(){
            this.style.color='#fff';
         });
    });
});