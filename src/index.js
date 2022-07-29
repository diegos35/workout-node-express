const express = require("express");
const v1WorkoutRouter = require("./v1/routes/workoutRoutes");


const app = express(); //crear app con express 
const port = process.env.PORT || 3000;

/*const www = process.env.WWW || './';
app.use(express.static(www));
console.log(`serving ${www}`); */

app.use(express.json());//middelware PARA PARSEAR LAS PETICIONES
app.use('/api/v1/workouts', v1WorkoutRouter)


/* app.get('*', (req, res) => {
    res.send(`hello world`);
});
 */



app.listen(port, () => {
    console.log(`listening on http://localhost:${port}`)
});
