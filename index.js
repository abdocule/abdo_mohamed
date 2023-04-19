import express from 'express';
import { engine } from 'express-handlebars';
const app = express();
app.engine('handlebars',engine());
app.set('view engine', 'handlebars');
app.set('views', './templates');




const students = [
    {
        id: 1,
        name: "mohamed",
        city: "shbeen",
    },
    {
        id: 2,
        name: "salah",
        city: "banha",
    },
    {
        id: 3,
        name: "hamoda",
        city: "cairo",
    },
    {
        id: 4,
        name: "elserougy",
        city: "tanta",
    },

];



const studentsfunction = (request, response) => {
     response.render("students" , { layout:false , students});

};


app.get("/students", studentsfunction);

app.get('/students/:id',(req ,res) =>{
    const id = req.params.id;

    const student = students.find((item)=>{
        return item.id  == id ; 
    })
   
    res.render("student", { layout: false , student });
});


app.listen(5000);