const projectDAO = require('./project.dao')

const saveProject = (projectReq, done) => {
    projectDAO.saveProject(projectReq, done);
}

module.exports = {saveProject}