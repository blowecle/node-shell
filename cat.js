module.exports = (text) => {
    const fs = require('fs');
    fs.readFile('./', 'utf8', (err, data) =>{
        if(err){
            console.error(err);
            return;
        }
        console.log(data);
        console.log('\nprompt > ')
    })
}