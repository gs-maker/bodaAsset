validateForm = () => {

   var name = document.forms["customerForm"]["firstName"];
   var lname = document.forms["customerForm"]["lastName"];
   var idnum = document.forms["customerForm"]["idNum"];
   var residence = document.forms["customerForm"]["homeAddress"];
   var division = document.form["customerForm"]["resDivision"];
   var email = document.forms["customerForm"]["emAddress"];
   var pnumber = document.forms["customerForm"]["phone"];
   var dob = document.forms["customerForm"]["dob"];

   // // asset Information
   // var stage = document.forms["customerForm"]("chairman");
   // var serial = document.forms["customerForm"]["serialNum"];

   // // payment details
   // var salary = document.forms["customerForm"]["salary"];
   // var currentIncome = documentforms["customerForm"]["curIncome"];
   // var nKin = document.forms["customerForm"]["nextKin"];

   // regular expressions
   var letters = /^[A-Za-z]+$/;
   var alphanumeric = /^[0-9a-zA-Z]+$/
   var symbols = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
   var numeric = /^[0-9]+$/

   // nested function for validation
   if (first_name(name)) {
      if (last_name(lname)) {
         if (ID_number(idnum)) {
            if (res_address(residence)) {
               if (mail(email)) {
                  if (phone(pnumber)) {
                     if (birth(dob)) {
                        return true
                     }
                  }
               }
            }
         }
      }
   } return false
}

// first name vlaidation
first_name = (input) => {
   let letters = /^[A-Za-z]+$/;
   if (input.value.match(letters)) {
      document.getElementById('is-valid1').innerHTML = ''
      input.style.border = '1px solid green'
      return true
   } else {
      document.getElementById('is-valid1').innerHTML = 'Your firstname must include alphabets only'
      input.style.border = '1px solid red'
      return false
   }
}

// last name validation
last_name = (input) => {
   let letters = /^[A-Za-z]+$/;
   if (input.value.match(letters)) {
      document.getElementById('is-valid2').innerHTML = ''
      input.style.border = '1px solid green'
      return true
   } else {
      document.getElementById('is-valid2').innerHTML = 'Your last name must include alphabets only'
      input.style.border = '1px solid red'
      input.focus();
      return false
   }
}

// ID number Validation
ID_number = (input) => {
   let letters = /^[a-zA-Z0-9]+$/;
   if (input.value.match(letters)) {
      document.getElementById('is-valid3').innerHTML = ''
      input.style.border = '1px solid green'
      return true
   } else {
      document.getElementById('is-valid3').innerHTML = 'ID Number must be alpahnumeric'
      input.style.border = '1px solid red'
      input.focus()
      return false
   }
}

// home address validation
res_address = (input) => {
   let letters = /^[0-9a-zA-Z]+$/;
   if (input.value.match(letters)) {
      document.getElementById('is-valid3').innerHTML = ''
      input.style.border = '1px solid green'
      return true
   } else {
      document.getElementById('is-valid3').innerHTML = 'Residential address must include address number'
      input.style.border = '1px solid red'
      input.focus()
      return false
   }
}


// email validation
mail = (input) => {
   let symbols = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
   if (input.value.match(symbols)) {
      document.getElementById('is-valid3').innerHTML = ''
      input.style.border = '1px solid green'
      return true
   } else {
      document.getElementById('is-valid3').innerHTML = 'Email address should include @ symbol'
      input.style.border = '1px solid red'
      input.focus()
      return false
   }
}