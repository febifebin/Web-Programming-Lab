<?php
$a = $_POST['t1'];
$b = $_POST['t2'];
if (isset($_POST['add']))
{
$c = $a + $b;
print $a . "+" . $b . "=" . $c;
}
if (isset($_POST['sub']))
{
$c = $a - $b;
print $a . "-" . $b . "=" . $c;
}
if (isset($_POST['mul']))
{
$c = $a * $b;
print $a . "*" . $b . "=" . $c;
}
if (isset($_POST['div']))
{
$c = $a / $b;
print $a . "/" . $b . "=" . $c;
}
?>