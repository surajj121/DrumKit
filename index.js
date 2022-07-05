var num=document.querySelectorAll(".drum").length;


for(var i=0;i<num;i++){

    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        var buttonInnerHTML= this.innerHTML
        
        makeSound(buttonInnerHTML);
        btani(buttonInnerHTML);
    })
}

document.addEventListener("keypress",function(event){
    makeSound(event.key);
    btani(event.key);
})

function makeSound(key) {
    switch (key){
        case "w":
            var tom1=new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2=new Audio("sounds/tom-2.mp3");
            tom2 .play();
            break;
        case "s":
            var tom3=new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4=new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var c=new Audio("sounds/crash.mp3");
            c.play();
            break;
        case "k":
            var k=new Audio("sounds/kick-bass.mp3");
            k.play();
            break;
        case "l":
            var sn=new Audio("sounds/snare.mp3");
            sn.play();
            break;

        default:
           break;
   }
    
}

function btani(currentKey) {
    var acbut = document.querySelector("."+currentKey)
    acbut.classList.add("pressed"); 

    setTimeout(function(){
        acbut.classList.remove("pressed");
    },100);

}