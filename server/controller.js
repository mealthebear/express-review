// Controller here
let todos = ['study for the TA', 'graduate from HR', 'get a job'];

const controller = {
    get: (req, res) => {
        res.status(200).send(todos);
    },
    post: (req, res) => {
        res.status(201).send('Hello from POST');
    },
    delete: (req, res) => {
        res.status(202).send('Hello from DELETE');
    }
}

module.exports = controller;