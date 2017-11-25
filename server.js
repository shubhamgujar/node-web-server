const express=require('express');

var app=express();

const hbs=require('hbs');
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

app.get('/about',(req,res) => {
  res.render('about.hbs',{
    pageTitle: 'about page',
  
  });
});

app.get('/bad',(req,res)=>{
  res.send({
    error:'cannot access file',
    errorcode:'404'
  });
})

app.listen(3000,() => {
  console.log("Server is running on port 3000");
});