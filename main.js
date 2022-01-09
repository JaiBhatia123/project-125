noseX=0;
noseY=0;
var difference=0;
var rightWristX=0;
leftWristX=0;
function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);
    canvas=createCanvas(550,500);
    canvas.position(560,150);
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on("pose",gotPoses);
}
function draw(){
    background("#00FF00");
    fill("#FF0000");
    stroke("#FF0000");
    square(noseX,noseY,100);
}
function  modelLoaded(){
    console.log("posenet is Loaded");
}
function gotPoses(results){
 if(results.length >0){
     console.log(results);
     noseX=results[0].pose.nose.x;
     noseY=results[0].pose.nose.y;
     console.log("nose X ="+noseX+"nose Y ="+noseY);
    leftWristX=results[0].pose.leftWrist.x;
    rightWristX=results[0].pose.rightWrist.x;
    difference=floor(leftWristX-rightWristX);
    console.log("leftWristX="+leftWristX+"rightWristX="+rightWristX + "difference="+difference);    
 }                                     
}
