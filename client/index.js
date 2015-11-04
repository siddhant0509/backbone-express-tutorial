
$(document).ready(function(){	
  	var studentCreateView = new StudentCreateView({el : $("#container")});  
  	var studentCollectionView = new StudentCollectionView({el : $("#container")});
  	studentCreateView.on("Student-Create-Success",function(){
  		studentCreateView.hide();
  		studentCollectionView.render();
  	});	
  	$("button.create-student").on("click", function(){  		  		
  		studentCollectionView.hide();
  		studentCreateView.render();
  		$(".create-student").hide();
  	});
  	
  	studentCollectionView.render();	
  	
});
