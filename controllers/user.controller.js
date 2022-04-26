const User = require("../models/user.model.js");

exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }

    const user = new User({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email
    });

    User.create(user, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the User."
            });
        else res.send(data);
    });
};

exports.findAll = (req, res) => {
    const first_name = req.query.first_name;
    User.getAll(first_name, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving users."
            });
        else res.send(data);
    });
};