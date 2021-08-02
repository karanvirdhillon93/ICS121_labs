function submission() {
    //-----------------------------------------------------------------------------------
    //creating our variables
    //-----------------------------------------------------------------------------------
    var nameCheck = "Incorrect format";
    var ageCheck = "Incorrect format";
    var emailCheck = "Sucess";
    var phoneCheck = "Sucess";
    var postalCheck = "Sucess";
    //-----------------------------------------------------------------------------------
    //getting our input needed
    //-----------------------------------------------------------------------------------
    var name = document.getElementById("namebox").value;
    var age = document.getElementById("textbox").value;
    var email = document.getElementById("emailbox").value;
    var phone = document.getElementById("phonebox").value;
    var postal = document.getElementById("postalbox").value;
    //-----------------------------------------------------------------------------------
    //checking name
    //-----------------------------------------------------------------------------------
    if (name.length > 0) {
        nameCheck = "Sucess";
    }
    if (age != "") {
        if (age >= 0 && age <= 120) {
            ageCheck = "Sucess";
        }
    }
    //-----------------------------------------------------------------------------------
    //name check ended
    //-----------------------------------------------------------------------------------
    //starting email check
    //-----------------------------------------------------------------------------------
    if (email == "") {
        emailCheck = "cannot be empty";
    }

    if (!/^[a-z0-9.+_-]+@[a-z0-9.-]+\.[a-z]+$/i.test(email)) {
        emailCheck = "Incorrect format";
    }
    //-----------------------------------------------------------------------------------
    //email check ended
    //-----------------------------------------------------------------------------------
    //phone check begins
    //-----------------------------------------------------------------------------------

    if (phone = "") {
        phoneCheck = "cannot be empty";
    }
    if (!/^([0-9]{3}(-[0-9]{3}-[0-9]{4}| [0-9]{3} [0-9]{4})|[0-9]{10})$/.test(phone)) {
        phoneCheck = "Incorrect format";
    }
    //-----------------------------------------------------------------------------------
    //phone check end
    //-----------------------------------------------------------------------------------
    //postal check begins
    //-----------------------------------------------------------------------------------
    if (postal = "") {
        postal = "cannot be empty";
    }
    if (!/^([0-9]{3}(-[0-9]{3}-[0-9]{4}| [0-9]{3} [0-9]{4})|[0-9]{10})$/.test(postal)) {
        postalCheck = "Incorrect format";
    }
    //-----------------------------------------------------------------------------------
    //postal check ends
    //-----------------------------------------------------------------------------------
    //finally we are printing our alert
    //-----------------------------------------------------------------------------------
    //alert printing below
    //-----------------------------------------------------------------------------------
    alert("Name field was a: " + nameCheck + "\n" + "Age field was a: " + ageCheck + "\n" + "Email field was a: " + emailCheck + "\n" + "Phone field was a: " + phoneCheck + "\n" + "Postal field was a: " + postalCheck);
    //-----------------------------------------------------------------------------------
    //end of code
     //-----------------------------------------------------------------------------------
}
