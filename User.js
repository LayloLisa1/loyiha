const Joi = require("joi");
const { saveUser } = require("../services/index.js");

module.exports.registerController = async (req, res) => {
    const { id, name, login, passwod} = req.body;

const schema = Joi.object({
    id: Joi.string().email().required(),
    name: Joi.string().min(5).max(20).required(),
    login:Joi.string().required(),
    password: Joi.string().min(5).max(10).required(),
});
app.get('/users', (req, res) => {
    User.find({}, '-password', (err, users) => {
      if (err) {
        return res.status(500).json({ error: 'Internal Server Error' });
      }
      res.json(users);
    });
  });
  
  app.get('/users/:userId', (req, res) => {
    const userId = req.params.userId;
    User.findById(userId, '-password', (err, user) => {
      if (err) {
        return res.status(500).json({ error: 'Internal Server Error' });
      }
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
      res.json(user);
    });
  });
  
  app.post('/users', (req, res) => {
    const userData = req.body;
    User.create(userData, (err, newUser) => {
      if (err) {
        return res.status(400).json({ error: 'Bad Request' });
      }
      res.status(201).json(newUser);
    });
  });
  
  app.put('/users/:userId', (req, res) => {
    const userId = req.params.userId;
    const updatedUserData = req.body;
    User.findByIdAndUpdate(userId, updatedUserData, { new: true }, (err, updatedUser) => {
      if (err) {
        return res.status(500).json({ error: 'Internal Server Error' });
      }
      if (!updatedUser) {
        return res.status(404).json({ error: 'User not found' });
      }
      res.json(updatedUser);
    });
  });
  
  app.delete('/users/:userId', (req, res) => {
    const userId = req.params.userId;
    User.findByIdAndDelete(userId, (err, deletedUser) => {
      if (err) {
        return res.status(500).json({ error: 'Internal Server Error' });
      }
      if (!deletedUser) {
        return res.status(404).json({ error: 'User not found' });
      }
      res.sendStatus(204);
    });
  });
  



  app.get('/tasks', (req, res) => {
    Task.find({}, (err, tasks) => {
      if (err) {
        return res.status(500).json({ error: 'Internal Server Error' });
      }
      res.json(tasks);
    });
  });
  
  app.get('/tasks/:taskId', (req, res) => {
    const taskId = req.params.taskId;
    Task.findById(taskId, (err, task) => {
      if (err) {
        return res.status(500).json({ error: 'Internal Server Error' });
      }
      if (!task) {
        return res.status(404).json({ error: 'Task not found' });
      }
      res.json(task);
    });
  });
  
  app.post('/tasks', (req, res) => {
    const taskData = req.body;
    Task.create(taskData, (err, newTask) => {
      if (err) {
        return res.status(400).json({ error: 'Bad Request' });
      }
      res.status(201).json(newTask);
    });
  });
  
  app.put('/tasks/:taskId', (req, res) => {
    const taskId = req.params.taskId;
    const updatedTaskData = req.body;
    Task.findByIdAndUpdate(taskId, updatedTaskData, { new: true }, (err, updatedTask) => {
      if (err) {
        return res.status(500).json({ error: 'Internal Server Error' });
      }
      if (!updatedTask) {
        return res.status(404).json({ error: 'Task not found' });
      }
      res.json(updatedTask);
    });
  });
  

  app.delete('/tasks/:taskId', (req, res) => {
    const taskId = req.params.taskId;
    Task.findByIdAndDelete(taskId, (err, deletedTask) => {
      if (err) {
        return res.status(500).json({ error: 'Internal Server Error' });
      }
      if (!deletedTask) {
        return res.status(404).json({ error: 'Task not found' });
      }
      res.sendStatus(204);
    });
  });
  

}
