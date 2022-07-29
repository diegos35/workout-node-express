const DB = require('./db.json');
//traer datos de la base de datos

const getAllWorkout = () => { 
    return DB.workouts;
}

module.exports = {
    getAllWorkout
}