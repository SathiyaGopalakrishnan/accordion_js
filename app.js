document.addEventListener("DOMContentLoaded",function(){
var accordions=document.querySelectorAll(".accordion-button");

accordions.forEach(function(button1){
    button1.addEventListener("click",function(){
        var content1 =this.nextElementSibling;

           // Toggle the active state of the button
        this.classList.toggle("active");
        
        //check if the content is already expanded
        if (content1.style.maxHeight){
            //collapse the content
            content1.style.maxHeight=null;
        }else{
            //Expand the content
            content1.style.maxHeight=content1.scrollHeight+"px";
        }
        
    })

});
});

