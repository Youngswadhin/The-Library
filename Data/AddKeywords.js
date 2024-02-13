var fs = require('fs');

fs.readFile('Books.json', async (err, data) => {
    data = await JSON.parse(data.toString());
    var size = data.length;
    
    var jsonData = "";
    
    jsonData+="[";
    data.forEach((key) => {
        size--;
        jsonData+=`{"${key.keywords}":${key.id}}${size===0?"":","}`;
    })
    jsonData+="]";
    
    console.log(jsonData);

    fs.writeFile('MapBook.json', jsonData, (err)=>console.log(err));
});
