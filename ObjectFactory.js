function ObjectFactory(){
  this.x = screen.width/2;
  this.y = 10;
  this.objMargin = 85;
  this.nameXMargin = 25;
  this.nameX = this.x + this.nameXMargin;
  this.nameY = this.y - 15;
  this.font,
  this.fontsize = 20;
  this.instances = [];
};

ObjectFactory.prototype.preLoad = function(){
   // Ensure the .ttf or .otf font stored in the assets directory
  // is loaded before setup() and draw() are called
  this.font = loadFont('assets/Roboto-Regular.ttf');
}

ObjectFactory.prototype.setup = function(){
  textFont(this.font);
  textSize(this.fontsize);
  textAlign(CENTER, CENTER);
}
  
  ObjectFactory.prototype.create = function(obj, objX, objY){
    // let tmp = new PcvObject(x, y, name);
    //let tmp = new obj;
    
    let count = this.instances.push(obj);
    this.instances[count-1].x = this.x;
    this.instances[count-1].y = this.y;
    this.instances[count-1].nameX = this.instances[count-1].x + this.nameXMargin ;
    this.instances[count-1].nameY = this.instances[count-1].y - 15;
    this.y += this.objMargin;
    return obj;
  };
  
  ObjectFactory.prototype.get = function(i){
    return this.instances[i];
  };
  
  ObjectFactory.prototype.getAll = function(){
    return this.instances;
  };

  ObjectFactory.prototype.getObjectCount = function(){
    return this.instances.length;
  };

  ObjectFactory.prototype.display = function(){
    let objs = this.getAll();
    // console.log(objs);
    
    objs.forEach((o) => {
      noStroke(0);
      // ellipse(this.x, this.y, 5);
      square(o.x, o.y, 50);
      text(o.name, o.nameX, o.nameY);
      //fill(0, 102, 153);
    });   
  };