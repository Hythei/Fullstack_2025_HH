function currentDate(){
    let date = new Date();
    return date;
}

function dateFormat(date, format){
    switch(format){
        case 'short':
            // MM/DD/YYYY
            return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
        
        case 'long':
            const months = ['January', 'February', 'March', 'April', 'May', 'June', 
            'July', 'August', 'September', 'October', 'November', 'December'];
            return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;

    }

}

module.exports = {currentDate, dateFormat};