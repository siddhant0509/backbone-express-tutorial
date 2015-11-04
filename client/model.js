

var Student = Backbone.Model.extend({
  defaults: {
    id: 0,
    name: "",
    'st_class': "",
    country: "India"
  },
  save: function(options){   
  debugger; 
    options = options || {};
    var self = this;
    options.success = function(){    
      console.log("Created");
      self.trigger("Student:Create:Success")
    };
    Backbone.Model.prototype.save.call(this,options);
  },
  url: function(){
    return "/student";
  }
});


var StudentCollection = Backbone.Collection.extend({
  model: Student,
  url: function(){
   return "/student"; 
  },
  fetch: function(options){
    var self = this;
    options = options || {};
    options.success = function(data){
      console.log(data);
      self.trigger("Student:All");
    }
    Backbone.Collection.prototype.fetch.call(this,options);
  }
});

