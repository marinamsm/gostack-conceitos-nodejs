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

        response.status(201).json(repositories);
    },

    index(request, response) {
        const result = repositories.length > 0 ? repositories : undefined;

        response.json(result);
    },

    updateRepository (request, response) {
        const { body } = request;
        const { id } = request.params;
        repositories.filter(repository => {
            if (repository.id === id) {
                for(const key in body) {
                    if (key in repository && key !== 'likes') {
                        repository[key] = body[key];
                    }
                }

                return response.json(repository);
            }
        });

        response.status(404).json('Repository not found');
    },
    
    deleteRepository (request, response) {
        const { id } = request.params;
        let index = -1;
        const repos = [...repositories];

        for(let i = 0; i < repos.length; i++) {
            if (repos[i].id === id) {
                repositories.splice(index, 1);
                return response.status(204).send();
            }
        }

        response.status(404).json('Repository not found');
    },
    
    getRepositoriesDataStructure() {
        return repositories;
    }
}