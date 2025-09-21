import { ShoppingCart } from 'lucide-react';

const Products = () => {
  return (
    <section className="max-w-7xl mx-auto outline-1 bg-white text-gray-800">
      <div className='flex items-center justify-between p-4 shadow-sm'>
        <h2 className="text-2xl text-center flex-1 font-semibold">Kiosco</h2>
        <ShoppingCart className='cursor-pointer'/>
      </div>
      <div className='pt-5'>
        HOLA MUNDO
      </div>
    </section>
  )
}

export default Products;
