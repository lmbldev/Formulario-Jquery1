var atual_fs, next_fs, prev_fs, values, advance;
$(function(){

	$('.next').click(function(){
		advance = false;
		atual_fs = $(this).parent();
		next_fs = $(this).parent().next();
		setValues();

		if (!!advance){

			$('#progress li').eq($('fieldset').index(next_fs)).addClass('ativo');
			atual_fs.hide(800);
			next_fs.show(800);
		}
	});

	$('.prev').click(function(){
		advance = true;
		atual_fs = $(this).parent();
		prev_fs = $(this).parent().prev();
		setValues();

		$('#progress li').eq($('fieldset').index(atual_fs)).removeClass('ativo');
		atual_fs.hide(800);
		prev_fs.show(800);
	});

	$('#formulario input[type=submit]').click(function(){
		return false;
	});
});

function setValues() {
	if ($(atual_fs).attr('id')=='f1'){
		if (!advance){
			if (!!$('input[name="email"]').val() && !!$('input[name="senha"]').val() && ($('input[name="senha"]').val() == $('input[name="csenha"]').val())){
				values = {
					...values,
					email: $('input[name="email"]').val(),
					senha: $('input[name="senha"]').val()
				}
				advance = true;	
			}
			else 
				alert("Necessário preencher todos os campos. Campos de senha devem ser iguais.");
		}
	}
	else if ($(atual_fs).attr('id')=='f2'){
		if (!advance){
			if (!!$('input[name="facebook"]').val() && !!$('input[name="twitter"]').val() && !!$('input[name="google"]').val()){
				values = {
					...values,
					facebook: $('input[name="facebook"]').val(),
					twitter: $('input[name="twitter"]').val(),
					google: $('input[name="google"]').val()
				}
				advance = true;
			}
			else 
				alert("Necessário preencher todos os campos.");
		}
		
	}

	else if ($(atual_fs).attr('id')=='f3'){
		if (!advance){
			if (!!$('input[name="primeiro"]').val() && !!$('input[name="segundo"]').val() && !!$('input[name="telefone"]').val()){
				values = {
					...values,
					primeiro: $('input[name="primeiro"]').val(),
					segundo: $('input[name="segundo"]').val(),
					telefone: $('input[name="telefone"]').val()
				}
				advance = true;
				console.log(values);
			}
			else 
				alert("Necessário preencher todos os campos.");
		}
	}
}