song = "";
song2 = "";
left_wrist_x = 0;
left_wrist_y = 0;
right_wrist_x = 0;
right_wrist_y = 0;

function preload(){
    song = loadSound("music.mp3");
    song2 = loadSound("music2.mp3");
}

function setup(){
    canvas = createCanvas(600, 500);
    canvas.position(468, 210);;
    video = createCapture(VIDEO);
    video.hide();

}
function draw(){
    image(video, 0, 0, 600, 500);
}
function modeLoaded(){
    console.log("Posenet is initialized");
}