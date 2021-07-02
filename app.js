// // html id를 가지고 오는 방법
// const title = document.getElementById("title");
// //html h1의 내용 변경
// title.innerText = "Got you!" ;
// //id, className 가지고 오는 방법
// console.log(title.id);
// console.log(title.className);

// const hellos = document.getElementsByClassName("hello");
// console.log(hellos)

const title = document.querySelector(".hello h1");

function handleTitleClick(){

    const currentColor = title.style.color;
    let newColor;

    if(currentColor === "blue"){
        newColor = "red";
    }else{
        newColor = "blue";
    }
    // console.log("click event!!!");
    // title.style.color = "blue";
    title.style.color = newColor;
}

function handleMouseEvent(){
    title.innerText ="Mouse is here";
}
function handleMouseLeave(){
    title.innerText = "Mouse is gone" ;
}


function handleWindowResize(){
    document.body.style.backgroundColor ="tomato";
}

function handleWindowCopy(){
    alert("copier!");
}

function handleWindowOffline(){
    alert("SOS no WIFI");
}

function handleWindowOnline(){
    alert("wifi connect!");
}
title.addEventListener("click", handleTitleClick);
title.addEventListener("mouseenter", handleMouseEvent);
title.addEventListener("mouseleave", handleMouseLeave);

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);