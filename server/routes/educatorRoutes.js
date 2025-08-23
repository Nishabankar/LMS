import express from 'express'
import { addCourse, educatorDashboardData, getEducatorCourse, getEnrolledStudentsData, updateRoleToEducator } from '../controllers/educatorControllers.js'
import { requireAuth } from '@clerk/express'
import { protectEducator } from '../middlewares/authMiddleware.js'
import upload from '../configs/multer.js'

const educatorRouter = express.Router()

// Add Educator Role (Protected)
educatorRouter.get( '/update-role', requireAuth(), updateRoleToEducator )
educatorRouter.post( '/add-course', requireAuth(), protectEducator, upload.single( 'image' ), addCourse )
educatorRouter.get('/courses', protectEducator, getEducatorCourse)
educatorRouter.get('/dashboard', protectEducator, educatorDashboardData)
educatorRouter.get('/enrolled-students', protectEducator, getEnrolledStudentsData)

export default educatorRouter
