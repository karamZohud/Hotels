const allLinks=document.querySelectorAll(".links a");
allLinks.forEach(link=>{
    link.addEventListener("click",(e)=>{
        console.log(e.target.dataset.links);
        e.preventDefault();
        let section=e.target.dataset.links;
        document.querySelector(section).scrollIntoView({
            behavior:'smooth'
        })
    })
})