$('ul').on('click','li', function(){
	$(this).toggleClass('checkOff');
});

$('ul').on('click', 'span', function(event){

	$(this).parent().fadeOut(1000, function(){
		$(this).remove();
	});
	event.stopPropagation();
});

$('input[type= text]').keypress(function(event){
	if (event.which === 13){
		var todoText = $(this).val();
		$(this).val('');
		$('ul').append('<li><span><i class="fa fa-trash"></i></span> '+ todoText +'</li>')
	}
});

$('.fa-plus').on('click', function(){
	$('input').fadeToggle();
})