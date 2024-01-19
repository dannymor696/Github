// Validate full name format
function validateFullName() {
  var fullName = document.getElementById("fullName").value;
  var fullNameRegex = /^[A-Za-z ]+$/;
  return fullNameRegex.test(fullName);
}

// Validate registration number format
function validateRegistrationNumber() {
  var registrationNumber = document.getElementById("registrationNumber").value;
  var registrationNumberRegex = /^BCS-\d{2}-\d{4}-\d{4}$/;
  return registrationNumberRegex.test(registrationNumber);
}

// Validate email format
function validateEmail() {
  var email = document.getElementById("email").value;
  var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return emailRegex.test(email);
}

// Dynamically load options for regions and districts using Ajax
$(document).ready(function() {
  // code to fetch regions and load them into the region dropdown
  
  // code to fetch districts based on selected region and load them into the district dropdown
});

// Validate password format and confirmation
function validatePassword() {
  var password = document.getElementById("password").value;
  var confirmPassword = document.getElementById("confirmPassword").value;

  // code to implement password validation criteria

  return password === confirmPassword;
}

// jQuery code to enhance the user interface
$(document).ready(function() {
  // code to implement carousel or image slider using jQuery
  
  // code to enhance navigation menu with smooth scrolling effects or dropdown menus
  
  // code to incorporate jQuery into event handling and DOM manipulation
});

// Form validation and submission
$(document).ready(function() {
  $("#registrationForm").submit(function(event) {
    event.preventDefault();

    if (!validateFullName()) {
      // code to display an error message for full name validation
      return;
    }

    if (!validateRegistrationNumber()) {
      // code to display an error message for registration number validation
      return;
    }

    // code to validate sex, email, region, district, and password

    if (!validatePassword()) {
      // code to display an error message for password validation
      return;
    }

    // code to submit the form data
  });
});
$(document).ready(function() {
  // Apply animations/transitions on button click
  $('#btnAnimate').on('click', function() {
    // Selection animation on the box element
    $('#box').animate({
      width: '500px',
      height: '500px',
      backgroundColor: 'blue'
    }, 1000); // 1000 ms (1 second) duration

    // Fade in/out animation on paragraphs
    $('p').fadeIn(2000).fadeOut(2000);
  });

  // Simplifying code with event handling
  $('#btnHide').on('click', function() {
    $('p').hide(1000);
  });

  $('#btnShow').on('click', function() {
    $('p').show(1000);
  });

  // Simplifying code with DOM manipulation
  $('#btnAppend').on('click', function() {
    $('body').append('<p>New paragraph</p>');
  });

  $('#btnEmpty').on('click', function() {
    $('#container').empty();
  });
});
