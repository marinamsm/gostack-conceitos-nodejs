const { getRepositoriesDataStructure } = require('./repositories');

const repositories = getRepositoriesDataStructure();

module.exports = {
    createLike (request, response) {
        const { id } = request.params;
        let result = null;
        
        const repoIndex = repositories.findIndex(repo => repo.id === id)

        if (repoIndex < 0) {
            return response.status(400).json('Repository not found');
        }

        repositories[repoIndex].likes++;
    
        response.json(repositories[repoIndex]);
    }
}