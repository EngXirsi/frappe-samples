frappe.new_doc("Journal Entry", {"voucher_type": "Bank Entry"}, doc => {
    doc.posting_date = frappe.datetime.get_today();
    let row = frappe.model.add_child(doc, "accounts");
    row.account = 'Bank - A';
    row.account_currency = 'USD';
    row.debit_in_account_currency = 100.0;
    row.credit_in_account_currency = 0.0;
});
