var sql = require('./../db');

const User = function (user) {
    this.first_name = user.first_name;
    this.last_name = user.last_name;
    this.email = user.email;
};

User.getAll = (first_name, result) => {
    let query = "SELECT * FROM user";
    if (first_name) {
        query += ` WHERE first_name LIKE '%${first_name}%'`;
    }
    sql.query(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        console.log("Users: ", res);
        result(null, res);
    });
};

User.create = (newUser, result) => {
    sql.query("INSERT INTO user SET ?", newUser, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
        console.log("Created user: ", { id: res.insertId, ...newUser });
        result(null, { id: res.insertId, ...newUser });
    });
};

module.exports = User;
