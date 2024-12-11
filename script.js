document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const email = document.getElementById("eMail").value.trim();
    const message = document.getElementById("message").value.trim();
    const consent = document.getElementById("consent").value.trim();
    const radioInput = document.getElementsByName("queryType");
    const error = document.getElementById("error");
    error.innerHTML = "";

    let hasError = false;

    //First Name Verification
    if (firstName === "") {
      const para = document.createElement("p");
      para.innerHTML = "First Name is required"; //DOM creates <p> in red text
      para.style.color = "red";
      var required = document.getElementById("requiredFirstname"); //Required Symbol * changes to red
      required.style.color = "red";
      error.appendChild(para);
      hasError = true;
    }

    //Last Name Verification
    if (lastName === "") {
      const para = document.createElement("p");
      para.innerHTML = "Last Name is required"; //DOM creates <p> in red text
      para.style.color = "red";
      var required = document.getElementById("requiredLastname"); //Required Symbol * changes to red
      required.style.color = "red";
      error.appendChild(para);
      hasError = true;
    }

    //Email Verification
    if (email === "") {
      const para = document.createElement("p");
      para.innerHTML = "E-mail address is required"; //DOM creates <p> in red text
      para.style.color = "red";
      var required = document.getElementById("requiredEmail"); //Required Symbol * changes to red
      required.style.color = "red";
      error.appendChild(para);
      hasError = true;
    }

    //Radio Button Verification
    let radioClicked = false;
    let radioValueStore = "";
    for (let i = 0; i < radioInput.length; i++) {
      if (radioInput[i].checked) {
        radioClicked = true;
        radioValueStore = radioInput[i].value;
        break;
      }
    }
    if (!radioClicked) {
      const para = document.createElement("p");
      para.innerHTML = "Query Type is required"; //DOM creates <p> in red text
      para.style.color = "red";
      var required = document.getElementById("requiredQuery"); //Required Symbol * changes to red
      required.style.color = "red";
      error.appendChild(para);
      hasError = true;
    }
    //Message Verification
    if (message === "") {
      const para = document.createElement("p");
      para.innerHTML = "Please input a message"; //DOM creates <p> in red text
      para.style.color = "red";
      var required = document.getElementById("requiredMessage"); //Required Symbol * changes to red
      required.style.color = "red";
      error.appendChild(para);
      hasError = true;
    }

    //Checkbox Verification
    let consentValueStore = "";
    if (consent.checked) {
      consentValueStore = "No";
    } else {
      consentValueStore = "Yes";
    }

    if (consent.checked) {
      const para = document.createElement("p");
      para.innerHTML = "Checkbox is required"; //DOM creates <p> in red text
      para.style.color = "red";
      var required = document.getElementById("requiredConsent"); //Required Symbol * changes to red
      required.style.color = "red";
      error.appendChild(para);
      hasError = true;
    }

    //Submit Form Everything is verified

    if (!hasError) {
      alert(
        `Hello ${firstName} ${lastName}, Your form is submitted.\n\nForm Summary:\nE-mail: ${email}\nRequired Query: ${radioValueStore}\nMessage: ${message}\nConfirmation: ${consentValueStore}`
      );
      form.submit();
    }
  });
});
