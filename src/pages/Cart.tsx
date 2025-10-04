import { ArrowLeft } from "lucide-react"
import { useNavigate } from "react-router-dom";


export const Cart = () => {
  const navigate = useNavigate()

  return (
    <section className="max-w-7xl mx-auto outline-1 bg-white text-gray-800">
      <div className='flex items-center justify-between p-4 shadow-sm'>
        <ArrowLeft onClick={() => navigate('/')} strokeWidth={3} className='cursor-pointer' />
        <h2 className="text-2xl text-center flex-1 font-semibold">Carrito</h2>
      </div>
    </section>
  )
}

export default Cart;