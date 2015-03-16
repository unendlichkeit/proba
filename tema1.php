<!DOCTYPE html>
<form action="tema1.php" method="POST">
Numar 1: <input type="text" name="n1"><br/>
Numar 2: <input type="text" name="n2"><br/>
Operatie: <select name="operator">
	<option value="+">+</option>
	<option value="-">-</option>
	<option value="*">*</option>
	<option value="/">/</option>
	<option value="rest">rest</option>
		</select><br/>
<input type="submit" value="submit"><br/>
</form>

<?php
$n1=$_POST['n1'];
$n2=$_POST['n2'];
$operator=$_POST['operator'];

if($operator=="+") echo $n1+$n2." +<br/>"; 
if($operator=="-") 
	{
	if($n1>=$n2) echo $n1-$n2." -<br/>";
	else echo $n2-$n1." -<br/>";
	}
if($operator=="*") echo $n1*$n2." *<br/>";
if($operator=="/"&&($n1/$n2==0)) echo $n1/$n2." /<br/>";
if($operator="rest") echo $n1%$n2." %<br/>";
?>

 