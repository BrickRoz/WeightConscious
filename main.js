// DB =database, T = table, TR = tabble row

//this section stopped workin in the js file, so I put it back in the html file

$(document).ready(function() {
	$("#formAdult").hide();			   
	$("#searchFormAS").hide();
	$("#heightAS").hide();
	$("#ageAS").hide();
	$("#weightAS").hide();
	
	$("#adultBtn").click(function() {
	    $("#formAdult").show();
	    $("#searchFormAS").hide();
	});			    
});

$(document).ready(function() {
	$("#formChild").hide();			   
	$("#searchFormCS").hide();
	$("#heightCS").hide();
	$("#ageCS").hide();
	$("#weightCS").hide();
	
	$("#childBtn").click(function() {
	    $("#formChild").show();
	    $("#searchFormCS").hide();
	});			    
});

//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

//Constructors for collecting data
function PersonA(inputFirstA, inputLastA, inputHeightA, inputAgeA, inputWeightA) {
		this.inputFirstA = inputFirstA;
		this.inputLastA = inputLastA;
		this.inputHeightA = inputHeightA;
		this.inputAgeA = inputAgeA;
		this.inputWeightA = inputWeightA;		
}

//get a reference to the root of the persons data
var personADB = new Firebase("https://flickering-inferno-1785.firebaseio.com/weightConscious/Adult");

/*The button is to submit the data when clicked, 
call the validation process that checks the fields, 
create a new Person and push the person's into the database*/
$('#submitAdult').on('click', function() {//gather all the 
	//gather all the 
	var inputFirstA = $('#inputFirstA').val();
	var inputLastA = $('#inputLastA').val();
	var inputHeightA = parseInt($('#inputHeightA').val(), 10);
	var inputAgeA =  parseInt($('#inputAgeA').val(), 10);
	var inputWeightA =  parseInt($('#inputWeightA').val(), 10);

	if (inputFirstA==null || inputFirstA=="") {
		alert("First name must be filled in.");
		return ;
	}
	if (inputLastA==null || inputLastA=="") {
		alert("Last name must be filled in.");
		return ;
	}
	if (inputHeightA==null || inputHeightA=="" || isNaN(inputHeightA)) {//isNan takes care of null and "".
		alert("Error, please enter a number for the hieght.");
		return ;
	}
	if (inputAgeA==null || inputAgeA=="" || isNaN(inputAgeA)) {
		alert("Error, please enter a number for the age.");
		return ;
	}	
	if (inputWeightA==null || inputWeightA=="" || isNaN(inputWeightA)) {
		alert("Error, please enter a number for the weight.");
		return ;
	}
	var personA = new PersonA(inputFirstA, inputLastA, inputHeightA, inputAgeA, inputWeightA);
	personADB.push(personA);
	resetA();	
});

//make following 3 fields visible
$("#searchFormABtn").on("click", function() {
	//hide form
	$("#formAdult").hide();	
	//show search form
	$("#searchFormAS").show();	
	$("#heightAS").show();
	$("#ageAS").show();
	$("#weightAS").show();
});

//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&		SEARCH SECTIONS		&&&&&&&&&&&&&&&&&&&&&&&&

//Form of fields to look for person in database
$('#searchAdultDB').on('click', function() {
	//is this person in the database
	var inputFirstAS = $('#inputFirstAS').val();
	var inputLastAS = $('#inputLastAS').val();
	var inputAgeAS =  parseInt($('#inputAgeAS').val(), 10);
	var inputWeightAS =  parseInt($('#inputWeightAS').val(), 10);
	
	if (inputFirstAS==null || inputFirstAS=="") {
		alert("First name must be filled in.");
		return ;
	}
	if (inputLastAS==null || inputLastAS=="") {
		alert("Last name must be filled in.");
		return ;
	}
	if (inputAgeAS==null || inputAgeAS=="" || isNaN(inputAgeAS)) {
		alert("Error, please enter a number for the age.");
		return ;
	}	
	if (inputWeightAS==null || inputWeightAS=="" || isNaN(inputWeightAS)) {
		alert("Error, please enter a number for the weight.");
		return ;
	}

	var personAS = new PersonAS(inputFirstAS, inputLastAS);
	//go();
	//resetAS();	
});

$('#closeAdult').on('click', function() {
	$('#formAdult').hide();
});

$('#closeAdultS').on('click', function() {
	$('#formAdult').show();
	$('#searchFormAS').hide();
});


//<!--CLEAR FORM FIELDS-->
function resetA() {
	var inputFirstA = $('#inputFirstA').val("");
	var inputLastA = $('#inputLastA').val("");
	var inputHeightA = parseInt($('#inputHeightA').val(""), 10);
	var inputAgeA =  parseInt($('#inputAgeA').val(""), 10);
	var inputWeightA =  parseInt($('#inputWeightA').val(""), 10);
}

