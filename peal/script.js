const imageContainer = document.querySelector(".image-container");
const image1 = document.getElementById("image1");
const image3 = document.getElementById("image3");
const sliderContainer = document.querySelector(".slider-container");

// Initially hide the slider container
sliderContainer.style.display = "none";

// Add a click event listener to the image container
imageContainer.addEventListener("click", () => {
  // Disable further clicks during the transition
  imageContainer.classList.add("clicked");

  // Add a transition for the third image
  setTimeout(() => {
    // Fade in the third image completely
    imageContainer.classList.add("fading");
  }, 300);

  // After the image transition is completed, show the slider container
  const transitionDuration = 1000;
  setTimeout(() => {
    image1.style.display = "none";
    sliderContainer.style.display = "block";
    sliderContainer.classList.add("show");
  }, transitionDuration);
});

// Slider functionality
const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');

let currentIndex = 0;

function slideLeft() {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = slides.length - 1; // Wrap to the last image
  }
  updateSliderPosition();
}

function slideRight() {
  if (currentIndex < slides.length - 1) {
    currentIndex++;
  } else {
    currentIndex = 0; // Wrap to the first image
  }
  updateSliderPosition();
}

function updateSliderPosition() {
  slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Initialize EmailJS with your public key
emailjs.init("1OiqE8hu58GQ2tiK4");

// Function to send email
function sendEmail(imageUrl, subject, templateId) {
  const templateParams = {
    to_email: 'arunkumar.s202006@gmail.com', // Recipient's email address
    subject: subject,  // Subject (Image name)
    message: 'open the link or image:', // Message content
    image_url: imageUrl, // Image URL to be included in the email
  };

  emailjs.send('service_x4bzd0l', templateId, templateParams)
    .then(function(response) {
      console.log('Success:', response);
      alert('Email sent successfully!');
    }, function(error) {
      console.log('Error:', error);
      alert('Error sending email!');
    });
}

// Button 1 click event for sending Image 1
document.getElementById('button1').addEventListener('click', function() {
  console.log('Button 1 clicked');  // Debugging line
  sendEmail('https://ibb.co/B4Ng8JJ', 'Image 1', 'template_lq8dvg6');
});

// Button 2 click event for sending Image 2
document.getElementById('button2').addEventListener('click', function() {
  console.log('Button 2 clicked');  // Debugging line
  sendEmail('https://ibb.co/8KhB3gb', 'Image 2', 'template_ef182zq');
});



function sendEmail() {
  // Example using EmailJS to send an email (replace with your actual service and template IDs)
  emailjs.sendForm('your_service_id', 'your_template_id', '#your_form')
    .then((response) => {
      alert("Your email has been sent successfully!");
    })
    .catch((error) => {
      const errorMsg = error.text || 'An unknown error occurred'; // Default error message

      // Display the general error message from the API
      alert(`Email failed to send. Error: ${errorMsg}`);
      
      // Check for specific errors based on the error text or code returned
      if (errorMsg.includes("INVALID_EMAIL")) {
        alert("The email address provided is invalid. Please check the email format.");
      } else if (errorMsg.includes("TIMEOUT")) {
        alert("The email server took too long to respond. Please try again later.");
      } else if (errorMsg.includes("SMTP")) {
        alert("There was an issue with the email server configuration. Please check SMTP settings.");
      } else if (errorMsg.includes("NETWORK")) {
        alert("There was a network error while sending the email. Please check your connection.");
      } else if (errorMsg.includes("UNKNOWN")) {
        alert("An unknown error occurred while sending the email. Please try again later.");
      } else {
        // Generic error if no specific condition is met
        alert(`Unexpected error: ${errorMsg}`);
      }
    });
}

