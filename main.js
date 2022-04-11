var canvas=new fabric.Canvas("lecanvas");
playerx=10;
playery=10;
blockimagewidth=30;
blockimagehight=30;
var playerobject="";
var blockimageobject="";
function player_update(){
    fabric.Image.fromURL("player.png",function(Img){
        playerobject=Img;
        playerobject.scaleToWidth(150);
        playerobject.scaleToHeight(140);
        playerobject.set({
            top:playery,
            left:playerx
        });
        canvas.add(playerobject);
    });
}
function new_image(get_image){
    fabric.Image.fromURL(get_image,function(Img){
        blockimageobject=Img;
        blockimageobject.scaleToWidth(blockimagewidth);
        blockimageobject.scaleToHeight(blockimagehight);
        blockimageobject.set({
            top:playery,
            left:playerx
        });
        canvas.add(blockimageobject);
    });
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    keyPressed=e.keyCode;
console.log(keyPressed);
if(e.shiftKey==true && keyPressed=="80"){
    console.log("p un shift pressed together");
    blockimagewidth=blockimagewidth+10;
    blockimagehight=blockimagehight+10;
    document.getElementById("currentwidth").innerHTML=blockimagewidth;
    document.getElementById("currenthight").innerHTML=blockimagehight;
}
if(e.shiftKey==true && keyPressed=="77"){
    console.log("m un shift pressed together");
    blockimagewidth=blockimagewidth-10;
    blockimagehight=blockimagehight-10;
    document.getElementById("currentwidth").innerHTML=blockimagewidth;
    document.getElementById("currenthight").innerHTML=blockimagehight;
}

if(keyPressed=="38"){
    up();
    console.log("up");
}
if(keyPressed=="40"){
    down();
    console.log("down");
}
if(keyPressed=="37"){
    left();
    console.log("left");
}
if(keyPressed=="39"){
    right();
    console.log("right");
}
if(keyPressed=="87"){
    new_image("wall.jpg");
    console.log("w");
}
if(keyPressed=="71"){
    new_image("ground.png");
    console.log("g");
}
if(keyPressed=="76"){
    new_image("light_green.png");
    console.log("l");
}
if(keyPressed=="84"){
    new_image("trunk.jpg");
    console.log("t");
}
if(keyPressed=="82"){
    new_image("roof.jpg");
    console.log("r");
}
if(keyPressed=="89"){
    new_image("yellow_wall.png");
    console.log("y");
}
if(keyPressed=="68"){
    new_image("dark_green.png");
    console.log("d");
}
if(keyPressed=="85"){
    new_image("unique.png");
    console.log("u");
}
if(keyPressed=="67"){
    new_image("cloud.jpg");
    console.log("c");
}
}
function up(){
    if (playery>=0){
        playery=playery-blockimagehight;
        console.log("blockimageheight="+blockimagehight);
        console.log("when up arrow key is pressed, x="+playerx+", y="+playery);
        canvas.remove(playerobject);
        player_update();
    }
}
function down(){
    if (playery<=500){
        playery=playery+blockimagehight;
        console.log("blockimageheight="+blockimagehight);
        console.log("when up arrow key is pressed, x="+playerx+", y="+playery);
        canvas.remove(playerobject);
        player_update();
    }
}
function left(){
    if (playerx>=0){
        playerx=playerx-blockimagewidth;
        console.log("blockimagewidth="+blockimagewidth);
        console.log("when up arrow key is pressed, x="+playerx+", y="+playery);
        canvas.remove(playerobject);
        player_update();
    }
}
function right(){
    if (playerx<=850){
        playerx=playerx+blockimagewidth;
        console.log("blockimagewidth="+blockimagewidth);
        console.log("when up arrow key is pressed, x="+playerx+", y="+playery);
        canvas.remove(playerobject);
        player_update();
    }
}
