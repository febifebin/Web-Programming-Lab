   
    <!DOCTYPE html>  
    <html>  
    <head>  
        <meta charset="utf-8">  
        <title>String</title>  
    </head>  
    <body>  
        <h1>Strings </h1>  
        <script type="text/javascript">  
        var str = "The quick brown fox jumps over the lazy dog.";
        var str1 ="Hello"; //literal   
        var str2 ="Welcome"  
       //Concatenete to strings
 //document.write(Concatenation);
        document.write(str1+str2); 
         document.write("<br>");
       document.write(str.substring(4, 15) + "<br>"); // Prints: quick brown
       document.write(str.substring(9, 0) + "<br>"); // Prints: The quick
       document.write(str.substring(-28, -19) + "<br>"); // Prints nothing
       document.write(str.substring(31)); // Prints: the lazy dog.


      //To uppercase
 document.write("<br>");
var result = str.toUpperCase();
document.write(result);
 document.write("<br>");

//To lowercase
var result = str.toLowerCase();
document.write(result);
document.write("<br>");

//Accessing single character from a string
document.write(str.charAt());  // Prints: T
document.write("<br>");
document.write(str.charAt(6)); // Prints: i
document.write("<br>");
//Position of string
    var pos<!DOCTYPE html>

<head>
	<title>Calculate Electricity Bill</title>
</head>

<?php
$result_str = $result = '';
if (isset($_POST['unit-submit'])) {
    $units = $_POST['units'];
    if (!empty($units)) {
        $result = calculate_bill($units);
        $result_str = 'Total amount of ' . $units . ' - ' . $result;
    }
}
/**
 * To calculate electricity bill as per unit cost
 */
function calculate_bill($units) {
    $unit_cost_first = 3.50;
    $unit_cost_second = 4.00;
    $unit_cost_third = 5.20;
    $unit_cost_fourth = 6.50;

    if($units <= 50) {
        $bill = $units * $unit_cost_first;
    }
    else if($units > 50 && $units <= 100) {
        $temp = 50 * $unit_cost_first;
        $remaining_units = $units - 50;
        $bill = $temp + ($remaining_units * $unit_cost_second);
    }
    else if($units > 100 && $units <= 200) {
        $temp = (50 * 3.5) + (100 * $unit_cost_second);
        $remaining_units = $units - 150;
        $bill = $temp + ($remaining_units * $unit_cost_third);
    }
    else {
        $temp = (50 * 3.5) + (100 * $unit_cost_second) + (100 * $unit_cost_third);
        $remaining_units = $units - 250;
        $bill = $temp + ($remaining_units * $unit_cost_fourth);
    }
    return number_format((float)$bill, 2, '.', '');
}

?>

<body>
	<div id="page-wrap">
		<h1> Calculate Electricity Bill</h1>

		<form action="" method="post" id="quiz-form">
            	<input type="number" name="units" id="units" placeholder="Please enter no. of Units" />
            	<input type="submit" name="unit-submit" id="unit-submit" value="Submit" />
		</form>

		<div>
		    <?php echo '<br />' . $result_str; ?>
		</div>
	</div>
</body>
</html> = str.indexOf("fox");
    document.write(pos); // 0utputs: 16
        </script>  
    </body>  
    </html>  