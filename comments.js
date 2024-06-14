// Create web server
// Load modules
var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// Define functions to handle requests
function getComments() {
    var comments = [];
    if (fs.existsSync('comments.json')) {
        var comments = fs.readFileSync('comments.json', 'utf8');
        comments = JSON.parse(comments);
    }
    return comments;
}
function saveComments(comments) {
    fs.writeFileSync('comments.json', JSON.stringify(comments));
}
app.get('/comments', function (req, res) {
    res.send(getComments());
});
app.post('/comments', function (req, res) {
    var comments = getComments();
    comments.push(req.body);
    saveComments(comments);
    res.send(comments);
});
// Start the server
app.listen(3000, function () {
    console.log('Server is listening on port 3000');
});