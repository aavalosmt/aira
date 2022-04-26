'use strict';

var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function (options, seedLink) {
    dbm = options.dbmigrate;
    type = dbm.dataType;
    seed = seedLink;
};

exports.up = function (db, callback) {
    db.createTable('user', {
        id: {
            type: 'int',
            unsigned: true,
            notNull: true,
            primaryKey: true,
            autoIncrement: true,
            length: 10
        },
        first_name: {
            type: 'string',
            length: 40
        },
        last_name: {
            type: 'string',
            length: 40
        },
        email: {
            type: 'string',
            length: 50
        },
    }, function (err) {
        if (err) return callback(err);
        return callback();
    });
};

exports.down = function (db) {
    return null;
};

exports._meta = {
    "version": 1
};