const express=require('express');

var app=express();

const hbs=require('hbs');
const port = process.env.PORT || 3000;
hbs.registerPartials(__dirname+'/views/partials')
app.use(express.static(__dirname+'/public'));

hbs.registerHelper('getCurrentYear', () => {
  return new Date().getFullYear()
});

app.set('view_engine','hbs');


app.get('/',(req,res) => {
  //res.send('<h1>hello express</h1>');
  res.render('home.hbs', {
    pageTitle:'Home Page',
    welcomeMsg:'Welcome to home page'
  });
});

app.get('/projects',(req,res) => {
  res.render('projects.hbs', {
    pageTitle: 'Projects',
    welcomeMsg:'These are my projects'
  });
});


app.get('/about',(req,res) => {
  res.render('about.hbs',{
    pageTitle: 'about page',
    welcomeMsg:'something about this page'
  });
});

app.get('/bad',(req,res)=>{
  res.send({
    error:'cannot access file',
    errorcode:'404'
  });
})

app.listen(port,() => {
  console.log(`Server is running on port ${port}`);
});
