import express from 'express'
import { updateRoleToEducator } from '../controllers/educatorControllers.js'
import { requireAuth } from '@clerk/express'

const educatorRouter = express.Router()

// Add Educator Role (Protected)
educatorRouter.get('/update-role', requireAuth(), updateRoleToEducator)

export default educatorRouter
