document.querySelectorAll(".sidebar .side-dropdown").forEach((item) => {
    item.parentElement.querySelector("a:first-child").addEventListener("click",function(Event){
        Event.preventDefault();
        this.classList.toggle('active');
        item.classList.toggle('show');
    })
})

document.querySelector(".profile-info img").onclick = function(){
    document.querySelector(".profile-links").classList.toggle("show");
};

document.querySelectorAll(".content-of-card .progress").forEach((span) => {
    span.style.setProperty("--value",span.dataset.value);
})

document.querySelectorAll(".menu").forEach((item) => {
    let icon = item.querySelector(".menu .icon");
    let list = item.querySelector(".menu .menu-links");

    icon.addEventListener("click",function(){
        list.classList.toggle("show");
    });
})

let sidebar = document.querySelector(".sidebar");

document.querySelector("nav .toggle-sidebar").addEventListener("click",function(){
    sidebar.classList.toggle("hide");

    let divider = document.querySelectorAll(".sidebar .divider");
    if(sidebar.classList.contains('hide')){
        divider.forEach((item) => {
            item.textContent = '...';
        })
    }else {
        divider.forEach((item) => {
            item.textContent = item.dataset.text;
        })
    }
})