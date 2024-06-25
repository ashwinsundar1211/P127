battle_of_the_dragon = "";
believer = "";

function preload()
{
  battle_of_the_dragon = loadSound("battle-of-the-dragons-8037.mp3")
  believer = loadSound("Believer - An-known (Nowviba Music).mp3");
}

function setup()
{
  canvas = createCanvas(600, 500);
  canvas.position(320, 200);

  video = createCapture(VIDEO);
  video.hide();
}

function draw()
{
  image(video, 0, 0, 600, 500);
}