$( document ).ready(function() {

    // SUBMIT FORM
    $("#deleteAllCustomerId").click(function(event) {
        // Prevent the form from submitting via the browser.
        event.preventDefault();
        ajaxDelete();
    });

    function ajaxDelete(){

        // DO DELETE
        $.ajax({
            type : "DELETE",
            url : window.location + "api/customer/delete",
            success: function(result){
                if(result.status == "Done"){
                    $("#deleteResultDiv")
                    {
                        alert("All Customers Delete Successfully!")
                    };
                    console.log("Success: ", result);
                }else{
                    $("#deleteResultDiv").html("<strong>Error</strong>");
                    console.log("Fail: ", result);
                }
            },
            error : function(e) {
                $("#deleteResultDiv").html("<strong>Error</strong>");
                console.log("ERROR: ", e);
            }
        });
    }
})