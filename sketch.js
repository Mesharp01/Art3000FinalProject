let sound;
let amp;

var COLOR_01 = [114, 143, 206, 63]; // blue
var COLOR_02 = [143, 200, 145, 63]; // green
var COLOR_03 = [204, 49, 204, 63]; // purple
var COLOR_04 = [255, 127, 80, 63]; // coral
var COLOR_05 = [203, 156, 203, 63]; //pink
var COLOR_06 = [242, 231, 157, 63]; //yellow
var COLOR_07 = [190, 137, 234, 63]; //purple
var COLOR_08 = [137, 206, 234, 63]; //light blue

let loop1 = false;
let loop2 = false;
let loop3 = false;
let loop4 = false;
let loop1A = false;
let loop2A = false;
let loop3A = false;
let loop4A = false;

function preload(){
  sound1 = loadSound('sound1.mp3'); //waves
  sound2 = loadSound('sound2.mp3'); //storm (yt, thunder)
  sound3 = loadSound('sound3.mp3'); //waterfall
  sound4 = loadSound('sound4.mp3'); //storm (yt) 
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    amp1 = new p5.Amplitude();
    amp1.setInput(sound1);
    amp2 = new p5.Amplitude();
    amp2.setInput(sound2);
    amp3 = new p5.Amplitude();
    amp3.setInput(sound3);
    amp4 = new p5.Amplitude();
    amp4.setInput(sound4);
    noStroke();
    angleMode(DEGREES);
}

function draw() {
    
    textSize(32);
    textFont('Georgia');
    textAlign(LEFT);
    textStyle(BOLDITALIC);
    text('Falling Water', 10, 30);
    textStyle(NORMAL);
    textSize(16);
    text('Press anywhere on the screen to begin visualization.', 10, 60);
    text('Press anywhere again to mute sounds.', 10, 80);
    text('Press the backspace key to restart visualization.', 10, 100);
	
  let r1 = random(200);
  let level1 = amp1.getLevel();
  let sd1 = level1*r1;
  let r1A = random(200);
  let sd1A = level1*r1A;
  
  let r2 = random(200);
  let level2 = amp2.getLevel();
  let sd2 = level2*r2;
  let r2A = random(200);
  let sd2A = level2*r2A;
  
  let r3 = random(400);
  let level3 = amp3.getLevel();
  let sd3 = level3*r3;
  let r3A = random(400);
  let sd3A = level3*r3A;
  
  let r4 = random(200);
  let level4 = amp4.getLevel();
  let sd4 = level4*r4;
  let r4A = random(200);
  let sd4A = level4*r4A;
  
  
  stroke(255);
  translate(width/2, height/2);
  rotate(45/2);
  branchComponent1(sd1, 4, 60);
  branchComponent2(sd2, 4, 60);
  branchComponent3(sd3, 4, 60);
  branchComponent4(sd4, 4, 60);
  branchComponent1A(sd1A, 4, 60);
  branchComponent2A(sd2A, 4, 60);
  branchComponent3A(sd3A, 4, 60);
  branchComponent4A(sd4A, 4, 60);
}

function branch(len, angle, gen) {
	line(0, 0, 0, -len);
	translate(0, -len);
	len *= 0.7;
	angle = random(angle-30, angle+20);

	if (len > 2) {
		push();
		rotate(angle);
		branch(len, angle, gen);
		pop();

		push();
		rotate(-angle);
		branch(len, angle, gen);
		pop();
	}
}

function branchComponent1(len, amount, angle) {
	stroke.apply(null, COLOR_01);
	var increment = 360/amount;
	var rotAmount;

	for (var i = 0; i < amount; i++) {
		push();
        translate(-120, 100);
		rotAmount = -180 + increment * i
		rotate(random(rotAmount - 60, rotAmount));
		branch(len, angle, 1);
		pop();
	}
}

function branchComponent2(len, amount, angle) {
	stroke.apply(null, COLOR_02);
	var increment = 360/amount;
	var rotAmount;

	for (var i = 0; i < amount; i++) {
		push();
        translate(70, -178);
		rotAmount = -180 + increment * i
		rotate(random(rotAmount - 60, rotAmount));
		branch(len, angle, 1);
		pop();
	}
}

function branchComponent3(len, amount, angle) {
	stroke.apply(null, COLOR_03);
	var increment = 360/amount;
	var rotAmount;

	for (var i = 0; i < amount; i++) {
		push();
        translate(-200, -150);
		rotAmount = -180 + increment * i
		rotate(random(rotAmount - 60, rotAmount));
		branch(len, angle, 1);
		pop();
	}
}

function branchComponent4(len, amount, angle) {
	stroke.apply(null, COLOR_04);
	var increment = 360/amount;
	var rotAmount;

	for (var i = 0; i < amount; i++) {
		push();
        translate(-97, 200);
		rotAmount = -180 + increment * i
		rotate(random(rotAmount - 60, rotAmount));
		branch(len, angle, 1);
		pop();
	}
}

function branchComponent1A(len, amount, angle) {
	stroke.apply(null, COLOR_05);
	var increment = 360/amount;
	var rotAmount;

	for (var i = 0; i < amount; i++) {
		push();
        translate(175, -90);
		rotAmount = -180 + increment * i
		rotate(random(rotAmount - 60, rotAmount));
		branch(len, angle, 1);
		pop();
	}
}


function branchComponent2A(len, amount, angle) {
	stroke.apply(null, COLOR_06);
	var increment = 360/amount;
	var rotAmount;

	for (var i = 0; i < amount; i++) {
		push();
        translate(158, 157);
		rotAmount = -180 + increment * i
		rotate(random(rotAmount - 60, rotAmount));
		branch(len, angle, 1);
		pop();
	}
}


function branchComponent3A(len, amount, angle) {
	stroke.apply(null, COLOR_07);
	var increment = 360/amount;
	var rotAmount;

	for (var i = 0; i < amount; i++) {
		push();
        translate(-60, -60);
		rotAmount = -180 + increment * i
		rotate(random(rotAmount - 60, rotAmount));
		branch(len, angle, 1);
		pop();
	}
}


function branchComponent4A(len, amount, angle) {
	stroke.apply(null, COLOR_08);
	var increment = 360/amount;
	var rotAmount;

	for (var i = 0; i < amount; i++) {
		push();
        translate(-200, 50);
		rotAmount = -180 + increment * i
		rotate(random(rotAmount - 60, rotAmount));
		branch(len, angle, 1);
		pop();
	}
}

function mouseClicked() {
  if (mouseX >= 0 && mouseX <= width && mouseY >= 0 && mouseY <= height) {
    if (!loop1 && !loop2 &&!loop3 &&!loop4) {
      sound1.loop();
      sound2.loop();
      sound3.loop();
      sound4.loop();
      loop1 = true;
      loop2 = true;
      loop3 = true;
      loop4 = true;
    }
    else {
      sound1.stop();
      sound2.stop();
      sound3.stop();
      sound4.stop();
      loop1 = false;
      loop2 = false;
      loop3 = false;
      loop4 = false;
    }
  }
}

function keyPressed(){
  if(keyCode == BACKSPACE || keyCode == DELETE){
      sound1.stop();
      sound2.stop();
      sound3.stop();
      sound4.stop();
      //clear();
      sound1.loop();
      sound2.loop();
      sound3.loop();
      sound4.loop();
      loop1 = true;
      loop2 = true;
      loop3 = true;
      loop4 = true;
      redraw();
  }
}
