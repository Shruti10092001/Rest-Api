import express from "express";
import { createUser, getUsers,getUser,deleteUser, updateUser } from "../controllers/users.js";

const router = express.Router();

router.get('/',getUsers);

router.post('/',createUser);

router.get('/:id',getUser);

router.delete('/:id', deleteUser);
// router.delete('/:id',(req,res)=>{
//     const { id } = req.params;

//     users =users.filter((user) => user.id != id);

//     res.send(`user with the id ${id} delete from the database.`);
// });

router.patch('/:id', updateUser);
// router.patch('/:id',(req, res) =>{
//     const { id } = req.params;
//     const { firstName, lastName,age } = req.body;

//     const user = users.find((user)=> user.id == id);

//     if(firstName) user.firstName = firstName;
//     if(lastName) user.lastName = lastName;
//     if(age) user.age = age;
//     res.send(`user with the id ${id} has been updated`);
// })


export default router;