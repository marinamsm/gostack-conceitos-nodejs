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
        const { body } = request;
        const { id } = request.params;
        let result = null;
        const repos = repositories.filter(repository => {
            if (repository.id === id) {
                for(const key in body) {
                    if (key in repository && key !== 'likes') {
                        repository[key] = body[key];
                    }
                }

                result = repository;
                return repository;
            }

            return null;
        });

        if (repos.length === 0) {
            return response.status(404).json('Repository not found');
        }

        response.json(result);
    },
    
    deleteRepository (request, response) {
        const { id } = request.params;
        const repos = [...repositories];

        for(let i = 0; i < repos.length; i++) {
            if (repos[i].id === id) {
                repositories.splice(i, 1);
                return response.status(204).send();
            }
        }

        response.status(404).json('Repository not found');
    },
    
    getRepositoriesDataStructure() {
        return repositories;
    }
}