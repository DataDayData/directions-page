

<?php




  // Create connection
  $connection = new mysqli("localhost:3306", "root", "", "directions");

// Check connection
if ($connection->connect_error) {
    die("Connection failed: " . $connection->connect_error);
}
$buttonName= $_POST["buttonName"];

// Retrieve the button name from the POST request and send it to the server
if (!$_POST["buttonName"]) {
    die("Button name not provided");
}

// Store the button name in the database
$sql = "INSERT INTO directionstable (theLastMove) VALUES ('$buttonName')";
$result = mysqli_query($connection, $sql);


mysqli_close($connection);
?>

