
//TEst git commit
//Testing testing

var patch;
$.get('pd/3-6-1-2-frequencymodulation.pd', function(patchStr){
    patch = Pd.loadPatch(patchStr)
    Pd.start()
}
)

function setup(){
    console.log("Hello");

    createCanvas(640, 480);
    background(200);

    /*env = new p5.Env();
    env.setADSR(0.1, .1, 50, .05);
    env.setRange(1, .05);

    osc = new p5.Oscillator();
    osc.amp(env);
    osc.freq(440);
    osc.start(); 
    
    */

    //fill(100);
    //rect(50, 100, 100, 100);
    //ellipse(100, 50, 50, 50)
}

function draw(){
   
   // console.log("I'm drawing");

    background(300);
    //fill(255);
    //rect(mouseX, mouseY, 70, 70);

    console.log(Pd);
    console.log(mouseX);
    Pd.send('modAmp', [mouseX]);
    Pd.send('carr', [mouseY]);

}

function volumeChange(value){

    
    console.log("P5 received the value "+ value);
    

}

function keyReleased(){
Pd.send('off', [0])

}

function keyPressed(){

    //Pd.send('on', [0]);
    console.log("You pressed " + key);

    fill(400, 0, 0);
    ellipse(200, 28, 40, 40);

    //Recomendation
    var freq = 0;
    switch(key){
    
    case "q":
    note = 65;
    break;

    case "2":
    note = 69;
    break;

    case "w":
    note = 73;
    break;

    case "3":
    note = 78;
    break;

    case "e":
    note = 82;
    break;

    case "r":
    note = 87;
    break;

    case "5":
    note = 92;
    break;

    case "t":
    note = 98;
    break;

    case "6":
    note = 104;
    break;

    case "y":
    note = 110;
    break;

    case "7":
    note = 117;
    break;

    case "u":
    note = 123;
    break;

    case "i":
    note = 131;
    break;

    case "9":
    note = 139;
    break;

    case "o":
    note = 147;
    break;

    case "0":
    note = 156;
    break;

    case "p":
    note = 165;
    break;

    case "z":
    note = 131;
    break;

    case "s":
    note = 139;
    break;

    case "x":
    note = 147;
    break;

    case "d":
    note = 156;
    break;

    case "c":
    note = 165;
    break;

    case "v":
    note = 175;
    break;

    case "g":
    note = 185;

    case "b":
    note = 196;
    break;

    case "h":
    note = 208;
    break;

    case "n":
    note = 220;
    break;

    case "j":
    note = 233;
    break;

    case "m":
    note = 247;
    break;

    case ",":
    note = 262;
    break;
    

    break;
    }
    osc.freq(note);
    env.play();
    //HW Envelope p5.env

}