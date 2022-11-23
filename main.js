function setup() {
    video = createCapture(VIDEO)
    video.size(550,500);

    canvas = createCanvas(550, 375.5);
    canvas.position(560, 150);
}
function draw() {
    background('#969A97')
}
function modelLoaded() {
    console.log('Posenet is Initialized!!')
}
function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
    }
}