'use strict';

import fs from 'fs/promises';
import mysql from 'mysql2';
import path from 'path';
import { fileURLToPath } from 'url';

import errors from '../errors.mjs';
import pool from '../Pool.mjs';

const connect = (req, res, query, ...values) => {
    fs.readFile(path.join(path.dirname(fileURLToPath(import.meta.url)), query), 'utf8')
        .then(template => {
            const sql = mysql.format(template, [...values].length ? Object.values(...values) : null);

            pool.query(sql, (err, results) => {
                if (err) return errors.server(res, err);
                res.json(results);
            });
        });
};

const deleteId = (req, res) => connect(req, res, '../sql/queries/deleteId.sql');
const get = (req, res) => connect(req, res, '../sql/queries/get.sql');
const getId = (req, res) => connect(req, res, '../sql/queries/getId.sql', req.params);
const post = (req, res) => connect(req, res, '../sql/queries/post.sql');
const putId = (req, res) => connect(req, res, '../sql/queries/putId.sql');

export default {
    deleteId,
    get,
    getId,
    post,
    putId,
};
