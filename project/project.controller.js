const projectService = require('./project.service')

const saveProject = (projectReq, done) => {
    projectService.saveProject(projectReq, done);
}

module.exports = {saveProject};