function sendMail(event) {
    event.preventDefault();
    let params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value
    }

    emailjs.send("service_2b8egxh", "template_xddlt7d", params)
        .then(function (response) {
            console.log("Email sent successfully!", response);
            document.getElementById("contact-form-id").reset(); // Reset the form
        }, function (error) {
            console.log("Failed to send email.", error);
        });
}
