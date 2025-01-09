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
     // Subject (Image name)
    message: 'open the link or image:',
    subject: subject, // Message content
    image_url: imageUrl, // Image URL to be included in the email
  };

  emailjs.send('service_v0waneb', templateId, templateParams)
    .then(function(response) {
      console.log('Success', response);
      alert('Email sent successfully!');
    }, function(error) {
      console.log('Error', error);
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




