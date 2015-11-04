

var StudentCreateView = Backbone.View.extend({		
	initialize: function(){
		this.template = $("#student-create-form").html();
	},
	events: {
		"click #studentCreate" : "submitData"
	},
	submitData: function(){
		var student = new Student();
		student.set("id", $("#student_id").val());
		student.set("name", $("#student_name").val());
		student.set("st_class", $("#student_class").val());
		student.set("country", $("#student_country").val() || student.get("country"));
		student.save();
	},
	render: function(){		
		this.$el.append(this.template);
	}
});


var StudentCollectionView = Backbone.View.extend({	
	template: _.template($("#students").html()),
	initialize: function(){
		this.collection = new StudentCollection();		
		this.bindToCollectionEvents();
	},
	bindToCollectionEvents: function(){
		this.listenTo(this.collection,"Student:All", function(){
			this.renderChildViews();
		})
	},
	renderChildViews: function(){
		var self = this;		
		this.collection.each(function(model){			
			var studentView = new StudentView({el : self.$("#studentList"), model: model});
			studentView.render();
		});
	},
	render: function(){
		this.collection.fetch();
		var self = this;
		this.$el.append(this.template());
	},
	hide: function(){
		this.$el.empty();
	}
});


var StudentView = Backbone.View.extend({	
	model: Student,
	template: _.template($("#student").html()),
	render: function(){		
		this.$el.append(this.template(this.model.toJSON()));
	}
});