const projectDAO = require('./project.dao')

const saveProject = (projectReq, done) => {
    projectDAO.saveProject(projectReq, done);
}

const findProjectByQuery = (projectReq, done) => {
    projectDAO.findProjectByQuery(projectReq, done);
}

const updateProjectDetails = (projectId, projectReq, done) => {
    projectDAO.updateProjectDetails(projectId, projectReq, done);
}

const deleteProjectByQuery = (projectId, done) => {
    projectDAO.deleteProjectByQuery(projectId, done);
}

module.exports = {saveProject, findProjectByQuery, updateProjectDetails, deleteProjectByQuery}