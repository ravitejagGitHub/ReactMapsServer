const express = require("express");
const MessagesModel = require("../models/messages");
const router = express.Router();

//POST
router.post("/Message", (req, res) => {

    if (!req.body) {
        return res.status(400).send("Request body missing!!!");
    }
    let model = new MessagesModel(req.body);
    model.save()
        .then(doc => {
            if (!doc || doc.length === 0) {
                return res.status(500).send(doc);
            }
            res.status(200).json(doc);
        })
        .catch(err => {
            res.status(500).json(err);
        })
});
//GET
router.get("/Messages", (req, res) => {

    MessagesModel.find()
        .then(doc => {
            if (!doc || doc.length === 0) {
                return res.status(500).send(doc);
            }
            res.status(200).json(doc);
        })
        .catch(err => {
            res.status(500).json(err);
        })
});

module.exports = router;
