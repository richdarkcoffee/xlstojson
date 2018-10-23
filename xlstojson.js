const fs = require('fs');   
const path = require('path');
const XLSX = require('xlsx');

// alasql(['SELECT * FROM XLS("./demoprojectdata.xlsx")'])
//       .then(function(res){
//         //    console.log(res); // output depends on mydata.xls
//       }).catch(function(err){
//            console.log('Does the file exist? There was an error:', err);
//       });

// console.log(JSON.stringify(res));

// fs.writeFileSync('demoprojectdata.xlsx'+'.json', JSON.stringify(res));

var workbook = XLSX.readFile("./demoprojectdata.xlsx");

var firstsheetname = workbook.SheetNames[0];

var worksheet = workbook.Sheets[firstsheetname];

fs.writeFileSync('demoprojectdata.xlsx'+'sheetjs'+'.json', JSON.stringify(XLSX.utils.sheet_to_json(worksheet)));