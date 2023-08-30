// import app file
const { log } = require("console");
const app = require("./backend/app");
// macke server listening on PORT 3000: http://localhost:3000

app.listen(3000, () =>{
console.log(" BE Server is listening pn PORT 3000 ...");
});

