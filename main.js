var canvas=new fabric.Canvas('myCanvas');
var x=10;
var y=10;
var block_width=30;
var block_height=30;
var player_object="";
var block_object="";

function add_player(){
fabric.Image.fromURL("player.png",function(Img){
    player_object=Img;
    player_object.scaleToWidth(130);
    player_object.scaleToHeight(250);
    player_object.set({
        left:x,
        top:y
    });
    canvas.add(player_object);
});
}

function block(get_image){
fabric.Image.fromURL(get_image,function(Img){
    block_object=Img;
    block_object.scaleToWidth(block_width);
    block_object.scaleToHeight(block_height);
    block_object.set({
        left:x,
        top:y
    });
    canvas.add(block_object);
});
}


window.addEventListener("keydown" , mykeydown);
function mykeydown(e){
    keypressed = e.keyCode;
    console.log(keypressed);
    if(e.shiftKey == true && keypressed == '80')
    {
        console.log("shift key and p key are both pressed together");
        block_height += 10;
        block_width += 10;
        document.getElementById("current_height").innerHTML=block_height;
        document.getElementById("current_width").innerHTML=block_width;
    }
    if(e.shiftKey == true && keypressed == '77')
    {
        console.log("shift key and m key are both pressed together");
        block_height -= 10;
        block_width -= 10;
        document.getElementById("current_height").innerHTML=block_height;
        document.getElementById("current_width").innerHTML=block_width;
    }
    if(keypressed == '37'){
        console.log("left arrow is pressed");
        left();
    }
    if(keypressed == '38'){
        console.log("up arrow is pressed");
        up();
    }
    if(keypressed == '39'){
        console.log("right arrow is pressed");
        right();
    }
    if(keypressed == '40'){
        console.log("down arrow is pressed");
        down();
    }
    if(keypressed == '87'){
       block("wall.jpg"); 
    }
    if(keypressed == '71'){
        block("ground.png"); 
     }
     if(keypressed == '76'){
        block("light_green.png"); 
     }
     if(keypressed == '84'){
        block("trunk.jpg"); 
     }
     if(keypressed == '82'){
        block("roof.jpg");
     }
     if(keypressed == '89'){
        block("yellow_wall.png");
     }
     if(keypressed == '68'){
        block("dark_green.png");
     }
     if(keypressed == '85'){
        block("unique.png");
     }
     if(keypressed == '67'){
        block("cloud.jpg")
     }
}

