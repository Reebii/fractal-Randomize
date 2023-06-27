window.addEventListener('load', function(){
    const canvas = document.getElementById('canvas1');
    const ctx =canvas.getContext('2d');
    canvas.width = window.innerWidth *1;
    canvas.height = window.innerHeight * 1;
    //canavs settings 
    ctx.fillStyle = 'green';
    ctx.lineWidth = 50;
    ctx.lineCap = 'round';
    ctx.shadowColor = 'rgba(0,0,0,0.7)';
    ctx.shadowOffsetX = 10;
    ctx.shadowOffsetY = 5;
    ctx.shadowOffsetX = 10;
    ctx.shadowBlur = 10;    
    

    //effect settings
    let size = canvas.width < canvas.height ? canvas.width* 0.5 : canvas.height * 0.5;
    const maxlevel = 4;
    const branches = 6;
    let sides = 5; 
    let scale = 0.4;
    let spread = 0.4;
    let color = 'hsl('+ Math.random()*360  +',  100%, 50%)';
    
    
    //But1
    const Random = document.getElementById('Random');



   function drawback(level){
    if (level > maxlevel) 
      return;
      ctx.beginPath();
      ctx.moveTo(0,0);
      ctx.lineTo(size,0);
      ctx.stroke();
     
     for(let i = 0;i<branches ; i++){
        ctx.save();
        ctx.translate(size - (size/branches )* i,0);
        ctx.rotate(spread);
        ctx.scale(scale,scale);
        drawback(level + 1);
        ctx.restore();
         
        ctx.save();
        ctx.translate(size - (size/branches )* i ,0);
        ctx.rotate(-spread);
        ctx.scale(scale,scale);
        drawback(level + 1);
        ctx.restore();
        } 
    }
   


   function drawFractral(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.save();
    ctx.strokeStyle = color;
    ctx.translate(canvas.width/2,canvas.height/2);
    ctx.scale(0.5,0.5);
    ctx.rotate(0);
    for(let i = 0; i < sides;  i++  ){
        ctx.rotate((Math.PI*2)/sides); 
        drawback(0);
    }
    ctx.restore();
   }
   
   drawFractral();


   function ControlFractal(){ 
     sides = Math.floor(Math.random()*9+5); 
     scale = Math.random()*0.4 + 0.3;
     spread = Math.random()*2.9 + 0.1;
     color = 'hsl('+ Math.random()*360  +',  100%, 50%)';
    
     drawFractral(); 
   }
    Random.addEventListener('click',ControlFractal);
 drawFractral(); 
});