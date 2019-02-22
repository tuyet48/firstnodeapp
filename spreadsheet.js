var GoogleSpreadsheet = require('google-spreadsheet');

var creds = require('./client_secret.json'); 

// Create a document object using the ID of the spreadsheet - obtained from its URL.

var doc = new GoogleSpreadsheet('1G_PstQu129E5IhJnNgEWGYZTbSDqjxhp-zXBQ7kB9gs'); 

// Authenticate with the Google Spreadsheets API.

doc.useServiceAccountAuth(creds, function (err) { 

  // Get all of the rows from the spreadsheet.

  doc.getRows(1, function (err, rows) {
    console.log(rows);
    console.log(rows.length);    
    rows[5].del();
  }); 

  doc.addRow(1, {date: '6', item: 'sing' }, function(err) {
    if(err) {  
      console.log(err);  
    }  
  });      


});