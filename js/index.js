function selectAll(){
        $("input[type='checkbox']").each( function() {
            if($(this).prop("checked")==true) {

                $(this).parent().parent().parent().find("input[type='checkbox']").prop('checked', true);
                return;
            } else {
                $(this).parent().parent().parent().find("input[type='checkbox']").prop('checked', false);
                return;
            }
        });
    }
function selectTolAll(){
        $("input[type='checkbox']").each( function() {
            if($(this).prop("checked")==true) {
                
                $(this).parent().parent().parent().parent().find("input[type='checkbox']").prop('checked', true);
                return;
            } else {
                $(this).parent().parent().parent().parent().find("input[type='checkbox']").prop('checked', false);
                return;
            }
        });
}
$(function(){
	$('.m-header .nh-bj').click(function(event) {
		/* Act on the event */
		$(this).hide();
		$('.m-header .nh-wc').show();
		$('.all-price .end-price .epc-all').hide();
        $('.all-price .end-price .epc-btn').hide();
		$('.all-price .end-price .cep-cal').show();
	});

	$('.m-header .nh-wc').click(function(event) {
		/* Act on the event */
		$(this).hide();
		$('.m-header .nh-bj').show();
        $('.all-price .end-price .epc-all').show();
        $('.all-price .end-price .epc-btn').show();
        $('.all-price .end-price .cep-cal').hide();
	});
});
