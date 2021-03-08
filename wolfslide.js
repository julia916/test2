let wolf; //global scope

function preload() {
  wolf = loadModel('turbowolf.obj');
}

function setup() {
  
    createCanvas(500, 500, WEBGL);
  }
  
  function drawGrid(){
    
     stroke(0);
    
     for(let i=-25; i<=25; i++){
       
        line( i*10, -250.0, i*10, 250);
     }
    
     for(let i=-25; i<=25; i++){
       
        line( -250.0, i*10, 250, i*10);
     }
  }
  
  function drawAxisArrows(){
    
      fill(255, 0, 0);
      noStroke();
    
      // draw along z
    
      push();
      rotateX(PI/2);
      translate(0, 100, 0);
      scale(0.3);
      cylinder(20, 70);
      translate(0, 50);
      cone(40, 50);
      pop();
    
      // draw along y
    
      fill(0, 255, 0);
    
      push();
    
      rotateY(-PI/2);
    
      translate(0, 100, 0);
    
      scale(0.3);
    
      cylinder(20, 70);
    
      translate(0, 50);
    
      cone(40, 50);
    
      pop();
    
      // draw along x
    
      fill(0, 0, 255);
    
      push();
    
      rotateZ(-PI/2);
    
      translate(0, 100, 0);
    
      scale(0.3);
    
      cylinder(20, 70);
    
      translate(0, 50);
    
      cone(40, 50);
    
      pop();
    
      stroke(0);
  }
  
  function draw() {
    
    background(220);
    
    let seconds = 0.2 * millis()/1000;
    let section = 0; //floor(seconds) % 4;
    
    if( section == 0){
      
        // ********************************************
        // ** 
        // **   DO TRANSLATE
        // **
        // ********************************************
      
        let translateX = fract(seconds) * 200;
      
        // push(): store the current matrix
      
        push();
      
        // translate the world
        translate( translateX, 0, 0);
      
        drawGrid();
      
        drawAxisArrows();
        
        fill(175, 0, 0, 210);
      
        box(150); //length, width, depth are 150px
  
        // pop(): return to the previous matrix/origin
        pop(); //without pop, you wouldnt be able to 
               //create another box, because the data below would override your red box
        
        push();
        fill(100, 0, 255, 200);
      
        //translate( 200, 0, 0);
        scale(50);
        noStroke();
        rotateX(PI/2); //PI = 180 degrees
        model(wolf);
        
      
    } else if( section == 1){
      
        // ********************************************
        // * 
        // *   DO SCALE
        // *
        // ********************************************
      
        let scaleAmt = fract(seconds); //sin(  * PI * 0.5);
      
        push();
      
        // scale the world
        scale( scaleAmt);
      
        drawGrid();
      
        drawAxisArrows();
  
        fill(0, 127, 0);
      
        box(150);
      
        translate(200, 0, 0);
      
      
        pop();
      
        //fill(255, 0, 0);
      
        //sphere(50);
    
    } else if (section == 2){
      
        // ********************************************
        // * 
        // *   DO ROTATE
        // *
        // ********************************************
      
        let rotateAmt = fract(seconds) * 180; //PI / 2;
      
        push();
      
        // rotate the world
      
        //rotateY( radians(rotateAmt));
      
        //rotateY( radians(rotateAmt*2.));
      
        //rotateZ( radians(rotateAmt*3.));
  
        drawGrid();
      
        drawAxisArrows();
      
        fill(0, 0, 127);
      
        box(150);
  
        pop();
    
    } else if (section == 3){
      
        // ********************************************
        // * 
        // *   MIX IT UP 
        // *
        // ********************************************
      
        push();
      
        let scaleAmt = sin( fract(seconds) * PI * 0.5) * 0.5 + 0.5;
        let translateAmt = -(1.0-fract(seconds)) * 200;
        let rotateAmt = fract(seconds) * PI;
      
        // scale the world
        scale( scaleAmt );
      
        // rotate the world
        rotateZ( rotateAmt );
      
       // translate
        translate(translateAmt, 0, 0);
      
        drawGrid();
      
        drawAxisArrows();
  
        fill(0, 127, 127);
      
        box(150);
      
        pop();
    }
  }