const workoutService = require('../services//workoutService');

const getAllWorkout = (req, res) => {
  const allWorkouts = workoutService.getAllWorkout();
  res.send({ status: 'OK', data: allWorkouts });
};

const getOneWorkout = (req, res) => {
  const workout = workoutService.getOneWorkout(req.params.workoutId);
  res.send(`Get workout ${req.params.workoutId}`);
};

const createNewWorkout = (req, res) => {
  const { body } = req;
  if (!body.name ||  !body.mode || !body.equipment ||  !body.exercises || !body.trainerTips) {
    return;
  }
  const newWorkout = {
    name: body.name,
    mode: body.mode,
    equipment: body.equipment,
    exercises: body.exercises,
    trainerTips: body.trainerTips,
  };

  const createdWorkout = workoutService.createNewWorkout(newWorkout);
  res.status(200).send({status: 'OK', createdWorkout});
};

const updateWorkout = (req, res) => {
  const updateWorkout = workoutService.update(req.params.workoutId);
  res.send(`Update workout ${req.params.workoutId}`);
};

const deleteWorkout = (req, res) => {
  workoutService.delete(req.params.workoutId);
  res.send(`Delete workout ${req.params.workoutId}`);
};

module.exports = {
  getAllWorkout,
  getOneWorkout,
  createNewWorkout,
  updateWorkout,
  deleteWorkout,
};
