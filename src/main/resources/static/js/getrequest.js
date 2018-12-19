$( document ).ready(function() {

	// GET REQUEST
	$("#getAllCustomerId").click(function(event){
        // Prevent the form from submitting via the browser.
		event.preventDefault();
		ajaxGet();
	});

	// DO GET
    function ajaxGet() {
        var http = new XMLHttpRequest();
        var url = window.location + "api/customer/all";
        http.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("getResultDiv").innerHTML = this.responseText;
            }
        };
        http.open("GET", url, true);
        http.send();
    }
})

	/*
	//JQuery Ajax implementation
	function ajaxGet(){
		$.ajax({
			type : "GET",
			url : window.location + "api/customer/all",
			success: function(result){
				if(result.status == "Done"){
					$('#getResultDiv ul').empty();
					var custList = "";
                    $.each(result.data, function(i, customer){
						var customer = "ID клиента = " + customer.clientId + ", имя = " + customer.firstName + ", фамилия = " + customer.lastName + "<br>";
						$('#getResultDiv .list-group').append(customer)
			        });
					console.log("Success: ", result);
				}else{
					$("#getResultDiv").html("<strong>Error</strong>");
					console.log("Fail: ", result);
				}
			},
			error : function(e) {
				$("#getResultDiv").html("<strong>Error</strong>");
				console.log("ERROR: ", e);
			}
		});	
	}*/
