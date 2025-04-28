let color1; let color2;
let sphereSize = 60;
let creciendo = false; 

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL); //'WEBGL' para 3D
}

function draw() {
  background(10);
  noFill();
  
  color1 = color("#42AA00");
  color2 = color("#B53165");
  
  // al hacer click se expanden
  if (creciendo) {
    sphereSize += 2; 
  } 
  
  push();  // CENTRO
  rotateY(frameCount * 0.02); 
  stroke(color1);
  sphere(100);
  
  rotateX(frameCount * 0.01); 
  stroke(color2);
  sphere(100); 
  pop();
  
  push();   // abajo derecha
  translate(150,150); 
  rotateX(frameCount * 0.03); 
  stroke(color2);
  sphere(sphereSize); 
  
  rotateY(frameCount * 0.-2); 
  stroke(color1);
  sphere(sphereSize);
  pop();
  
  push(); // abajo izquierda
  translate(-150,150);
  rotateX(frameCount * 0.08); 
  stroke(color2);
  sphere(sphereSize);   
  
  rotateY(frameCount * 0.3); 
  stroke(color1);
  sphere(sphereSize);
  pop();
  
  push(); // arriba izquierda
  translate(-150,-150);
  rotateX(frameCount * 0.03); 
  stroke(color1);
  sphere(sphereSize); 
  
  rotateY(frameCount * 0.-4); 
  stroke(color2);
  sphere(sphereSize);
  pop();

  push();   // arriba derecha
  translate(150,-150);
  rotateY(frameCount * 0.03); 
  stroke(color1);
  sphere(sphereSize);
  
  rotateX(frameCount * 0.09); 
  stroke(color2);
  sphere(sphereSize); 
  pop();
}

function mousePressed() {
  creciendo = true; 
} 

function mouseReleased() {
  creciendo = false;
}

function touchStarted() {
  creciendo = true;
  return false; 
}

function touchEnded() {
  creciendo = false;
  return false;
}

/* frameCount aumenta en cada frame, 
rotate hace que gire y 0.0x es la velocidad  */
