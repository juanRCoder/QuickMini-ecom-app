import { ArrowLeft } from "lucide-react"
import { useNavigate } from "react-router-dom";
import { productCards } from "@/mocks/products";
import { CartItem } from "@/components/CartItem";

const Cart = () => {
  const navigate = useNavigate()

  const subTotal = productCards.reduce((acc, p) => acc + p.price, 0);
  return (
    <section className="max-w-7xl mx-auto outline-1 bg-white text-gray-800 min-h-screen flex flex-col px-3">
      <div className='flex items-center justify-between p-4'>
        <ArrowLeft onClick={() => navigate('/')} strokeWidth={3} className='cursor-pointer' />
        <h2 className="text-2xl text-center flex-1 font-semibold">Carrito</h2>
      </div>
      <div className='py-4 flex flex-col gap-6 flex-1'>
        {productCards.map((p, i) => (
          <CartItem key={i} image={p.image} name={p.name} price={p.price} />
        ))}
      </div>
      <div className="flex justify-between border-t-2 border-t-[#F3F4F6] pt-2 pb-6">
        <p>Subtotal</p>
        <p className="font-semibold">S/ {subTotal.toFixed(2)}</p>
      </div>
      <button onClick={() => navigate('/checkout')} className="cursor-pointer bg-[#EC6D13] text-white mb-4 py-3 px-3 rounded-md text-sm w-full">
        Pagar
      </button>
    </section>
  )
}

export default Cart;