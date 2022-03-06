<?php
 $host =  "localhost";
 $user =  "root";
 $pass="";
 $database = "db1";
$connection =mysqli_connect($host,$user,$pass,$database);
if ($connection){
   echo "Succesfully connected";
}else
{ die ("could not connect");
}
$name =$_POST["name"];
$email =$_POST['email'];
$phone =$_POST['phone'];
$sql="INSERT INTO contact(name,email,phone)VALUES('$name','$email','$phone')";
if (mysqli_query($connection,$sql))
{
echo nl2br ("\n Record inserted");
}else { echo "Record not inserted";
}
mysqli_close($connection);
?>
