// Copyright (c) 2019, frappe and contributors
// For license information, please see license.txt

frappe.ui.form.on('Registration', {
	
    setup:function(frm) {
    	console.log("Setup called")
    },

	refresh:function(frm) {

		console.log("Refresh called")

	},
	onload:function(frm) {
		console.log("onload called")
	}

});
