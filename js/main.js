var salesleft = $(".sales-left");
var salesdetailsleft = $(".sales__details-left");

var buttonClickHandler = function () {
	var currentstate = salesdetailsleft.attr("data-state");

	if (currentstate == "active") {
salesdetailsleft.attr("data-state", "inactive");
	} else {
salesdetailsleft.attr("data-state", "active");
	}

};

salesleft.on("click", buttonClickHandler);

var salesright = $(".sales-right");
var salesdetailsright = $(".sales__details-right");

var buttonClickHandler = function () {
	var currentstate = salesdetailsright.attr("data-state");

	if (currentstate == "active") {
salesdetailsright.attr("data-state", "inactive");
	} else {
salesdetailsright.attr("data-state", "active");
	}

};

salesright.on("click", buttonClickHandler);
