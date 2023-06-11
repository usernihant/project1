document.getElementById('reviewForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get the form data
    const name = document.getElementById('name').value;
    const Lname = document.getElementById('Lname').value;
    const email = document.getElementById('email').value;
    const review = document.getElementById('review').value;
    const mNumber = document.getElementById('mNumber').value;
  
    // Prepare the email body
    const subject = 'New Review';
    const body = `Name: ${name}\nLast Name: ${Lname}\nMobile Number: ${mNumber}\nEmail: ${email}\nReview: ${review}`;
  
    // Compose the email link
    const mailtoLink = `mailto:usernihant@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  
    // Open the email client with the pre-filled email
    window.location.href = mailtoLink;

    alert('Your review has been submitted successfully. Thank you for your feedback!');
});
  