<!doctype html>
<html>
<?php
include './htm/authorship.txt';
?>
<head>
<meta charset="utf-8">
<title>House Manager dashboard Page</title>
	<link rel="stylesheet" type="text/css" href="./common/styles.css" />
	<script src="./common/images.js" type="text/javascript"> </script>
	<script src="./common/putForm.js" type="text/javascript"> </script>
	<script src="./common/login.js" type="text/javascript"> </script>
	<script src="./common/validation.js" type="text/javascript"> </script>
	<script src="./common/datahandling.js" type="text/javascript"> </script>
	<script src="./common/taskHandling.js" type="text/javascript"> </script>
</head>

<body onload="logo();">
	<img src-"#" id="logo" alt="logo" title="logo" />

	<h1>House Manager Login Page</h1>

	<p>Welcome <span id="name"></span>, to the household management project. You can add tasks and mark them as completed.</p>
<form name="dashboardTaskControl">
<button type="button" id="dashboardTaskControl1" onclick="onClickLogin();">Login</button>
<button type="button" id="dashboardTaskControl2" onclick="onClickRegister();">Register</button>
<button type="button" id="dashboardTaskControl3" onclick="onClickRegisterOrg();">New Organization</button>
</form>
<div id="target">
</div>
	</body>
</html>
