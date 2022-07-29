const workoutService = require("../services//workoutService");

const getAllWorkout = (req, res) => { 
    const allWorkouts = workoutService.getAllWorkout();
    res.send({status: 'OK', data: allWorkouts});
};

const getOneWorkout = (req, res) => { 
    const workout = workoutService.getOneWorkout(req.params.workoutId);
    res.send(`Get workout ${req.params.workoutId}`);
};

const  createNewWorkout = (req, res) => {
    const createWorkout = workoutService.createNewWorkout(req.params.workoutId);
    res.send(`Create new workout ${req.params.workoutId}`); 
}

const updateWorkout = (req, res) => {  
    const updateWorkout = workoutService.update(req.params.workoutId);
    res.send(`Update workout ${req.params.workoutId}`); 
}

const deleteWorkout = (req, res) => { 
    workoutService.delete(req.params.workoutId);
    res.send(`Delete workout ${req.params.workoutId}`); 
}


module.exports = {
    getAllWorkout,
    getOneWorkout,
    createNewWorkout,
    updateWorkout,  
    deleteWorkout
};