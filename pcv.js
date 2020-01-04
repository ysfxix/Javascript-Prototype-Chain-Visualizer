function PcvObjects(x, y){ 
  this.x = x;
  this.y = y;
}


PcvObjects.prototype.display = function(){ 
  noStroke(0);
  ellipse(this.x, this.y, 5);
}



