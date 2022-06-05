
// below code line is like import express to use node express package and featuers
const express = require('express')
// import controllers
const { getGoals, setGoal, updateGoal, deleteGoal, showGoal } = require('../controllers/goalController')
const router = express.Router()

// so router.get method has two pram 1- is the route 2- is the response 
// @post api/goal; @get api/goal
router.route('/').get(getGoals).post(setGoal)

router.put('/:id', updateGoal)

router.get('/:id', showGoal)

router.delete('/:id', deleteGoal)


module.exports = router