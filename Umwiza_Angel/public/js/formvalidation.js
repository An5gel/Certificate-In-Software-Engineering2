const Validate  = ()=>{
  //picking input field with their names
  let firstName = document.kycform.firstname;
  let lastName = document.kycform.lastname;
  let date = document.kycform.date
  let gender = document.kycform.gender
  let country = document.kycform.country
  let state =  document.kycform.state
  let town =  document.kycform.town
 



  //picking error fields
  let errorfirstName = document.getElementById("firstnameerror");
  let errorlastName = document.getElementById("lastnameerror");
  let dateError = document.getElementById("dateerror");
   let genderError = document.getElementById("gendererror")
   let stateError = document.getElementById("stateerror")
   let townError = document.getElementById("townerror")


  //validating first name inputs
  //validating for emptyness
  if (firstName.value == "") {
    firstName.style.border = "2px solid red";
    errorfirstName.textContent = "please provide your firstname";
    errorfirstName.style =
      "color: red; fontsize:11px; font-size:Helvetical, Arial,sans-serif";
    firstName.focus();
    return false;
  } else if (firstName.value.length < 2) {
    firstName.style.border = "2px solid red";
    errorfirstName.textContent = "first name must be at least 2 characters";
    errorfirstName.style =
      "color: red; fontsize:11px; font-size:Helvetical, Arial,sans-serif";
    firstName.focus();
    return false;
  } else if (firstName.value.length > 255) {
    firstName.style.border = "2px solid red";
    errorfirstName.textContent =
      "first name must not be greater than 255 characters";
    errorfirstName.style =
      "color: red; fontsize:11px; font-size:Helvetical, Arial,sans-serif";
    firstName.focus();
    return false;
  } else {
    firstName.style.border = "2px solid green";
    errorfirstName.textContent = "";
    lastName.focus();
  }

  // validating lastname
  if (lastName.value == "") {
    lastName.style.border = "2px solid red";
    errorlastName.textContent = "please provide your lastName";
    errorlastName.style =
      "color: red; fontsize:11px; font-size:Helvetical, Arial,sans-serif";
    lastName.focus();
    return false;
  } else if (lastName.value.length < 2) {
    lastName.style.border = "2px solid red";
    errorlastName.textContent = "last name must be at least 2 characters";
    errorlastName.style =
      "color: red; fontsize:11px; font-size:Helvetical, Arial,sans-serif";
    lastName.focus();
    return false;
  } else if (lastName.value.length > 255) {
    lastName.style.border = "2px solid red";
    errorlastName.textContent =
      "last name must not be greater than 255 characters";
    errorlastName.style =
      "color: red; fontsize:11px; font-size:Helvetical, Arial,sans-serif";
    lastName.focus();
    return false;
  } else {
    lastName.style.border = "2px solid green";
    errorlastName.textContent = "";
   date.focus();
  }

  // validating date
  if (date.value == "") {
    date.style.border = "2px solid red";
    dateError.textContent = "please select a date";
    dateError.style =
      "color: red; fontsize:11px; font-size:Helvetical, Arial,sans-serif";
  return false;
  } else {
    date.style.border = "2px solid green";
    dateError.textContent = "";
    gender.focus();
  }
   // validating gender
   if (gender.value == "") {
    gender.style.border = "2px solid red";
    genderError.textContent = "please select a gender";
    genderError.style =
      "color: red; fontsize:11px; font-size:Helvetical, Arial,sans-serif";
  return false;
  } else {
    gender.style.border = "2px solid green";
    genderError.textContent = "";
   country.focus();
  }

  

  

  // validating country
  if (country.value == "") {
    country.style.border = "2px solid red";
    countryError.textContent = "please select a country";
    countryError.style = "color: red; fontsize:11px; font-size:Helvetical, Arial,sans-serif";
 return false;
  } else {
    country.style.border = "2px solid green";
    countryError.textContent = "";
    state.focus();
  }

  // validating state
  if (state.value == "") {
    state.style.border = "2px solid red";
    stateError.textContent = "please select a state";
    stateError.style =
      "color: red; fontsize:11px; font-size:Helvetical, Arial,sans-serif";
    state.focus();
    return false;
  } else {
    state.style.border = "2px solid green";
    stateError.textContent = "";
    town.focus();
  }

    // validating town
    if (town.value == "") {
        town.style.border = "2px solid red";
        townError.textContent = "please select a town";
        townError.style =
          "color: red; fontsize:11px; font-size:Helvetical, Arial,sans-serif";
        town.focus();
        return false;
      } else {
        town.style.border = "2px solid green";
        townError.textContent = "";
        phonenumber1.focus();
      }

      //validating phone number1
  if (phonenumber1.value == "") {
    phonenumber1.style.border = "2px solid red";
    phonenumber1error.textContent = "phone number is invalid";
  phonenumber1.style =
      "color: red; font-size:11px; font-family: Helvetica,arial;";
    phone.focus();
    return false;
  }else {
   phonenumber1.style.border = "2px solid green";
   phonenumber1.textContent = "";
   phonenumber1.focus();
  }

      //validating phone number2
  if (phonenumber2.value == "") {
    phonenumber2.style.border = "2px solid red";
    phonenumber2error.textContent = "phone number is required";
  phonenumber2.style =
      "color: red; font-size:11px; font-family: Helvetica,arial;";
    phone.focus();
    return false;
  }else {
   phonenumber2.style.border = "2px solid green";
   phonenumber2.textContent = "";
   phonenumber2.focus();
  }


 

};
