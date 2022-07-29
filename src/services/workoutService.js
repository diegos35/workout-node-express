//Data acces layer
const workout = require("../database/workout")
const {v4 : uuid} = require("uuid"); //ultima version V4 y lo renombro

//lo que hace es crear una funcion que llama al modelo 

const getAllWorkout = () => {
    const allWorkout = workout.getAllWorkout();
    return allWorkout;
};
const getOneWorkout = () => {
    
    return;
};
const createNewWorkout = (newWorkout) => {
    const workoutToInsert = {
        ...newWorkout,
        id: uuid(),
        createAt: new Date().toLocaleString("en-US", { timeZone: "UTC"} ),
        updateAt: new Date().toLocaleString("en-US", { timeZone: "UTC"} )
    };
    const createdWorkout = workout.createNewWorkout(workoutToInsert);
    return createdWorkout; 
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