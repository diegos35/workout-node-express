const getAllWorkout = (req, res) => { 
    res.send("Get all workouts");
};

const getOneWorkout = (req, res) => { 
    res.send(`Get workout ${req.params.workoutId}`);
};

const  createNewWorkout = (req, res) => {
    res.send(`Create new workout ${req.params.workoutId}`); 
}

const updateWorkout = (req, res) => {  
    res.send(`Update workout ${req.params.workoutId}`); 
}

const deleteWorkout = (req, res) => { 
    res.send(`Delete workout ${req.params.workoutId}`); 
}


module.exports = {
    getAllWorkout,
    getOneWorkout,
    createNewWorkout,
    updateWorkout,  
    deleteWorkout
};