import { Search, ShoppingCart } from 'lucide-react';
import { productCards } from '../mocks/products';

const Products = () => {
  return (
    <section className="max-w-7xl mx-auto outline-1 bg-white text-gray-800">
      <div className='flex items-center justify-between p-4 shadow-sm'>
        <h2 className="text-2xl text-center flex-1 font-semibold">Kiosco</h2>
        <ShoppingCart className='cursor-pointer' />
      </div>
      <div className='py-4 px-3'>
        <div className='flex gap-2 bg-[#F3F4F6] rounded-xl p-3'>
          <Search color='#767D8A' />
          <input
            type='text'
            placeholder='Buscar productos'
            className='w-full outline-none border-none'
          />
        </div>
      </div>
      <div className="flex gap-3 pb-4 px-3">
        <span className="cursor-pointer bg-[#EC6D13] text-white py-1.5 px-3 rounded-4xl">Todos</span>
        <span className="cursor-pointer bg-[#F3F4F6] text-[#414A56] py-1.5 px-3 rounded-4xl">Bebidas</span>
        <span className="cursor-pointer bg-[#F3F4F6] text-[#414A56] py-1.5 px-3 rounded-4xl">Snacks</span>
      </div>
      <div className='bg-[#F3F4F6] grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 p-3 pt-4'>
        {
          productCards.map((p, i) => (
            <div key={i} className='rounded-md shadow-sm'>
              <img src={p.image} className='rounded-t-md h-44 w-full object-cover' />
              <div className='rounded-b-md bg-white pt-3 pb-2 px-2 font-semibold'>
                <p>{p.name}</p>
                <p className='text-sm text-[#EC6D13]'>S/ {(p.price).toFixed(2)}</p>
              </div>
            </div>
          ))
        }
      </div>
      <div>
        
      </div>
    </section>
  )
}

export default Products;
