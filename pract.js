var html = document.querySelector("#second .wrapper .percent-html")
var anim = document.querySelector("#second .wrapper .bar .html")

window.addEventListener('scroll',()=>{
    const scrolled = window.pageYOffset
    console.log(scrolled)
    
    if(scrolled>400){

        anim.style.animation = "animate 2s linear forwards"

        let count =0 ;
        setInterval(()=>{
        if(count<80){
            count++;
            html.innerHTML=count + '%'
            }
    }, 24)
    }
})

