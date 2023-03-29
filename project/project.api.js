const express  =require('express')
const projectController = require('./project.controller')

const router = express.Router()

router.post('/', (req, res) => {
    let projectReq = {
        premiseType: (req.body.premiseType || ""),
        size: (req.body.size || ""),
        budget: (req.body.budget || 0),
        ownership: (req.body.ownership || 0),
    }

    projectController.saveProject(projectReq, (err, results) => {
        if (err)
            return res.status(400).send(err);
        res.status(201).send(results);
    })
})

router.get('/', (req, res) => {
    let projectReq = {
        premiseType: (req.body.premiseType || ""),
        size: (req.body.size || ""),
        budget: (req.body.budget || 0),
        ownership: (req.body.ownership || 0),
    }

    projectController.findProjectByQuery(projectReq, (err, results) => {
        if (err)
            return res.status(400).send(err);
        res.status(200).send(results);
    })
})

module.exports = router;
