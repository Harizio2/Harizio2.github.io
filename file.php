<?php 
if ($_FILES["file"]["error"] > 0)
   {
   echo "Error: " . $_FILES["file"]["error"] . "<br />";   
   } 
   else   
   {   
   echo "Upload: " . $_FILES["file"]["name"] . " successful<br />";   echo "Stored in: " . $_FILES["file"]["tmp_name"];   
   }
?>