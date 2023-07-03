'use strict';

const server = (res, err) => res.status(500).json(err);

export default {
    server,
};
