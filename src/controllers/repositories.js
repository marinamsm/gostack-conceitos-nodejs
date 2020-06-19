const { uuid } = require("uuidv4");

const repositories = [];

module.exports = {
    createRepository (request, response) {
        const { title, url, techs } = request.body;
        const newRepo = { 
            id: uuid(),
            title,
            url,
            techs,
            likes: 0 
        };
        repositories.push(newRepo);

        response.status(201).json(newRepo);
    },

    index(request, response) {
        const result = repositories.length > 0 ? repositories : undefined;

        response.json(result);
    },

    updateRepository (request, response) {
        const { id } = request.params;
        const { title, url, techs } = request.body;

        const repoIndex = repositories.findIndex(repo => repo.id === id)

        if (repoIndex < 0) {
            return response.status(400).json('Repository not found');
        }

        const updatedRepository = {
            id,
            title,
            url,
            techs,
            likes: repositories[repoIndex].likes
        }

        repositories[repoIndex] = updatedRepository;

        response.json(updatedRepository);
    },
    
    deleteRepository (request, response) {
        const { id } = request.params;

        const repoIndex = repositories.findIndex(repo => repo.id === id)

        if (repoIndex < 0) {
            return response.status(400).json('Repository not found');
        }

        repositories.splice(repoIndex, 1);

        response.status(204).send();
    },
    
    getRepositoriesDataStructure() {
        return repositories;
    }
}