import 'dotenv/config';
import express from 'express';
import './database/connectdb.js';
import authRouter from './routes/authRouter.js';

const app = express()

app.use(express.json())
app.use('/api/auth', authRouter)

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500
  const message = err.message || 'Internal Server Error'

  return res.status(statusCode).json({
    success: false,
    statusCode,
    message
  })
})

const PORT = process.env.PORT || 6000
app.listen(PORT, () => console.log(`🔥🔥 Server running on port ${PORT} 🔥🔥`))