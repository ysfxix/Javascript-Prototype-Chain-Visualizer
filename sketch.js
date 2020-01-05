let font,
  fontsize = 20;
let objMargin = 85;
var objX = screen.width/2;
var objY = 10;

let objFactory = new ObjectFactory();

function preload() {
  // Ensure the .ttf or .otf font stored in the assets directory
  // is loaded before setup() and draw() are called
  font = loadFont('assets/Roboto-Regular.ttf');
}

function setup() {
  createCanvas((screen.width)-10, (screen.height)-10);
  textFont(font);
  textSize(fontsize);
  textAlign(CENTER, CENTER);
}

function draw() {
  background(100,100,100,100);

  let objs = objFactory.getAll();

  objs.forEach((o) => {
    o.display();
  });
}

function createObject() {
  let objName =  document.getElementById("objName").value;
  objY = objY + objMargin;
  //objs.push(new PcvObject(objX, objY, objName));
  objFactory.create(objX, objY, objName);
  document.getElementById("objectCount").innerHTML = objs.length;
}