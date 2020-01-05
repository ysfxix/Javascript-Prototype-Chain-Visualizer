function ObjectFactory(){
    this.instances = [];
  };
  
  ObjectFactory.prototype.create = function(x, y, name){
    let tmp = new PcvObject(x, y, name);
    this.instances.push(tmp);
    return tmp;
  };
  
  ObjectFactory.prototype.get = function(i){
    return this.instances[i];
  };
  
  ObjectFactory.prototype.getAll = function(){
    return this.instances;
  };
  