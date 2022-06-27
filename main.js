noseX = "";
noseY = "";

function preload() {
moustache=loadImage('https://i.postimg.cc/3x3QzSGq/m.png')
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    posenet = ml5.poseNet(video, modelloaded);
    posenet.on('pose', gotposes);

}

function draw() {
    image(video, 0, 0, 300, 300);
    image(moustache,noseX, noseY,50,30);
}

function modelloaded() {
    console.log("posenet is intialised");
}

function gotposes(results) {
    if (results.length > 0) {
        console.log(results);
        noseX = results[0].pose.nose.x-20;
        noseY = results[0].pose.nose.y+5;

    }
}