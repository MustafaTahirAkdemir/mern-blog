import express from 'express';
import { verifyToken } from '../utils/verifyUser.js';
import { create, deletepost, getposts,updatepost } from '../controller/post.controller.js';
const router = express.Router();

router.get('/getposts', getposts );
router.post('/create' , verifyToken, create);
router.delete('/deletepost/:postId/:userId', verifyToken, deletepost)
router.put('/updatepost/:postId/:userId', verifyToken, updatepost)
export default router;