function resetAS() {
	var inputFirstAS = $('#inputFirstAS').val("");
	var inputLastAS = $('#inputLastAS').val("");
}


//&&&&&&&&&&&&&&&&&&&&	CHILD SECTION	&&&&&&&&&&&&&&&&&&&&

//Constructors for collecting data
function PersonC(inputFirstC, inputLastC, inputHeightC, inputAgeC, inputWeightC) {
		this.inputFirstC = inputFirstC;
		this.inputLastC = inputLastC;
		this.inputHeightC = inputHeightC;
		this.inputAgeC = inputAgeC;
		this.inputWeightC = inputWeightC;
}

//get a reference to the root of the persons data
var personCDB = new Firebase("https://flickering-inferno-1785.firebaseio.com/weightConscious/Child");

/*The button is to submit the data when clicked, 
call the validation process that checks the fields, 
create a new Person and push the person's into the database*/
$('#submitChild').on('click', function() {//gather all the 
	//gather all the 
	var inputFirstC = $('#inputFirstC').val();
	var inputLastC = $('#inputLastC').val();
	var inputHeightC = parseInt($('#inputHeightC').val(), 10);
	var inputAgeC =  parseInt($('#inputAgeC').val(), 10);
	var inputWeightC =  parseInt($('#inputWeightC').val(), 10);
	if (inputFirstC==null || inputFirstC=="") {
		alert("First name must be filled in.");
		return ;
	}
	if (inputLastC==null || inputLastC=="") {
		alert("Last name must be filled in.");
		return ;
	}
	if (inputHeightC==null || inputHeightC=="" || isNaN(inputHeightC)) {//isNan takes care of null and "".
		alert("Error, please enter a number for the hieght.");
		return ;
	}
	if (inputAgeC==null || inputAgeC=="" || isNaN(inputAgeC)) {
		alert("Error, please enter a number for the age.");
		return ;
	}	
	if (inputWeightC==null || inputWeightC=="" || isNaN(inputWeightC)) {
		alert("Error, please enter a number for the weight.");
		return ;
	}
	var personC = new PersonC(inputFirstC, inputLastC, inputHeightC, inputAgeC, inputWeightC);
	personCDB.push(personC);
	resetC();	
});

$("#searchFormCBtn").on("click", function() {
	//hide form
	$("#formChild").hide();	
	//show search form
	$("#searchFormCS").show();	
	$("#heightCS").show();
	$("#ageCS").show();
	$("#weightCS").show();
});

//Form of fields to look for person in database
$('#searchChildDB').on('click', function() {
	//is this person in the database
	var inputFirstCS = $('#inputFirstCS').val();
	var inputLastCS = $('#inputLastCS').val();
	var inputHeightCS = parseInt($('#inputHeightCS').val(), 10);
	var inputAgeCS =  parseInt($('#inputAgeCS').val(), 10);
	var inputWeightCS =  parseInt($('#inputWeightCS').val(), 10);
	
	if (inputFirstCS==null || inputFirstCS=="") {
		alert("First name must be filled in.");
		return ;
	}
	if (inputLastCS==null || inputLastCS=="") {
		alert("Last name must be filled in.");
		return ;
	}
	if (inputHeightCS==null || inputHeightCS=="" || isNaN(inputHeightCS)) {//isNan takes care of null and "".
		alert("Error, please enter a number for the hieght.");
		return ;
	}
	if (inputAgeCS==null || inputAgeCS=="" || isNaN(inputAgeCS)) {
		alert("Error, please enter a number for the age.");
		return ;
	}	
	if (inputWeightCS==null || inputWeightCS=="" || isNaN(inputWeightCS)) {
		alert("Error, please enter a number for the weight.");
		return ;
	}
	var personCS = new PersonAS(inputFirstCS, inputLastCS);
	///go();
	//resetCS();	
});

//CONTROL VISABILITY OF FORMS
$('#closeChild').on('click', function() {
    $('#formChild').hide();
});			 

$('#closeChildS').on('click', function() {
    $('#formChild').show();
    $('#searchFormCS').hide();
});	

//<!--EMPTY CHILD FIELDS-->
function resetC() {
	var inputFirstC = $('#inputFirstC').val("");
	var inputLastC = $('#inputLastC').val("");
	var inputHeightC = parseInt($('#inputHeightC').val(""), 10);
	var inputAgeC =  parseInt($('#inputAgeC').val(""), 10);
	var inputWeightC =  parseInt($('#inputWeightC').val(""), 10);
}

function resetCS() {
	var inputFirstCS = $('#inputFirstCS').val("");
	var inputLastCS = $('#inputLastCS').val("");
}












