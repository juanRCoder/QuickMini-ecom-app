import { Search, ShoppingCart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { productCards } from '@/mocks/products';
import { CardProduct } from '@/components/CardProduct';

const Products = () => {
  const navigate = useNavigate()

  return (
    <section className="relative max-w-7xl mx-auto outline-1 bg-white text-gray-800 min-h-screen flex flex-col">
      <div className='flex items-center justify-between p-4 shadow-sm'>
        <h2 className="text-2xl text-center flex-1 font-semibold">EasyShop</h2>
        <ShoppingCart onClick={() => navigate('/cart')} className='absolute right-4 cursor-pointer' />
      </div>
      <div className='py-4 px-3'>
        <div className='flex gap-2 bg-[#f9fafb] rounded-xl p-3'>
          <Search color='#767D8A' />
          <input
            type='text'
            placeholder='Buscar productos'
            className='w-full outline-none border-none'
          />
        </div>
      </div>
      <div className="flex gap-3 pb-4 px-3 overflow-x-auto">
        <span className="cursor-pointer bg-[#EC6D13] text-white py-1.5 px-3 rounded-4xl">Todos</span>
        <span className="cursor-pointer bg-[#F3F4F6] text-[#414A56] py-1.5 px-3 rounded-4xl">Bebidas</span>
        <span className="cursor-pointer bg-[#F3F4F6] text-[#414A56] py-1.5 px-3 rounded-4xl">Snacks</span>
      </div>
      <div className="bg-[#f9fafb] flex-1 overflow-auto p-3">
        <div className='grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4'>
          {productCards.map((p, i) => (
            <CardProduct key={i} image={p.image} name={p.name} price={p.price} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Products;
