//Data acces layer
const workout = require("../database/workout")

//lo que hace es crear una funcion que llama al modelo 

const getAllWorkout = () => {
    const allWorkout = workout.getAllWorkout();
    return allWorkout;
};
const getOneWorkout = () => {
    
    return;
};
const createNewWorkout = () => {
    return;
};
const updateWorkout = () => {
    return;
};  
const deleteWorkout = () => {
    return;
};

module.exports = {
    getAllWorkout,
    getOneWorkout,
    createNewWorkout,
    updateWorkout,
    deleteWorkout
}