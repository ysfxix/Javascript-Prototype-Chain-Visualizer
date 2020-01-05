function PcvObject(x, y, name){ 
  this.x = x;
  this.y = y;
  this.name = name;
  this.nameXMargin = 25;
  this.nameX = this.x + this.nameXMargin;
  this.nameY = this.y - 15;
  

}

//var objs = []; // we'll store the object references in this array

function walkTheObject( obj ) {
    var keys = Object.keys( obj ); // get all own property names of the object

    keys.forEach( function ( key ) {
        var value = obj[ key ]; // get property value

        // if the property value is an object...
        if ( value && typeof value === 'object' ) { 

            // if we don't have this reference...
            if ( objs.indexOf( value ) < 0 ) {
                objs.push( value ); // store the reference
                walkTheObject( value ); // traverse all its own properties
            } 
        }
    });
}

//walkTheObject( this ); // start with the global object
//console.log(objs);



PcvObject.prototype.display = function(){ 
  noStroke(0);
  // ellipse(this.x, this.y, 5);
  square(this.x, this.y, 50);
  text(this.name, this.nameX, this.nameY);
  //fill(0, 102, 153);
  
  
}



