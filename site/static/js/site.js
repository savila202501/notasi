
function query_view(id, value){
	selected = $(id + " option:selected").data(value)
	if (selected == undefined) {
		selected="none"
	}

	selected_field = fields.find(x => x.type === selected).fields
	$.each(selected_field, function(index, field){
		$("#"+field.id).parent()[field.display]();
		$("#"+field.id).attr("placeholder", field.placeholder)
		$("label[for='" +field.id+"']").text(field.label)
	});
}