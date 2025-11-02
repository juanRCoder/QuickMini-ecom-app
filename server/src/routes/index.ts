import { Router } from 'express'
import productRouter from '../api/products/products.route';

const apiRouter = Router();

apiRouter.use('/products', productRouter)

apiRouter.use('/', (_req, res) => {
  res.json({ message: 'API is working!'})
  console.log('Api is working!')
})

export default apiRouter