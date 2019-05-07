var express = require('express');
var fs = require('fs');
var morgan = require('morgan');
var path = require('path');
var cors = require('cors');
var app = express();

//data
let grades=[
    {id:"1",name:'Assad Saad',course:'MWA',grade:95},
    {id:"2",name:'Romulo Costa',course:'Alogorithm',grade:100}
];

var accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), {flags: 'a'});

app.use(morgan('combined', {stream: accessLogStream}));
app.use(cors());

app.use(function(req,res, next){
        try {
            if(req.method==='POST')
                JSON.parse(req.body);
            next();
        } catch (e) {
            res.send("not Valid JSON");
            res.end();
        }
    }
);

app.get('/grades', function (req, res) {
    res.status(200).send(grades);
    res.end();
});

app.get('/grades/:id', function (req, res) {
    const id = req.params.id;
    const grade = grades.find( grade => grade.id === id);

    res.status(200).send(grade);
    res.end();

});

app.use(express.json());
app.post('/grades', function (req, res) {
    grades.push(req.body);
    res.status(200).send(req.body);
    res.end();
});

app.put('/grades/:id', function (req, res) {
    const id = req.params.id;
    const grade = grades.find( grade => {
        if (grade.id === id) {
            grade.id = req.body.id;
            grade.name = req.body.name;
            grade.course = req.body.course;
            grade.grade = req.body.grade;
            return grade;
        }
    });

    res.status(200).send(grade);
    res.end();

});

app.delete('/grades/:id', function (req, res) {
    const id = req.params.id;
    grades = grades.filter(grade => grade.id !== id);

    res.status(200).json({message: "grade deleted successfully"});
    res.end();
});

app.listen(3000, () => console.log('localhost:3000'));