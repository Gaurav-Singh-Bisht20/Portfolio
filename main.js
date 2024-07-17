function sendEmail() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var subject = document.getElementById('subject').value;
    var message = document.getElementById('message').value;

    var templateParams = {
      from_name: name,
      from_email: email,
      subject: subject,
      message: message
    };

    emailjs.send('service_d8adm9h', 'template_wsplwvl', templateParams)
      .then(function(response) {
        alert('Email sent successfully!');
        document.getElementById('contact-form').reset();
      }, function(error) {
        alert('Failed to send email. Please try again.');
      });
  }

  document.getElementById('hamburger').onclick = function() {
    var navMenu = document.getElementById('navMenu');
    navMenu.classList.toggle('active');
};