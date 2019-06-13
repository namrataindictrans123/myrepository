// Copyright (c) 2019, frappe and contributors
// For license information, please see license.txt

frappe.ui.form.on('Registration_form', {
	setup:function(frm) {
		console.log("Setup called");
	},
	refresh:function(frm) {
		console.log("REfresh called");

	},
	onload:function(frm) {
		console.log("Onload called");

	},
	after_save:function(frm) {
		console.log("After save called");
	}
});
