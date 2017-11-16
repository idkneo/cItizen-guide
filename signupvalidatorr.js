      var nameNode = document.getElementById("customername");
      var emailNode = document.getElementById("customeremail");
      var dateNode = document.getElementById("customerdob"); 
	  var addressNode = document.getElementById("customeraddress");
	  var phoneNode = document.getElementById("customerphone");
	  var passwordNode = document.getElementById("customerpassword");
	  
      nameNode.addEventListener("change", chkName, false);
      emailNode.addEventListener("change", chkEmail, false);
      dateNode.addEventListener("change", chkDate, false); 
	  addressNode.addEventListener("change", chkAddress, false);
	  phoneNode.addEventListener("change", chkPhone, false);
	  passwordNode.addEventListener("change", chkPassword, false);