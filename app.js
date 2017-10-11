const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const sseExpress = require('sse-express');

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/lib', express.static(path.join(__dirname,'node_modules')));
app.use('/js', express.static(path.join(__dirname,'js')));
app.use('/css', express.static(path.join(__dirname,'css')));
app.use('/assets', express.static(path.join(__dirname,'assets')));


app.get('/', function(req, res) {
    res.render('index.ejs');
});

function convert(number) {
    
    if(number <=0)
        return "";
    if(number >=1 && number<4) 
        return "I"+convert(number-1);
    if(number === 4)
        return "IV";
    if(number >=5 && number<9) 
        return "V"+convert(number-5);
    if(number === 9)
        return "IX";    
    if(number >=10 && number<=39) 
        return "X"+convert(number-10);
    if(number >=40 && number<=49)
        return "XL"+convert(number-40); 
    if(number >=50 && number<90) 
        return "L"+convert(number-50);
    if(number >=90 && number<=99)
        return "XC"+convert(number-90);    
    if(number === 100) 
        return "C";

}

let cnvrtd_number = "?";
let number_to_cnvrt = 0;

app.post('/convert', function(req,res){
    number_to_cnvrt = req.body.number;
    cnvrtd_number = convert(parseInt(number_to_cnvrt));

    res.redirect("/");
});

app.get('/stream', sseExpress, function(req,res){

    //send message to client
    res.sse(
        'converted',
        {
            converted_number : cnvrtd_number,
            number_to_convert : number_to_cnvrt
        }
    );
});

console.log('Web server listening at: http://localhost:8080/');
app.listen(8080);