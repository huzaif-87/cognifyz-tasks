const button=document.getElementById("colorButton");
button.addEventListener("click",function(){
    const colors=["red","green","blue","yellow","purple"];
    const randomColor=colors[Math.floor(Math.random()*colors.length)];
    document.body.style.backgroundColor=randomColor;
});