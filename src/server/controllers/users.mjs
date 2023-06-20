'use strict';

import fs from 'fs/promises';
import mysql from 'mysql2';
import path from 'path';
import { fileURLToPath } from 'url';

import errors from '../errors.mjs';
import pool from '../Pool.mjs';

const directory = path.dirname(fileURLToPath(import.meta.url));

const connect = (req, res, query, ...values) => {
    fs.readFile(path.join(directory, query), 'utf8')
        .then(template => {
            const sql = mysql.format(template, [...values].length ? Object.values(...values) : null);

            pool.query(sql, (err, results) => {
                if (err) return errors.server(res, err);
                res.json(results);
            });
        })
        .catch(err => console.log(err));
};

const deleteUser = (req, res) => connect(req, res, '../sql/queries/deleteUser.sql', req.params);
const get = (req, res) => connect(req, res, '../sql/queries/get.sql');
const getSettings = (req, res) => connect(req, res, '../sql/queries/getSettings.sql', req.params);
const getUser = (req, res) => connect(req, res, '../sql/queries/getUser.sql', req.params);

const patchUser = (req, res) => {
    fs.readFile(path.join(directory, '../sql/queries/patchUser.sql'), 'utf8')
        .then(template => {
            const e = req.body.data;
            const sql = mysql.format(template, [e.experience, e.notifications, e.username]);

            pool.query(sql, err => {
                if (err) return errors.server(res, err);
                res.json({ message: 'Records updated.' });
            });
        })
        .catch(err => console.log(err));
};

const post = (req, res) => {
    fs.readFile(path.join(directory, '../sql/queries/post.sql'), 'utf8')
        .then(template => {
            const e = req.body.data;
            const sql = mysql.format(template, [e.email, e.username, e.notifications]);

            pool.query(sql, err => {
                if (err) return errors.server(res, err);
                res.json({ message: 'Account created.' });
            });
        })
        .catch(err => console.log(err));
};

const putUser = (req, res) => {
    fs.readFile(path.join(directory, '../sql/queries/putUser.sql'), 'utf8')
        .then(template => {
            const e = req.body.data;
            const inserts1 = [e.first_name, e.last_name, e.country, e.photo, e.page, e.bio, e.username];
            const inserts2 = [e.theme, e.units, e.map, e.username];
            const sql = mysql.format(template, [...inserts1, ...inserts2]);

            pool.query(sql, err => {
                if (err) return errors.server(res, err);
                res.json({ message: 'Account updated.' });
            });
        })
        .catch(err => console.log(err));
};

export default {
    deleteUser,
    get,
    getSettings,
    getUser,
    patchUser,
    post,
    putUser,
};
