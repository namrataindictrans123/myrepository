// Copyright (c) 2019, frappe and contributors
// For license information, please see license.txt

frappe.ui.form.on('Registration',{

	setup:function(frm) {
		//show_alert("Setup called");
		console.log("setup called");	
	},

	refresh:function(frm) {
		//show_alert("Refresh called");
		console.log("Refresh called")
	},

	onload:function(frm) {
		//show_alert("Onload called");
		console.log("Form loaded successfully")
	},

	before_save:function(frm) {
		console.log("Before save called")
	},

	after_save:function(frm) {
		show_alert("Form saved successfully")
		console.log("Form saved successfully")
	},

	email:function(frm) {

		var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
		console.log(reg.test(frm.doc.email));
		if (reg.test(frm.doc.email) == false){
			frappe.throw('Invalid Email Address');
		}
	},

    mobile:function(frm) {

       var phoneno = /^\d{10}$/;
       console.log(phoneno.test(frm.doc.mobile));
       if (phoneno.test(frm.doc.mobile) == false){
       	   frappe.throw('Invalid mobile number,should be 10 digits long');
       	   console.log("Invalid number");
       }
   },
    pin:function(frm) {
    	var pincode= /^\d{6}$/;
    	console.log(pincode.test(frm.doc.pin));
    	if (pincode.test(frm.doc.pin) == false) {
    		frappe.throw('Invalid pin');
    		console.log("Invalid pin");
    	}
    },
    password:function(frm) {
    	var pass2= /^[a-zA-Z]\w{3,14}$/;
    	console.log(pass2.test(frm.doc.password));
    	if(pass2.test(frm.doc.password) == false) {
    		frappe.throw('Please provide strong password');
    	}
    },
    password2:function(frm) {
    	var pass3= frm.doc.password;
    	console.log(pass3.match(frm.doc.password2));
    	if(pass3.match(frm.doc.password2) == null) {
    		frappe.throw("Password does not matches");
    	}
    },
   
});


	
	
