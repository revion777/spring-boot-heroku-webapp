$( document ).ready(function() {
	
	// SUBMIT FORM
    $("#customerForm").submit(function(event) {
		// Prevent the form from submitting via the browser.
		event.preventDefault();
		ajaxPost();
	});

    function ajaxPost(){
    	
    	// PREPARE FORM DATA
    	var formData = {
    		clientId : $("#clientId").val(),
    		firstName : $("#firstName").val(),
    		lastName :  $("#lastName").val()
    	};
    	
    	// DO POST
    	$.ajax({
			type : "POST",
			contentType : "application/json",
			url : window.location + "api/customer/save",
			data : JSON.stringify(formData),
			dataType : 'json',
			success : function(result) {
				if(result.status == "Done"){
					$("#postResultDiv").html(
						"<p style='background-color:#7FA7B0; color:white; padding:20px 20px 20px 20px'>" +
							"Post Successfully! <br>" +
							"---> ID = " + result.data.clientId + ", Имя = " +
							result.data.firstName + ", Фамилия = " + result.data.lastName +
						"</p>");
				}else{
					$("#postResultDiv").html("<strong>Error</strong>");
				}
				console.log(result);
			},
			error : function(e) {
				alert("Error! Please, fill the fields correctly");
				console.log("ERROR: ", e);
			}
		});
    	
    	// Reset FormData after Posting
    	resetData();
    }
    
    function resetData(){
        $("#clientId").val("");
    	$("#firstName").val("");
    	$("#lastName").val("");
    }
});