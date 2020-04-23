function register() {

   event.preventDefault()

   // all fields to be validated
   var name = document.getElementById["first_name"];
   var lastName = document.getElementById["last_name"];
   var email = document.getElementById["email"];
   var password = document.getElementById["password"];
   var comf_password = document.getElementById["confirm_password"];

   // valid/invalid variables
   var valid = true;

   // first name validation
   if (name.value.length == 0) {
      name.className = "wrongInput";
      name.nextElementSibling.innerHtml = "Please fill in your first name";
      valid = false;
   } else {
      var letters = /^[a-zA-Z\s]+$/;
      if (letters.test(name) === false) {
         printError("Please enter a valid name");
      } else {
         printError("");
         return false;
      }
   }
   return valid;
}