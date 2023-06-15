'use strict';

import express from 'express';

import controller from '../controllers/users.mjs';

const router = express.Router(); // eslint-disable-line new-cap

router.delete('/:username', controller.deleteUser);
router.get('/:username', controller.getUser);
router.get('/', controller.get);
router.post('/', controller.post);
router.put('/:username', controller.putUser);

export default router;
