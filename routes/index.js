const students = require("../controllers/student.controller");
const users = require("../controllers/user.controller");
  const router = require("express").Router();

  // Create a new Student
  router.post("/", students.create);

  // Retrieve all Students
  router.get("/", students.findAll);

  // Retrieve a Name
  router.get("/findAName", students.findAName);

  // Retrieve a single Student with id
  router.get("/:id", students.findOne);

  // Update a Student with id
  router.put("/:id", students.update);

  // Delete a Student with id
  router.delete("/:id", students.delete);

  // Delete all Student
  router.delete("/", students.deleteAll);

  // create user
  router.post("/createUser", users.createUser);

  // LOGIN USER
  router.post("/loginUser", users.loginUser);

  // router.get("/getUsers", users.getUsers);
 
  
module.exports = router
//