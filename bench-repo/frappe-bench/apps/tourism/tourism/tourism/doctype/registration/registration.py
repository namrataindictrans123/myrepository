# -*- coding: utf-8 -*-
# Copyright (c) 2019, frappe and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe
from frappe.model.document import Document

class Registration(Document):

	def on_submit(self):
		frappe.sendmail(recipients=self.email,subject="Regarding registration.....")
	def before_insert(self):

		frappe.msgprint("Before insert called")

	def after_insert(self):
		frappe.msgprint("Record inserted successgully")

	def on_update(self):
		frappe.msgprint("onupdate called")

	def on_cancel(self):
		frappe.sendmail(recipients=self.email)
        frappe.msgprint("Registration cancelled")
        

	def register(self,email):

		frappe.msgprint("Registered successfully")
        