
const vakio = 2.5;
const pallokoko = 13;
function setup() {
    loadCamera();
    loadTracker();
    loadCanvas(960, 720);
	
	textAlign(CENTER, CENTER);
	textSize(8);
}
      
function draw() {
    getPositions();
    
    clear();
    
    noStroke();
    // fill(150,150);
    // rect(0,0,width,height);
    
	background(100);
	
    drawPoints();
}

function drawPoints() {
    for (var i=0; i<positions.length -1; i++) {
        // set the color of the ellipse based on position on screen
        // fill(map(positions[i][0], width*0.33, width*0.66, 0, 255), map(positions[i][1], height*0.33, height*0.66, 0, 100), 0);
        
        // draw ellipse
        noStroke();
		fill(200,100);
        ellipse(positions[i][0]*vakio, positions[i][1]*vakio, pallokoko, pallokoko);
		fill(0);
		text(i, positions[i][0]*vakio, positions[i][1]*vakio);
		
        
        // draw line
        //stroke(map(positions[i][0], width*0.33, width*0.66, 0, 255), map(positions[i][1], height*0.33, height*0.66, 0, 100), 0,50);
        //line(positions[i][0], positions[i][1], positions[i+1][0], positions[i+1][1]);
    }
}