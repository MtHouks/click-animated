$('#arrow_id').hide();
$('#arrow_id2').hide();
$('#arrow_id3').hide();
$('.wrapper').click(function(event) {
	$('#arrow_id').show('fade');
	$('#arrow_id2').show('fade');
	$('#arrow_id3').show('fade');
	$('#arrow_id').addClass('GoUpBig');
	$('#arrow_id2').addClass('GoUpMedium');
	$('#arrow_id3').addClass('GoUpSmall');
});

