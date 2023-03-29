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

const findProjectByQuery = (query, done) => {
    let project = {};
    if (query.premiseType !== "")
        project["premiseType"] = query.premiseType;
    if (query.ownership !== "")
        project["ownership"] = query.ownership;

    // select ==> projection of the result
    // lean ==> returns JSON not BSON
    projectModel.find(project).select({_id: 0, __v: 0}).lean()
        .exec().then(data => {
            return done(null, data);
    }).catch((error) => {
        console.log("unable to find the document: ", error);
        return done('Failed to retrieve the data', null);
    })
}

const updateProjectDetails = (projectId, projectReq, done) => {
    projectModel.findOneAndUpdate({_id: projectId}, projectReq, {new: true})
        .then(data => {
            if (data == null)
                return done('project Not Found');
            return done(null, data);
        }).catch((err) => {
            console.log("Failed to update ", err);
            return done('Failed to update', null);
    })
}

const deleteProjectByQuery = (projectId, done) => {
    projectModel.deleteOne({_id: projectId}).then(data => {
        return done(null, data);
    }).catch(err => {
        return done(err)
    })
}

module.exports = {saveProject, findProjectByQuery, updateProjectDetails, deleteProjectByQuery};