const projectModel = require('./project.entity')

const saveProject = (projectReq, done) => {
    let newProject = new projectModel({
        premiseType: projectReq.premiseType,
        size: projectReq.size,
        budget: projectReq.budget,
        ownership: projectReq.ownership,
    });

    newProject.save().then((data) => {
        return done(null, data);
    }).catch((err) => {
        return done(err, null);
    })
}

module.exports = {saveProject};