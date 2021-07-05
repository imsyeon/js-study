
const title = document.querySelector(".hello h1");

// function handleTitleClick(){
//     const clickedClass = "active";
//     if(title.classList.contains(clickedClass)){
//         title.classList.remove(clickedClass);
//     }else{
//         title.classList.add(clickedClass);
//     }
    
// }

function handleTitleClick(){
    title.classList.toggle("active");
}


title.addEventListener("click", handleTitleClick);
