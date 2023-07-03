'use strict';

import mysql from 'mysql2';

const OPTS_POOL = {
    connectionLimit: 100,
    database: process.env.SERVER_DATABASE_SCHEMA,
    debug: false,
    host: process.env.SERVER_DATABASE_HOST,
    multipleStatements: true,
    password: process.env.SERVER_DATABASE_PASSWORD,
    queueLimit: 0,
    user: process.env.SERVER_DATABASE_USERNAME,
    waitForConnections: true,
};

class Pool {
    constructor() {
        if (!this.Pool) this.Pool = mysql.createPool(OPTS_POOL);
        return this.Pool;
    }
}

export default new Pool();
