const transactionsController = require("express").Router()
const transactions = require("../Models/transactions")
const transactionsArr = require("../Models/transactions")

// Index
transactionsController.get("/", (req, res) => {
    res.send(transactionsArr)
})

// Show
transactionsController.get("/:index", (req, res) => {
    const { index } = req.params
    transactionsArr[index] ? res.send(transactionsArr[index]) : res.redirect("404: id not found")
})

// Create
transactionsController.post("/", (req, res) => {
    transactionsArr.push(req.body)
    res.json(transactionsArr[transactionsArr.length - 1])
})

// Delete
transactionsController.delete("/:index", (req, res) => {
    const { index } = req.params
    const deletedTransaction = transactionsArr.splice(index, 1)
    res.status(200).json(deletedTransaction)
})

// Update
transactionsController.put("/:index", (req, res) => {
    transactionsArr[req.params.index] = req.body
    res.status(200).json(transactionsArr[req.params.index])
    console.log(transactionsArr)
})


module.exports = transactionsController