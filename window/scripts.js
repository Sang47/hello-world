$(document).ready(function() { // вся магия после загрузки страницы
	$('.change').click( function(event){ // ловим клик по ссылки с id="go"
		var position = $(this).offset();
		event.preventDefault(); // выключаем стандартную роль элемента
		$('#overlay').fadeIn(400, // сначала плавно показываем темную подложку
		 	function(){ // после выполнения предъидущей анимации
				$('#modal_form') 
					.css({'display': 'block', 'position' : 'absolute', 'top' : position['top'], 'left' : position['left'] + 250}) // убираем у модального окна display: none;
					.animate({opacity: 1, top: position['top'] + 125}, 200); // плавно прибавляем прозрачность одновременно со съезжанием вниз
		});
	});
	/* Закрытие модального окна, тут делаем то же самое но в обратном порядке */
	$('#modal_close, #overlay').click( function(){ // ловим клик по крестику или подложке
		$('#modal_form')
			.animate({opacity: 0, top: '45%'}, 200,  // плавно меняем прозрачность на 0 и одновременно двигаем окно вверх
				function(){ // после анимации
					$(this).css({'display': 'none'}); // делаем ему display: none;
					$('#overlay').fadeOut(400); // скрываем подложку
				}
			);
	});
});