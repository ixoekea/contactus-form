document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const email = document.getElementById("eMail").value.trim();
    const message = document.getElementById("message").value.trim();
    const consent = document.getElementById("consent");
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
      consentValueStore = "Yes";
    } else {
      consentValueStore = "No";
    }

    if (!consent.checked) {
      const para = document.createElement("p");
      para.innerHTML = "Checkbox is required"; //DOM creates <p> in red text
      para.style.color = "red";
      var required = document.getElementById("requiredConsent"); //Required Symbol * changes to red
      required.style.color = "red";
      error.appendChild(para);
      hasError = true;
    }

    //Submit Form Everything is verified

    //Form Data collection
    const emailResult = $(" #eMail").val();
    const messageinputresult = $("#message").val();
    const consentResult = consent.checked ? "Yes" : "No";
    if (!hasError) {
      form.reset();
      var alertMessage = `Hello ${firstName} ${lastName}, Your form is submitted.`;
      $("#alert .messageresult").text(alertMessage); // Set the message
      $("#alert .emailresult").text(emailResult); // Set the email
      $("#alert .enquiryresult").text(radioValueStore);
      $("#alert .messagetextresult").text(messageinputresult);
      $("#alert .consentresult").text(consentResult);
      $("#alert").show(); // Show the custom modal
      $("#closeModal").click(function () {
        $("#myForm")[0].submit();
      });
    }
  });
});
