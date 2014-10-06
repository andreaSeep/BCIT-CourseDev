// JQuery Function - Cargo Carriers 
//Author: Andrea Seepersad
//2014
//Menu Function
$(document).ready(function() {
	$("#menu").mouseenter(function(){
		    //$("#home").animate(  
//        {marginLeft: "185px"}, 2000); 
//            $("#home i").animate({left:"220px"}, 2000); 
//			$("#about").css('transform','translate(120px, -81px)');
//            $("#about i").animate({left:"220px"}, 2000);   
		
			$("#home").css('margin-left','185px');
				$("#home i").css({"position":"absolute", "top":"17px", "left":"220px"});
			$("#about").css('transform','translate(120px, -81px)');
				$("#about i").css({"position":"absolute", "top":"20px", "left":"20px"});
			$("#contact").css('transform','translate(122px, 98px)');
				$("#contact i").css({"position":"absolute", "top":"20px", "left":"17px"});
		});
	$("header").mouseleave(function(){
		$("#home").css('margin-left','65px');
		$("#home i").css({"position":"absolute", "top":"17px", "left":"100px"});
			$("#about").css('transform','translate(0px, 0px)');
				$("#about i").css({"position":"absolute", "top":"17px", "left":"0px"});
			$("#contact").css('transform','translate(0px, 0px)');
				$("#contact i").css({"position":"absolute", "top":"17px", "left":"0px"});
		
		});
		
		//Codes for contact: phone
		$(".contact_icon ul li:first-child").hover(function() {
			$(".contact_text p:first-child").addClass("move-left alltrans");
			         
        });//end hover
		
		//Codes for contact: address
		$(".contact_icon ul li:nth-child(2)").hover(function() {
			$(".contact_text p:nth-child(2)").addClass("move-left alltrans");
			
        });//end hover
		
		//Codes for contact: email
		$(".contact_icon ul li:nth-child(3)").hover(function() {
			$(".contact_text p:nth-child(3)").addClass("move-left alltrans");
			
        });//end hover
    //end contact transition text box functions 
	
    
});