<?php
session_start();

?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="../form.php" id="first_task" name="main_page">
        <div>
            <label>
              Your name*:
              <br><input type="text" pattern="^[a-zA-Z]+$" id="name" maxlength="15" value="" name="name" required>
            </label>
          </div>
          <div>
            <label>
             <br> Sex*:<br>
                <p><input name="sex" type="radio" value="Man"> Man</p>
                <p><input name="sex" type="radio" value="Woman"> Woman</p>
            </label>
          </div>


          <div id="result">
            <label>
                Your maiden name
                <br><input type="text" pattern="^[a-zA-Z]+$" id="maiden_name" maxlength="30" value="" name="maiden_name" required>
            </label>
          </div>
          <div>
          <button type="submit" class="btn_primary" name="send">Перезвонить мне</button>
            <!-- <br><button class="button_first" type="submit">Submit</button> -->
          </div>
    </form>
</body>
</html>