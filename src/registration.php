<?php
include "config.php";
// registration details
if(isset($_POST)){
    $name=$_POST['name'];
    $email=$_POST['email'];
    $pass=$_POST['pass'];   
}
    $data ="INSERT INTO `users` VALUES (NULL,'$name','$email','$pass')";
    $result=mysqli_query($connection,$data);




?>