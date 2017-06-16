
function ValidateForm(formid) {
	var result = true;
	var result1 = true;
    $("#"+formid+" .req").each(function (index) {
		   result1 = ValidateInput($(this));
		   result = result && result1;
    });

    $("#"+formid+" .reqemail").each(function (index) {
        //result = result && ValidateEmail($(this));
		result1 = ValidateEmail($(this));
		result = result && result1;
    });
	
	$("#"+formid+" .reqs").each(function (index) {
        //result = result && ValidateEmail($(this));
		result1 = ValidateSelect($(this));
		result = result && result1;
    });
	
	$("#"+formid+" .reqs2").each(function (index) {
        //result = result && ValidateEmail($(this));
		result1 = ValidateSelect2($(this));
		result = result && result1;
    });
	
	$("#"+formid+" .reqs3").each(function (index) {
        //result = result && ValidateEmail($(this));
		result1 = ValidateSelect3($(this));
		result = result && result1;
    });
	
	
	



    return result;

}

function ValidateSelect3(obj) {
    if ($(obj).val() == "") {
		$(obj).prev().prev().parent().addClass("error");

        return false;
    }
    else
	{
		$(obj).removeClass("error");
        return true;
	}
}


function ValidateSelect2(obj) {
    if ($(obj).val() == "-1") {
		$(obj).next().find(".select2-selection.select2-selection--single").addClass("error");

        return false;
    }
    else
	{
		$(obj).removeClass("error");
        return true;
	}
}

function ValidateSelect(obj) {
    if ($(obj).val() == "") {

		$(obj).parent().addClass("error");

        return false;
    }
    else
	{
		$(obj).removeClass("error");
        return true;
	}
}

function ValidateInput(obj) {
    if ($(obj).val() == "" || $(obj).attr("emessage")==$(obj).val()) {

		$(obj).addClass("error");
        $(obj).val($(obj).attr("emessage"));

        return false;
    }
    else
	{
		$(obj).removeClass("error");
        return true;
	}
}

function ValidateEmail(obj) {
    if (!fEmailCheck($(obj).val())) {

        $(obj).val($(obj).attr("emessage"));
        $(obj).addClass("error");

        return false;
    }
    else
        return true;
}

var fEmailCheck = function(str) {
    return (/^([a-z0-9_\-]+\.)*[a-z0-9_\-]+@([a-z0-9][a-z0-9\-]*[a-z0-9]\.)+[a-z]{2,4}$/i).test(str);
}

function ValidationFocusAndLBind() {

	$(document).on("focus",".req, .reqemail",function() {
	
	
        if ($(this).val()==$(this).attr("emessage"))
        {
            $(this).val("");
            $(this).removeClass("error");
        }

    });
	
	$(document).on("focusout",".req, .reqemail",function() {
 
	   if ($(this).val()==$(this).attr("emessage"))
        {
            $(this).val("");
            $(this).removeClass("error");
        }

    });
}

ValidationFocusAndLBind();
