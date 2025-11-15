import { Router } from 'express'
import productRouter from '@server/api/products/products.route';
import categoryRouter from '@server/api/categories/categories.route';
import orderRouter from '@server/api/orders/orders.route';

const apiRouter = Router();

apiRouter.use('/products', productRouter)
apiRouter.use('/categories', categoryRouter)
apiRouter.use('/orders', orderRouter)

apiRouter.use('/', (_req, res) => {
  res.json({ message: 'API is working!'})
  console.log('Api is working!')
})

export default apiRouter