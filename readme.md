# Frontend Mentor Project

## _Contact Us_

Building interactive forms is useful for front-end developers. This challenge allowed me to build a form with input types and validation.

## Features
When an input field is missed. The Dom creates a notification in red at the top that states that the entry is required it also changes the span text (*). When every form is filled out the form submits and sends an alert.

I used jquery to create a different alert menu than what the default JavaScript alert menu gives. This was a new learning curve for myself.

Languages used:

- HTML
- CSS
- JS
- jQuery

## Links

- Front-end Mentor Challenge Link: [FrontEnd]
- GitHub Repository Link: [RepoLink]
- Hosting Link: [HostingLink]

## Initial Setup:

1. I first created the text and input buttons in the .html.
2. I than stylized the form with font, color, padding, etc using flex and grid layouts.
3. I than implemented the interactivity using JavaScript. Each input needed a verification to register if the input was blank. The Radiobuttons had to include both buttons to register for verification and the checkbox needed its own verification.
4. I than decided to implement an extension into this form. After creating the results in the alert, I changed this platform to use jQuery. This used constant testing until I understood the code.

## Debugging

1. I found during this project i made simple errors and mistakes in typing. In one scenario I missed placing the parenthesis in script.js and in style.css I accidentally placed a comma where one was not needed and it sent the padding out of proportion. Both of these I solved using styles and Event Listeners in Developer Tools. Using styles and Event Listener in Developer Tools had made debugging easier than rereading the entire text or using console.log.

## Challenges

- The hardest challenge was implementing the jQuery. I used extensive research on how to implement this.

```sh
<script src="jquery-3.6.0.min.js"></script>
```

      I used ChatGpt to help understand this concept after using the links in the references.

```sh
 $("#alert .messageresult").text(alertMessage); // Set the message
      $("#alert .emailresult").text(emailResult); // Set the email
       $("#closeModal").click(function () { // Closes the alert window
        $("#myForm")[0].submit(); // Submits the form

      The expression $("#alert .messageresult") is a jQuery selector. Here's what it means:

$ refers to the jQuery function that selects elements from the DOM (Document Object Model).
#alert selects the element with the id of alert.
.messageresult selects elements with the class messageresult.
Together, $("#alert .messageresult") selects any element with the class messageresult that is a descendant (child, grandchild, etc.) of the element with the id of alert.
```
      

## Unresolved Bugs:
- I think the JavaScript in script.js could be simplified. There is input code that is being used in multiple locations that could be set to be simplier.

## References
- [EventListener]: Using the EventListener in a form.
- [RadioButtons]: Examples of how to use Radio Buttons with JavaScript.
- [jQueryAlert] - jQuery Tutorial
- [jQueryCustom] - jQuery Alert
- [ChatGPT]: Used ChatGPT to help understand the process of JQuery and to review the script.

[FrontEnd]: https://www.frontendmentor.io/challenges/contact-form--G-hYlqKJj
[RepoLink]: https://github.com/ixoekea/contactus-form
[HostingLink]: https://ixoekea.github.io/contactus-form/
[EventListener]: https://www.w3schools.com/jsref/met_document_addeventlistener.asp
[RadioButtons]: https://www.javascripttutorial.net/javascript-dom/javascript-radio-button/
[jQueryAlert]: https://stackoverflow.com/questions/2804157/how-to-alert-using-jquery
[jqueryCustom]: https://thelinuxcode.com/create-custom-alert-box-javascript/
[ChatGPT]: https://chatgpt.com/
