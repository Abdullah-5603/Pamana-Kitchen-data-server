const express = require('express');
const app = express();
const port = process.env.PORT || 4000;
const cors = require('cors');

const recipe = require('./Data/recipeData.json')
const traditionalFood = require('./Data/traditionalFoodData.json')
const cuisineCourse = require('./Data/cuisineCourseData.json')

app.use(cors());

app.get('/recipe', (req, res) =>{
    res.send(recipe)
})

app.get('/recipe/:id', (req, res) =>{
    const id = req.params.id;
    const selectedRecipe = recipe.find(rp => rp.id == id)
    res.send(selectedRecipe)
})

app.get('/traditionalFood', (req, res) =>{
    res.send(traditionalFood);
})

app.get('/cuisineCourse', (req, res) =>{
    res.send(cuisineCourse)
})

app.listen(port, ()=>{

})