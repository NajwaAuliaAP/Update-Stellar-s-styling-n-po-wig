document.getElementById('transactionForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const product = document.getElementById('product').value;

    // Simpan data ke localStorage
    localStorage.setItem('invoiceName', name);
    localStorage.setItem('invoiceEmail', email);
    localStorage.setItem('invoiceProduct', product);
    
    // Arahkan ke halaman invoice
    window.location.href = 'invoice.html';
});
