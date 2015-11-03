var Student = Backbone.Model.extend({
  defaults: {
    id: 0,
    name: "",
    'class': "",
    country: "India"
  },
  url: function(){
    return "/student";
  }
});


var StudentCollection = Backbone.Collection.extend({
  model: Student
});
