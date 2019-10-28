
fields = [{
	"type": "Folder",
	"fields": [{
		"id": "notasi_query",
		"display": "hide"
	}, {
		"id": "endpoint",
		"display": "show",
		"label": "File",
		"placeholder": "File"
	}, {
		"id": "request_method_id",
		"display": "hide"
	}, {
		"id": "request_method_id",
		"display": "hide"
	}, {
		"id": "head",
		"display": "hide"
	}, {
		"id": "request_body",
		"display": "hide"
	}]
}, {
	"type": "none",
	"fields": [{
		"id": "notasi_query",
		"display": "hide"
	}, {
		"id": "endpoint",
		"display": "hide"
	}, {
		"id": "request_method_id",
		"display": "hide"
	}, {
		"id": "request_method_id",
		"display": "hide"
	}, {
		"id": "head",
		"display": "hide"
	}, {
		"id": "request_body",
		"display": "hide"
	}]
}, {
	"type": "SQL",
	"fields": [{
		"id": "notasi_query",
		"display": "show"
	}, {
		"id": "endpoint",
		"display": "hide"
	}, {
		"id": "request_method_id",
		"display": "hide"
	}, {
		"id": "head",
		"display": "hide"
	}, {
		"id": "request_body",
		"display": "show",
		"label": "Query",
		"placeholder": "SQL Query"
	}]
}, {
	"type": "HTTP",
	"fields": [{
		"id": "notasi_query",
		"display": "show"
	}, {
		"id": "endpoint",
		"display": "show",
		"label": "Endpoint",
		"placeholder": "Endpoint"
	}, {
		"id": "request_method_id",
		"display": "show"
	}, {
		"id": "head",
		"display": "show",
		"label": "Header",
		"placeholder": "Use {notasi_col} to access variables"
	}, {
		"id": "request_body",
		"display": "show",
		"label": "Body",
		"placeholder": "Use {notasi_col} to access variables"
	}]
}, {
	"type": "LDAP",
	"fields": [{
		"id": "notasi_query",
		"display": "show"
	}, {
		"id": "endpoint",
		"display": "hide"
	}, {
		"id": "request_method_id",
		"display": "hide"
	}, {
		"id": "head",
		"display": "hide"
	}, {
		"id": "request_body",
		"display": "show",
		"label": "LDAP Query",
		"placeholder": "Use {notasi_col} to access variables"
	}]
}, {
	"type": "Notasi Users",
	"fields": [{
		"id": "notasi_query",
		"display": "show"
	}, {
		"id": "endpoint",
		"display": "hide"
	}, {
		"id": "request_method_id",
		"display": "hide"
	}, {
		"id": "head",
		"display": "hide"
	}, {
		"id": "request_body",
		"display": "hide"
	}]
}, {
	"type": "Notasi Groups",
	"fields": [{
		"id": "notasi_query",
		"display": "show"
	}, {
		"id": "endpoint",
		"display": "hide"
	}, {
		"id": "request_method_id",
		"display": "hide"
	}, {
		"id": "head",
		"display": "hide"
	}, {
		"id": "request_body",
		"display": "hide"
	}]
}]

query_view("#location_id", "location_type");
$('#location_id').change(function(){
	query_view("#location_id", "location_type");
});

