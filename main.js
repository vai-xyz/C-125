noseX=0;
noseY=0;
difference=0;
rightwristX=0;
leftwristX=0;

function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);

    canvas=createCanvas(550,500);
    canvas.position(560,150);

    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotposes);
}

function modelLoaded(){
console.log('PoseNet is Initialised');
}

function draw(){
    document.getElementById("square_side").innerHTML="Width and Hieght of the square will be: " +"  "+difference+"px";
    background('#969A97');
    fill("#F90093");
    stroke("#F90093");
    square(noseX,noseY,difference);
}

function gotposes(results){
    if(results.length>0){
        console.log(results);
        noseX= results[0].pose.nose.x;
        noseY= results[0].pose.nose.y;
        console.log("noseX= "+noseX+"noseY= "+noseY);

        leftwristX=results[0].pose.leftWrist.x;
        rightwristX=results[0].pose.rightWrist.x;
        difference=floor(leftwristX-rightwristX);
        console.log("leftwristX="+leftwristX+"rightwistX= "+rightwristX+"difference= "+difference);
    }
}

