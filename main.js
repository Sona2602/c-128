song = "";
leftwristx = 0;
leftwristy = 0;
rightwristx = 0;
rightwristy = 0;

function preload()
{
    song = loadSound("music.mp3");
}
function setup()
{
    canvas = createCanvas(600,500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        leftwristx = results[0].pose.leftWrist.x;
        leftwristy = results[0].pose.leftWrist.y;
        console.log("leftWristX = " + leftwristx + "leftWristY = " + leftwristy); 
        rightwristx = results[0].pose.rightWrist.x;
        rightwristy = results[0].pose.rightWrist.y;
        console.log("rightWristX = " + rightwristx + "rightWristY = " + rightwristy); 
    }
}
function modelLoaded()
{
    console.log('PoseNet Is Initialized');
}
function draw()
{
    image(video, 0 ,0,600,500);
}
function play()
{
    song.play();
    song.setVolume(1);
    song.rate(1);
}