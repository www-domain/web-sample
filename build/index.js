var $k4wjR$express = require("express");
var $k4wjR$path = require("path");

var $4fa36e821943b400$var$__dirname = "src";


const $4fa36e821943b400$var$app = $k4wjR$express();
const $4fa36e821943b400$var$port = 3000;
// Serve static files from the 'public' directory
$4fa36e821943b400$var$app.use($k4wjR$express.static($k4wjR$path.join($4fa36e821943b400$var$__dirname, '../public')));
// Serve the index.html file
$4fa36e821943b400$var$app.get('/', (req, res)=>{
    res.sendFile($k4wjR$path.join($4fa36e821943b400$var$__dirname, 'index.html'));
});
$4fa36e821943b400$var$app.listen($4fa36e821943b400$var$port, ()=>{
    console.log(`Server is running on http://localhost:${$4fa36e821943b400$var$port}`);
});


//# sourceMappingURL=index.js.map
