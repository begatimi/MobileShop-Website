$(document).ready(function(){
    $("#hide").click(function(){
        $("#hideshow").hide();
		$("#hideshow").hide("slow", function(){
            alert("The survey is now hidden");
        });
    });
    $("#show").click(function(){
        $("#hideshow").show();
		$("#hideshow").show("slow", function(){
            alert("The survey is now showen");
        });
    });
});