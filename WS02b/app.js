//EX 1
// const axios = require('axios');
// const api = "https://pokeapi.co/api/v2/pokemon/charizard";

// axios.get(api)
//     .then(function(response){
//         console.log(response.data.forms)
//     })
//     .catch(function (error){
//         console.log(error);
//     })
//     .finally(function(){

//     });

// EX 4
const fs = require('node:fs');

// fs.readFile('text_files/example.txt', 'utf8', (err, data) => {
//     if (err) {
//         console.error(err);
//         return;
//     } else {
//         console.log(data.toString());
//     }
// });

// try {
//     const data = fs.readFileSync('text_files/example.txt', 'utf-8');
//     console.log(data);
// } catch (err) {
//     console.error(err);
// }

// EX 5
const content = "Some new text for the example file";
// fs.writeFile('text_files/output.txt', content, (err) => {
//     if (err){
//         console.error(err);
//     } else {
//         console.log('File written successfully!');
//     }
// });

// try {
//     fs.writeFileSync('text_files/output.txt', content);
//     console.log("Text written succesfully!");
// } catch (err) {
//     console.error(err);
// };

// const append_text = "\nAppended text to test out the script";
// fs.appendFile('text_files/output.txt', append_text, err => {
//     if(err) {
//         console.error(err);
//     } else{
//         console.log('Text appended succesfully!');
//     }
// });

// EX6
// temp_folder = 'text_files/temp.txt';
// fs.unlink(temp_folder, (err) =>{
//     if (err){
//         console.log(err);
//     } else{
//         console.log(`File: ${temp_folder} has been deleted`);
//     }
// });

//EX7
// Näin tämän funktion GeeksforGeeks sivustolla ja ajattelin, että tällä olisi ihan hyvä näyttää aina käyttäjälle mitä tiedostoja kansiosta löytyy

function showFilesInDirectory() {
    console.log('\nCurrently present files:');
    let files = fs.readdirSync(__dirname);
    files.forEach(file => {
        console.log(file);
    });
}

// showFilesInDirectory();

// const newFolder = 'testDir';
// try {
//     if(!fs.existsSync(newFolder)) {
//         fs.mkdirSync(newFolder);
//     }
// } catch (err) {
//     console.error(err);
// }

// fs.mkdir(newFolder, (err) =>{
//     if (err) {
//         console.error(err);
//     }else{
//         console.log(`File ${newFolder} has been created!`);
//     }
// });

// if (!fs.existsSync(newFolder)){
//     fs.mkdir(newFolder, (err) =>{
//         if (err) {
//             console.error(err);
//         }else{
//             console.log(`File ${newFolder} has been created!`);
//         }
//     });    
// } else {
//     console.log(`Folder ${newFolder} ALREADY EXISTS.`);
// }

// fs.rmdir(newFolder, (err) =>{
//     if (err) {
//         console.error(err);
//     }else{
//         console.log(`File ${newFolder} has been removed!`);
//     }
// });

// showFilesInDirectory();

//EX8
// fs.watch('text_files/watch.txt', (options)=>{
//     console.log(`Event type: ${options}`);
// });

fs.watch('text_files/watch.txt', (eventType, filename) =>{
    if(filename){
        console.log(`Event type: ${eventType} on file: ${filename}`);
    }
});
