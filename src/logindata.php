<?php
// login data details
include "config.php";
if(isset($_POST)){
    $email=$_POST['email'];
    $pass=$_POST['pass'];
}
$sql= "SELECT * FROM `users` WHERE `email` = '$email' AND `password` = '$pass'";
    $sql_stmt = mysqli_query($connection,$sql);
    $num = mysqli_num_rows($sql_stmt);
    if($num>0){
        $r=mysqli_fetch_assoc($sql_stmt);
        echo " <tr><th>ID</th><th>NAME</th><th>EMAIL</th></tr>";
        while($r=mysqli_fetch_assoc($sql_stmt)){   
     echo "id:" ."<tr><td>".$r["id"]. "</td>"."name:"."<td>".$r["name"]."</td>". "email"."<td>".$r["email"]."</td></tr>";
        }}    
    
?>