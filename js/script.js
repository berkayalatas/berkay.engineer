 
	const spans = document.querySelectorAll('h1 span');

	//greeting 
	spans.forEach(span => span.addEventListener('mouseover', function (e) {
	    span.classList.add('animated', 'rubberBand')
	}))

	spans.forEach(span => span.addEventListener('mouseout', function (e) {
	    span.classList.remove('animated', 'rubberBand')
	}))



	/* Bar icon for responsive website */
	$(".nav-icon").click(function () {
	    $("#nav__container").toggleClass("responsive");
	    return false
	})



	/* navbar */
	var ww = $(window).width();

	if (ww > 500) {

	    $(window).scroll(function () {

	        if ($(window).scrollTop() < 100)
	            $("header").css({
	                "background-color": "rgba(0,0,0,.5)"
	            });

	        else
	            $("header").css({
	                "background-color": "rgb(15, 14, 14)",
	            });
	    });


	}


	// bars mouseover
	$("section .p-85").mouseover(function () {
	    $("#css").hide();
	})


	$("section .p-85").mouseleave(function () {
	    $("#css").show();
	})


	$("section .p-95").mouseover(function () {
	    $("#html").hide();
	})


	$("section .p-95").mouseleave(function () {
	    $("#html").show();
	})



	$("section .p-80").mouseover(function () {
	    $("#bootstrap").hide();
	})


	$("section .p-80").mouseleave(function () {
	    $("#bootstrap").show();
	})



	$("section .p-75").mouseover(function () {
	    $("#javascript").hide();
	})


	$("section .p-75").mouseleave(function () {
	    $("#javascript").show();
	})


	$("section #brown").mouseover(function () {
	    $("#jquery").hide();
	})


	$("section #brown").mouseleave(function () {
	    $("#jquery").show();
	})


	$("section #brown2").mouseover(function () {
	    $("#python").hide();
	})


	$("section #brown2").mouseleave(function () {
	    $("#python").show();
	})


	$("section .p-50").mouseover(function () {
	    $("#django").hide();
	})


	$("section .p-50").mouseleave(function () {
	    $("#django").show();
	})
	// bars mouseover end



    //to top button
	mybutton = document.getElementById("myBtn");

	// When the user scrolls down 20px from the top of the document, show the button
	window.onscroll = function () {
	    scrollFunction()
	};

	function scrollFunction() {
	    if (document.body.scrollTop > 700 || document.documentElement.scrollTop > 700) {
	        mybutton.style.display = "block";
	    } else {
	        mybutton.style.display = "none";
	    }
	}

	function topFunction() {
	    document.body.scrollTop = 0; // For Safari
	    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
	}
	//enf of the top button

    

	/* Contact with Email*/
	$('#alert').hide()

	const name = $('#fullname').val()
	const email = $('#email').val()
	const textMessage = $('#textarea').val()
	const form = $('#form')
	const alert = $('#alert')

	form.submit(function generateEmail(e) {

	    var emailTo = "berkay3304@gmail.com";
	    var emailBody = `Message:  ${$('#textarea').val()}  Contact:  ${$('#email').val()}`;
	    var emailSubject = "Work " + $('#fullname').val()
	    location.href = "mailto:" + emailTo + "?" +
	        (emailBody ? "&body=" + emailBody : "") +
	        (emailSubject ? "&subject=" + emailSubject : "");

	    e.preventDefault()

	})


    /* animation 

    $("nav a[href*='#']").click(function() { 
    
        $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top -100;
        },200 /* speed   );
    });
  */

