/*
Made by ImSaMPro
https://www.github.com/imsampro
https://www.facebook.com/imsampro
*/
$(".todo-icon").click(function () {
	// body...
	$("input[type=text]").fadeToggle();
});

$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

$("ul").on("dblclick", "li", function(event){
	$(this).fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		//grabbing new todo text from input
		var todoText = $(this).val();
		if($(this).val()==""){
			alert("Enter a valid ToDo!");
		}
		else{
			$(this).val("");
			//create a new li and add to ul
			$("ul.todo-list").append("<li class='todo-item'> " + todoText + "</li>")
		}
	}
});
/*
Made by ImSaMPro
https://www.github.com/imsampro
https://www.facebook.com/imsampro
*/