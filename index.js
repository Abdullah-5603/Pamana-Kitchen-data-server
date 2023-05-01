const express = require('express');
const app = express();
const port = process.env.PORT || 4000;
const cors = require('cors');

const chef = require('./Data/chefData.json')
const recipe = require('./Data/recipeData.json')

app.use(cors());

app.get('/chef', (req, res) =>{
    res.send(chef)
})

app.get('/recipe', (req, res) =>{
    res.send(recipe)
})

app.get('/chef/:id', (req, res) =>{
    const id = req.params.id;
    const selectedChef = chef.find(cf => cf.id === id)
    res.send(selectedChef)
})

app.get('/recipe/:id', (req, res) =>{
    const id = req.params.id;
    const selectedRecipe = recipe.find(rp => rp.id === id)
    res.send(selectedRecipe)
})

app.listen(port, ()=>{

})