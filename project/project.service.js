const projectDAO = require('./project.dao')

const saveProject = (projectReq, done) => {
    projectDAO.saveProject(projectReq, done);
}

const findProjectByQuery = (projectReq, done) => {
    projectDAO.findProjectByQuery(projectReq, done);
}

module.exports = {saveProject, findProjectByQuery}