agentValidate = () => {
   // fields to be validated
   var name = document.forms["agentForm"]["firstName"];
   var lname = document.forms["agentForm"]["lastName"];
   var idnum = document.forms["agentForm"]["idNum"];
   var residence = document.forms["agentForm"]["homeAddress"];
   var division = document.forms["agentForm"]["resDivision"];
   var parish = document.forms["agentForm"]["parish"];
   var email = document.forms["agentForm"]["emAddress"];
   var pnumber = document.forms["agentForm"]["phone"];
   var dob = document.forms["agentForm"]["dob"];

   // employee Information
   var employment = document.forms["agentForm"]["emStatus"];
   var role = document.forms["agentForm"]["role"];
   var reportAuth = document.forms["agentForm"]["supervisor"];
   var work = document.forms["agentForm"]["workStation"];

   // regular expressions
   // var letters = /^[A-Za-z]+$/;
   // var alphanumeric = /^[0-9a-zA-Z]+$/
   // var symbols = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
   // var numeric = /^[0-9]+$/

   // nested function for validation
   if (FirstName(name)) {
      if (LastName(lname)) {
         if (IDnumber(idnum)) {
            if (ResAddress(residence)) {
               if (Division(division)) {
                  if (Mail(email)) {
                     if (PhoneNumber(pnumber)) {
                        if (Parish(parish)) {
                           if (Dob(dob)) {
                              if (EmpStatus(employment)) {
                                 if (AsRole(role)) {
                                    if (Supervisor(reportAuth)) {
                                       if (WorkBase(work)) {
                                          return true
                                       }
                                    }
                                 }
                              }
                           }
                        }
                     }
                  }
               }
            }
         }
      }
   } return false
}

// first name vlaidation
FirstName = (input) => {
   let letters = /^[A-Za-z]+$/;
   if (input.value.match(letters)) {
      document.getElementById('is-valid1').innerHTML = ''
      input.style.border = '1px solid green'
      return true
   } else {
      document.getElementById('is-valid1').innerHTML = 'First name must include letters only'
      input.style.border = '1px solid red'
      return false
   }
}

// last name validation
LastName = (input) => {
   let letters = /^[A-Za-z]+$/;
   if (input.value.match(letters)) {
      document.getElementById('is-valid2').innerHTML = ''
      input.style.border = '1px solid green'
      return true
   } else {
      document.getElementById('is-valid2').innerHTML = 'Last name must include alphabets only'
      input.style.border = '1px solid red'
      input.focus();
      return false
   }
}

// ID number Validation
IDnumber = (input) => {
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

//home address validation
ResAddress = (input) => {
   let letters = /^[#.0-9a-zA-Z\s,-]+$/;
   if (input.value.match(letters)) {
      document.getElementById('is-valid4').innerHTML = ''
      input.style.border = '1px solid green'
      return true
   } else {
      document.getElementById('is-valid4').innerHTML = 'Residential address must include numbers'
      input.style.border = '1px solid red'
      input.focus()
      return false
   }
}

//home address validation
Division = (input) => {
   if (input.value === 'default') {
      document.getElementById('is-valid5').innerHTML = 'Please select from the listed divisions'
      input.style.border = '1px solid red'
      return false
   } else {
      document.getElementById('is-valid5').innerHTML = ''
      input.style.border = '1px solid green'
      input.focus()
      return true
   }
}

//home address validation
Parish = (input) => {
   if (input.value === 'default') {
      document.getElementById('is-valid6').innerHTML = 'Please select from the list of parishes'
      input.style.border = '1px solid red'
      return false
   } else {
      document.getElementById('is-valid6').innerHTML = ''
      input.style.border = '1px solid green'
      input.focus()
      return true
   }
}

// email validation
Mail = (input) => {
   let symbols = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
   if (input.value.match(symbols)) {
      document.getElementById('is-valid7').innerHTML = ''
      input.style.border = '1px solid green'
      return true
   } else {
      document.getElementById('is-valid7').innerHTML = 'Email address should include the "@" symbol'
      input.style.border = '1px solid red'
      input.focus()
      return false
   }
}


// phone validation
PhoneNumber = (input) => {
   let numbers = /^[0-9]+$/
   if (input.value.match(numbers)) {
      document.getElementById('is-valid8').innerHTML = ''
      input.style.border = '1px solid green'
      return true
   } else {
      document.getElementById('is-valid8').innerHTML = 'Phone number has only numerals'
      input.style.border = '1px solid red'
      input.focus()
      return false
   }
}


// date of birth
Dob = (input) => {
   let numbers = /^[0-9]+$/
   if (input.value.match(numbers)) {
      document.getElementById('is-valid9').innerHTML = ''
      input.style.border = '1px solid green'
      return true
   } else {
      document.getElementById('is-valid9').innerHTML = 'Please fill in the date of birth'
      input.style.border = '1px solid red'
      input.focus()
      return false
   }
}


// Employement details validation
// payment duration
EmpStatus = (input) => {
   if (input.value === 'default') {
      document.getElementById('is-valid17').innerHTML = 'Please select the type of contract'
      input.style.border = '1px solid red'
      return false
   } else {
      document.getElementById('is-valid17').innerHTML = ''
      input.style.border = '1px solid green'
      input.focus()
      return true
   }
}

// Assigned Role
AsRole = (input) => {
   if (input.value === 'default') {
      document.getElementById('is-valid17').innerHTML = 'Please select the type of contract'
      input.style.border = '1px solid red'
      return false
   } else {
      document.getElementById('is-valid17').innerHTML = ''
      input.style.border = '1px solid green'
      input.focus()
      return true
   }
}


// Assigned Role
Supervisor = (input) => {
   if (input.value === 'default') {
      document.getElementById('is-valid17').innerHTML = 'Please select the type of contract'
      input.style.border = '1px solid red'
      return false
   } else {
      document.getElementById('is-valid17').innerHTML = ''
      input.style.border = '1px solid green'
      input.focus()
      return true
   }
}


// Reporting Authority
AsRole = (input) => {
   if (input.value === 'default') {
      document.getElementById('is-valid17').innerHTML = 'Please select the type of contract'
      input.style.border = '1px solid red'
      return false
   } else {
      document.getElementById('is-valid17').innerHTML = ''
      input.style.border = '1px solid green'
      input.focus()
      return true
   }
}


// Workstation
WorkBase = (input) => {
   if (input.value === 'default') {
      document.getElementById('is-valid17').innerHTML = 'Please select the type of contract'
      input.style.border = '1px solid red'
      return false
   } else {
      document.getElementById('is-valid17').innerHTML = ''
      input.style.border = '1px solid green'
      input.focus()
      return true
   }
}