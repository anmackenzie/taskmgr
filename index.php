<!doctype html>
<html>
<?php
include './htm/authorship.txt';
?>
<head>
<meta charset="utf-8">
<title>House Manager Login Page</title>
	<link rel="stylesheet" type="text/css" href="./common/styles.css" />
	<script src="./common/putForm.js" type="text/javascript"> </script>
	<script src="./common/login.js" type="text/javascript"> </script>
	<script src="./common/validation.js" type="text/javascript"> </script>
	<script src="./common/datahandling.js" type="text/javascript"> </script>
</head>

<body>
	<h1>House Manager Login Page</h1>

	<p>Welcome to the household management project. If this is your first time using the project, you may need to create a group and some user accounts.</p>
<form name="selectLoginRegister">
<button type="button" onclick="onClickLogin();">Login</button>
<button type="button" onclick="onClickRegister();">Register</button>
<button type="button" onclick="onClickRegisterOrg();">New Organization</button>
</form>
<div id="target">
</div>
	</body>
</html>
