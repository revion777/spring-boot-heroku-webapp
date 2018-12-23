$( document ).ready(function() {

    // GET REQUEST
    $("#getAllCustomerId").click(function (event) {
        // Prevent the form from submitting via the browser.
        event.preventDefault();
        ajaxGet();
    });

    //JQuery Ajax implementation
    function ajaxGet() {
        $.ajax({
            type: "GET",
            url: window.location + "api/customer/all",
            success: function (result) {
                if (result.status == "Done") {
                    $('#getResultDiv ul').empty();
                    var custList = "";
                    $.each(result.data, function (i, customer) {
                        var customer =
                            "<font size=3 style=color:#0ad416 face='comic sans ms'>"+
                                "ID: " + customer.clientId +
                                ", имя: " + customer.firstName +
                                ", фамилия: " + customer.lastName + "<br>"+
                            "</font>";

                        $('#getResultDiv .list-group').append(customer)
                    });
                    console.log("Success: ", result);
                } else {
                    $("#getResultDiv").html("<strong>Error</strong>");
                    console.log("Fail: ", result);
                }
            },
            error: function (e) {
                $("#getResultDiv").html("<strong>Error</strong>");
                console.log("ERROR: ", e);
            }
        });
    }
});