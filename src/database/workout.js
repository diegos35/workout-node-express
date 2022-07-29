const DB = require('./db.json');
//traer datos de la base de datos
const { saveToDatabase } = require('./utils');

const getAllWorkout = () => { 
    return DB.workouts;
}

const createNewWorkout = (newWorkout) => {
    const isAlready = DB.workouts.findIndex((workout) =>
        workout.name === newWorkout.name 
    )
    if (isAlready) {
        return;
    }
    DB.workouts.push(newWorkout);
    saveToDatabase(DB)

}

module.exports = {
    getAllWorkout,
    createNewWorkout
}