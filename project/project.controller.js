const projectService = require('./project.service')

const saveProject = (projectReq, done) => {
    projectService.saveProject(projectReq, done);
}

const findProjectByQuery = (projectReq, done) => {
    projectService.findProjectByQuery(projectReq, done);
}

module.exports = {saveProject, findProjectByQuery};