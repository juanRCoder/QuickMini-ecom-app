import { useMemo, useState } from 'react';
import { Search, ShoppingCart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { CardProduct } from '@/components/CardProduct';
import { useProducts } from '@/hooks/useProducts';
import { useCategories } from '@/hooks/useCategories';
import { useDebounce } from '@/hooks/useDebounce';
import type { productList } from '@/types/product.types';
import type { categoryList } from '@/types/categories.types';

const Products = () => {
  const [searchTerm, setSearchTerm] = useState<string>('')
  const [onCategory, setOnCategory] = useState<string>('Todos')
  const [categoryId, setCategoryId] = useState<string>('')

  const navigate = useNavigate()
  const debouncedSearch = useDebounce(searchTerm, 400);
  const { data: allProducts } = useProducts.AllProducts(debouncedSearch)
  const { data: productsByCategory } = useProducts.ProductsByCategory(categoryId)
  const { data: allCategories } = useCategories.AllCategories()

  const categoriesWithAll = useMemo(() => { // memoriza el array de categorias
    const base = allCategories || [];
    return [{ id: '', name: 'Todos' }, ...base];
  }, [allCategories]);


  const handleProductsByCategory = (ctg: categoryList) => {
    setOnCategory(ctg.name)
    setCategoryId(ctg.id)
    setSearchTerm('')
  }

  const handleSearchProducts = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    if (e.target.value !== '') {
      setOnCategory('Todos');
      setCategoryId('');
    }
  }

  const filteredProducts = onCategory === 'Todos' ? allProducts : productsByCategory

  return (
    <section className="relative max-w-7xl mx-auto outline-1 bg-white text-gray-800 min-h-screen flex flex-col">
      {/* HEADER */}
      <div className='flex items-center justify-between p-4 shadow-sm'>
        <h2 className="text-2xl text-center flex-1 font-semibold">FutamiShop</h2>
        <ShoppingCart onClick={() => navigate('/cart')} className='absolute right-4 cursor-pointer' />
      </div>
      {/* CONTENT */}
      <div className='py-4 px-3'>
        <div className='flex gap-2 bg-gray-100 rounded-xl p-3'>
          <Search color='#767D8A' />
          <input
            type='text'
            placeholder='Buscar productos'
            value={searchTerm}
            onChange={(e) => handleSearchProducts(e)}
            className='w-full outline-none border-none'
          />
        </div>
      </div>
      <div className="flex gap-3 pb-4 px-3 overflow-x-auto">
        {categoriesWithAll?.map((ctg: categoryList) => (
          <span
            key={ctg.id}
            className={`cursor-pointer py-1.5 px-3 rounded-4xl select-none
              ${onCategory === ctg.name ? 'bg-[#EC6D13] text-white' : 'bg-gray-100 text-[#414A56]'}
              `}
            onClick={() => handleProductsByCategory(ctg)}
          >
            {ctg.name}
          </span>
        ))}
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4">
        {filteredProducts && filteredProducts.length > 0 ? (
          filteredProducts.map((prd: productList) => (
            <CardProduct
              key={prd.id}
              imageUrl={prd.imageUrl}
              name={prd.name}
              price={prd.price}
            />
          ))
        ) : (
          <div className="col-span-full text-center text-gray-500 py-10 select-none">
            No se encontraron productos
          </div>
        )}
      </div>
    </section>
  )
}

export default Products;
