const { uuid } = require("uuidv4");
const { getRepositoriesDataStructure } = require('./repositories');

const repositories = getRepositoriesDataStructure();

module.exports = {
    createLike (request, response) {
        const { id } = request.params;
        let result = null;
        
        const repos = repositories.map(repo => {
            if(repo.id === id) {
                repo.likes++;
                result = repo;
                return repo;
            }

            return null;
        })

        if (repos.length === 0) {
            return response.status(404).json('Repository not found');
        }

        response.json(result);
    }
}