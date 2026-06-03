// REVELAR ELEMENTOS AO ROLAR

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {

        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }

    });
},{
    threshold:0.15
});

document.querySelectorAll(".card, .stat, .section")
.forEach((el)=>{
    el.classList.add("hidden");
    observer.observe(el);
});


// CONTADORES

const stats = document.querySelectorAll(".stat h3");

stats.forEach(stat => {

    const text = stat.innerText;

    if(text.includes("+")){

        const target = parseInt(text);

        let count = 0;

        const speed = target / 100;

        const update = () => {

            count += speed;

            if(count < target){

                stat.innerText =
                Math.floor(count) + "+";

                requestAnimationFrame(update);

            }else{

                stat.innerText =
                target + "+";
            }
        }

        update();
    }
});


// NAVBAR TRANSPARENTE

window.addEventListener("scroll",()=>{

    const navbar =
    document.querySelector(".navbar");

    if(window.scrollY > 100){

        navbar.style.background =
        "rgba(5,8,22,.95)";

    }else{

        navbar.style.background =
        "rgba(5,8,22,.65)";
    }

});


// EFEITO PARALLAX SUAVE

window.addEventListener("scroll",()=>{

    const hero =
    document.querySelector(".hero");

    const offset =
    window.pageYOffset;

    hero.style.backgroundPositionY =
    offset * 0.3 + "px";

});