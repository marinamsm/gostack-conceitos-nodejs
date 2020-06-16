const { uuid } = require("uuidv4");
const { getRepositoriesDataStructure } = require('./repositories');

const repositories = getRepositoriesDataStructure();

module.exports = {
    createLike (request, response) {
        const { id } = request.params;
        
        repositories.map(repo => {
            if(repo.id === id) {
                repo.likes++;

                return response.json(repo);
            }
        })

        response.status(404).json('Repository not found');
    }
}