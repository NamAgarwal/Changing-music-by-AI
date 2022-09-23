song = "";
song2 = "";
leftWristY = 0;
leftWristX = 0;
rightWristX = 0;
rightWristY = 0;
leftWrist_score = 0;
rightWrist_score = 0;
music1_status = "";
music2_status = "";

function preload(){
    song = loadSound("music.mp3");
    song2 = loadSound("music2.mp3");
}

function setup(){
    canvas = createCanvas(600, 500);
    canvas.position(468, 210);;
    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modeLoaded);
    poseNet.on('pose', gotPoses);
}
function draw(){
    image(video, 0, 0, 600, 500);
    music1_status = song.isPlaying();
    music2_status = song2.isPlaying();

    if(leftWrist_score > 0.2){
        stroke('red');
        fill('red');
        circle(leftWristX, leftWristY, 20);
        song2.stop();
        if(music1_status == false){
            song.play();
            document.getElementById("song_name").innerHTML = "Song name - Harry Potter Theme song"
        }
    }
}
function modeLoaded(){
    console.log("Posenet is initialized");
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log('Left wrist x = '+ leftWristX + 'Left wrist y = '+ leftWristY);
        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("Right wrist x = "+ rightWristX + "Right wrist y = "+ rightWristY);
        leftWrist_score = results[0].pose.keypoints[9].score;
        rightWrist_score = results[0].pose.keypoints[10].score
    }
    }