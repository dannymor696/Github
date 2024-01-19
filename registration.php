<?php
// Process the form data received from Ajax

// Get form data
$fullName = $_POST['fullName'];
$regNumber = $_POST['regNumber'];
$sex = $_POST['sex'];
$email = $_POST['email'];
$region = $_POST['region'];
$district = $_POST['district'];
$password = $_POST['password'];
$confirmPassword = $_POST['confirmPassword'];

// Add your registration logic here

// Return a response to the client
$response = "Registration successful";
echo $response;
?>
<?php
// Connect to your database or include required files to fetch the regions

// Example response data (replace with your own data retrieval logic)
$regions = array(
  array('id' => 1, 'name' => 'Arusha'),
  array('id' => 2, 'name' => 'Dar es Salaam'),
  array('id' => 3, 'name' => 'Dodoma'),
  // Add more regions as needed
);

// Return the regions as JSON
header('Content-Type: application/json');
echo json_encode($regions);
?>
<?php
// Connect to your database or include required files to fetch the districts

// Example response data (replace with your own data retrieval logic)
$regionId = $_GET['regionId']; // Get the selected region ID
$districts = array();

if ($regionId == 1) {
  // Fetch districts of Arusha
  $districts = array(
    array('id' => 1, 'name' => 'Arusha District'),
    array('id' => 2, 'name' => 'Arumeru District'),
    array('id' => 3, 'name' => 'Babati Rural District'),
    // Add more districts as needed
  );
} elseif ($regionId == 2) {
  // Fetch districts of Dar es Salaam
  $districts = array(
    array('id' => 4, 'name' => 'Ilala District'),
    array('id' => 5, 'name' => 'Kinondoni District'),
    array('id' => 6, 'name' => 'Temeke District'),
    // Add more districts as needed
  );
}
// Add more conditions for other regions

// Return the districts as JSON
header('Content-Type: application/json');
echo json_encode($districts);
?>
