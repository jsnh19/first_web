$(document).ready(function(){
	$("#navbar").find("li").click(function(){
		$(this).parent().children(".active").removeClass("active");
		$(this).addClass("active");
	  });
	$("#home").click(function(){
		$("#blog-text").load("text/latest.html");
	  });
	$("#sourcecode").click(function(){
	    	$("#blog-text").load("text/SourceCode.html");
	  });
	$("#impressum").click(function(){
		if($("#impressum").text() == "Impressum"){
			$("#navbar").find(".active").removeClass("active");
			$("#blog-text").load("text/imp.html");
			$(this).text("back to mainpage");
		}else{
			$("#navbar").find(".active").removeClass("active");
			$("#blog-text").load("text/latest.html");
			$(this).text("Impressum");
		}
	});
});