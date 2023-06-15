'use strict';

import express from 'express';

import controller from '../controllers/users.mjs';

const router = express.Router();

router.delete('/:id', controller.deleteId);
router.get('/:id', controller.getId);
router.get('/', controller.get);
router.post('/', controller.post);
router.put('/:id', controller.putId);

export default router;
