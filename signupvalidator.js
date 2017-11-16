function chkName(event) {

  var CustName = event.currentTarget;
  var pos = CustName.value.search(/^[A-Za-z ]*$/);

  if (pos != 0) {
    alert("The name you entered (" + CustName.value + 
          ") is not in the correct form. \n" +
          "Only alphabets and character spaces are allowed.");
    CustName.focus();
    CustName.select();
	document.getElementById("customername").value="";
  } 
}


function chkEmail(event) {

  var CustEmail = event.currentTarget;
  var pos = CustEmail.value.search(/^[\w.-]+@[a-zA-Z]+(\.[a-zA-Z]{2,3}){1,3}$/);

 
  if (pos != 0) {
    alert("The email you entered (" + CustEmail.value +
          ") is not in the correct form. \n");
    CustEmail.focus();
    CustEmail.select();
	document.getElementById("customeremail").value="";
  } 
}

function chkDate(event) {
	
  var CustDob = event.currentTarget;
 
        var today = new Date();
        var todayyear = today.getFullYear();
        var todaymonth = today.getMonth();
        var todayday = today.getDate();
  
		var birth = new Date(CustDob.value);

        var birthyear = birth.getFullYear();
        var birthmonth = birth.getMonth();
        var birthday = birth.getDate();

        var age = todayyear - birthyear;
        var agemonth = todaymonth - birthmonth;
        var ageday = todayday - birthday;


        if ((age == 18 && agemonth <= 0 && ageday <= 0) || age < 18) {
            alert("Age should be more than 18 years. Please enter a valid Date of Birth. ");
 
    CustDob.focus();
    CustDob.select();
	document.getElementById("customerdob").value="";
  } 
}

function chkAddress(event) {
	
  var CustAddress = event.currentTarget;
  var valCustAddress = CustAddress.value.trim();
  
  if (valCustAddress == "") {
    alert("The field cannot be left blank");
    CustAddress.focus();
    CustAddress.select();
	document.getElementById("customeraddress").value="";
  } 

}

function chkPassword(event) {
	
	var CustPassword = event.currentTarget;

	// at least one number, one lowercase and one uppercase letter
    // at least six characters
    var pos = CustPassword.value.search(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{6,}$/);
	
  if (pos !=0) {
    alert("Enter a password with at least one number, one lowercase, one uppercase letter and at least six characters. ");
    CustPassword.focus();
    CustPassword.select();
	document.getElementById("customerpassword").value="";
  }
}


function chkPhone(event) {
	
	var CustPhone = event.currentTarget;
	
	var pos = CustPhone.value.search(/^[0-9]{8}$/);

  if (pos != 0) {
    alert("The phone number you entered (" + CustPhone.value + 
          ") is not 8 digits. Do not enter area code. \n");
    CustPhone.focus();
    CustPhone.select();
	document.getElementById("customerphone").value="";
  }
}

function chkMessage(event) {
	
  var CustMessage = event.currentTarget;
  var valCustMessage = CustMessage.value.trim();
  
  if (valCustMessage == "") {
    alert("The field cannot be left blank");
    CustMessage.focus();
    CustMessage.select();
	document.getElementById("customermessage").value="";
  } 

}