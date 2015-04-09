<!DOCTYPE html>
<meta charset="utf-8">

<head>
  <link href="style.css" rel="stylesheet">
  <script src="jquery-1.11.2.min.js"></script>
  <script src="scripts.js"></script> 
</head>

<title>
	Модальное окно
</title>

<body>
	<div class='center'>	
		<?for($i = 0; $i < 25; $i++):?>
			<div id="change<?=$i?>" class="change" href=''>Изменить <?=$i?></div>
		<?endfor;?>		
	</div>

	
	<div id="modal_form"><!-- Само окно --> 
      <span id="modal_close">X</span> <!-- Кнопка закрыть --> 
      <!-- Тут любое содержимое -->
	</div>
	<div id="overlay"></div><!-- Подложка -->
</body>