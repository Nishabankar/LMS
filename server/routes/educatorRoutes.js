import express from 'express'
import { addCourse, updateRoleToEducator } from '../controllers/educatorControllers.js'
import { requireAuth } from '@clerk/express'
import { protectEducator } from '../middlewares/authMiddleware.js'
import upload from '../configs/multer.js'

const educatorRouter = express.Router()

// Add Educator Role (Protected)
educatorRouter.get( '/update-role', requireAuth(), updateRoleToEducator )
educatorRouter.post('/add-course', upload.single('image'), protectEducator, addCourse)

export default educatorRouter
