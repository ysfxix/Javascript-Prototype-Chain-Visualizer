
let objFactory = new ObjectFactory();

function preload() {
  objFactory.preLoad();
}

function setup() {
  createCanvas((screen.width)-10, (screen.height)-10);
  objFactory.setup();
}

function draw() {
  background(100,100,100,100);
  objFactory.display();
}

function createObject() {
  let objName =  document.getElementById("objName").value;
  
  //objs.push(new PcvObject(objX, objY, objName));
  // objFactory.create(objX, objY, objName);
  objFactory.create(new PcvObject(objName));
  document.getElementById("objectCount").innerHTML = objFactory.getObjectCount();
}