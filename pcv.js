function PcvObject(name){ 
  this.name = name;
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



PcvObject.prototype.getName = function(){ 
  return this.name;
}

PcvObject.prototype.setName = function(name){ 
  this.name = name;
}



