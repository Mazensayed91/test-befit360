const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const csv = require('csv-parser');
const fs = require('fs');

// csvWriter to initiate a csv file with only one record that will be used in testing
const csvWriter = createCsvWriter({
    path: 'create_account_data.csv',
    header: [
        {id: 'name', title: 'Name'},
        {id: 'email', title: 'Email'},
        {id: 'password', title: 'Password'},
        {id: 'gender', title: 'Gender'},
        {id: 'address', title: 'Address'},
        {id: 'phone', title: 'Phone'},
        {id: 'birth', title: 'Birth'},

    ]
});

csvWriter
    .writeRecords([
        {name: 'Mazen', email: 'testest@gmail.com', password: 'TestO@212#_q', gender: '1', address: '31 December 2006', phone: '+201212346109', birth: 'Cairo'}
        ]
    )
    .then(()=> console.log('The CSV file was written successfully'));


// this function to read the csv file.
module.exports.readCsv = (file) => {
    let data = [
    ];

    fs.createReadStream(file)
        .pipe(csv())
        .on('data', (row) => {
            data.push(row)
        })
        .on('end', () => {
            console.log(data);
            return data;
        });
}


