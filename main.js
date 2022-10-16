mustache_x=0;
mustache_y=0;

function preload(){
    clown_nose=loadImage('https://i.postimg.cc/3x3QzSGq/m.png');
}
function setup(){
    canvas=createCanvas(300,300);
    canvas.center();

    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function draw(){
    image(video,0,0,300,300);
    image(clown_nose,nose_x,nose_y,30,30);
}
function modelLoaded(){
    console.log('posenet is initialize');
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        nose_x=results[0].pose.nose.x-30;
        nose_y=results[0].pose.nose.y-30;
        console.log("nose x="+results[0].pose.nose.x);
        console.log("nose y"+results[0].pose.nose.y);
    }
}
function take_snapshot(){
    save('myfilter.png');
}
