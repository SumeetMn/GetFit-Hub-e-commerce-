<?php
$username = $_POST['username'];
$email = $_POST['email'];
$password = $_POST['password'];

  //create connection
  $conn = new mysqli('localhost', 'root', '', 'test1');

  if ($conn->mysqli_connect_error) {
    die('Connection Failed : '.$conn->mysqli_connect_error);
  } else {
      $stmt = $conn->prepare("insert into register(username,email,password)
          values(?,?,?)");
      $stmt->bind_param("sss",$username, $email, $password);
      $stmt->execute();
         echo "New record inserted sucessfully";
      $stmt->close();
      $conn->close();
  }
