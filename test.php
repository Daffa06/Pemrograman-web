<?php

    $connection = mysqli_connect("localhost:3306", "dapa", "dapa","datadiri");
    $name = $_REQUEST['name'];
    $email = $_REQUEST['email'];
    $address = $_REQUEST['address'];
    $gender = $_REQUEST['gender'];
    $position = $_REQUEST['position'];
    $status = $_REQUEST['status'];

    $sql = "INSERT INTO data_diri  VALUES ('$name','$email','$address','$gender','$position','$status')";

    if(mysqli_query($connection, $sql)){
        echo "<h3>data stored in a database successfully.
        Please browse your localhost php my admin
        to view the updated data</h3>";
        
        echo nl2br("\n$name\n \n$email\n \n$address\n \n$gender\n \n$position\n \n$status\n");
        } else{
        echo "ERROR: Hush! Sorry $sql. "
        . mysqli_error($conn);
        }
?>