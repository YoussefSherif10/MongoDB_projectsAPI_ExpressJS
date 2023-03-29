const projectService = require('./project.service')
const projectDAO = require("./project.dao");

const saveProject = (projectReq, done) => {
    projectService.saveProject(projectReq, done);
}

const findProjectByQuery = (projectReq, done) => {
    projectService.findProjectByQuery(projectReq, done);
}

const updateProjectDetails = (projectId, projectReq, done) => {
    projectService.updateProjectDetails(projectId, projectReq, done);
}

const deleteProjectByQuery = (projectId, done) => {
    projectService.deleteProjectByQuery(projectId, done);
}

module.exports = {saveProject, findProjectByQuery, updateProjectDetails, deleteProjectByQuery};