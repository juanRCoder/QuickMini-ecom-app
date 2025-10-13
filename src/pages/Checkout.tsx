import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const navigate = useNavigate()

  return (
    <section className="relative max-w-7xl mx-auto outline-1 bg-white text-gray-800 min-h-screen flex flex-col">
      {/* HEADER */}
      <div className='flex items-center justify-between p-4 shadow-sm'>
        <ArrowLeft onClick={() => navigate('/cart')} strokeWidth={3} className='cursor-pointer' />
        <h2 className="text-2xl text-center flex-1 font-semibold">Finalizar Compra</h2>
      </div>
      {/* CONTENT */}
      <section className="flex flex-col gap-3 px-3 pt-3">
        <div className='gap-1 rounded-xl flex flex-col'>
          <label htmlFor="name" className="text-gray-500 text-sm">Nombre</label>
          <input
            id="name"
            type="text"
            placeholder="Ingresa tu nombre"
            className='w-full outline-none border-none bg-gray-100 p-2 rounded-lg'
          />
        </div>
        <div className='gap-1 rounded-xl flex flex-col'>
          <label htmlFor="phone" className="text-gray-500 text-sm">Número de teléfono</label>
          <input
            id="phone"
            type="text"
            placeholder="Ingresa tu número"
            className='w-full outline-none border-none bg-gray-100 p-2 rounded-lg'
          />
        </div>
      </section>
      {/* DELIVERY TYPE */}
      <section className="px-3">
        <h3 className="font-semibold my-4">Tipo de Entrega</h3>
        <div className="flex flex-col gap-4">
          <label className="flex items-center gap-2 cursor-pointer outline outline-gray-200 p-3 rounded-lg
          has-[input:checked]:outline-[#EC6D13] has-[input:checked]:outline-2">
            <input type="radio" name="delivery" value="local" className="hidden peer" />
            <span className="w-4 h-4 outline-1 outline-gray-300 rounded-full grid place-items-center
            peer-checked:bg-[#EC6D13] peer-checked:[&>span]:bg-white peer-checked:outline-none
          ">
              <span className="w-2 h-2 rounded-full" />
            </span>
            <span className="text-sm text-gray-700">Recogida local</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer outline outline-gray-200 p-3 rounded-lg
          has-[input:checked]:outline-[#EC6D13] has-[input:checked]:outline-2">
            <input type="radio" name="delivery" value="delivery" className="hidden peer" />
            <span className="w-4 h-4 outline-1 outline-gray-300 rounded-full grid place-items-center
            peer-checked:bg-[#EC6D13] peer-checked:[&>span]:bg-white peer-checked:outline-none
          ">
              <span className="w-2 h-2 rounded-full" />
            </span>
            <span className="text-sm text-gray-700">A domicilio</span>
          </label>
        </div>
      </section>
      {/* PAYMENT METHOD */}
      <section className="px-3">
        <h3 className="font-semibold my-4">Método de Pago</h3>
        <div className="flex flex-col gap-4">
          <label className="flex items-center gap-2 cursor-pointer outline outline-gray-200 p-3 rounded-lg
          has-[input:checked]:outline-[#EC6D13] has-[input:checked]:outline-2">
            <input type="radio" name="payment" value="cash" className="hidden peer" />
            <span className="w-4 h-4 outline-1 outline-gray-300 rounded-full grid place-items-center
            peer-checked:bg-[#EC6D13] peer-checked:[&>span]:bg-white peer-checked:outline-none
          ">
              <span className="w-2 h-2 rounded-full" />
            </span>
            <span className="text-sm text-gray-700">Efectivo</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer outline outline-gray-200 p-3 rounded-lg
          has-[input:checked]:outline-[#EC6D13] has-[input:checked]:outline-2">
            <input type="radio" name="payment" value="credit_card" className="hidden peer" />
            <span className="w-4 h-4 outline-1 outline-gray-300 rounded-full grid place-items-center
            peer-checked:bg-[#EC6D13] peer-checked:[&>span]:bg-white peer-checked:outline-none
          ">
              <span className="w-2 h-2 rounded-full" />
            </span>
            <span className="text-sm text-gray-700">Bancario</span>
          </label>
        </div>
      </section>
      {/* RESUMEN */}
      <div className="outline-1 outline-gray-200 m-3 mt-10 rounded-lg">
        <h3 className="font-semibold p-3">Resumen</h3>
        <div className="flex justify-between border-t-2 border-t-[#F3F4F6] py-2 mx-3 text-sm">
          <p>Total productos</p>
          <p>s/ 15.00</p>
        </div>
        <div className="flex justify-between border-t-2 border-t-[#F3F4F6] py-2 mx-3 text-sm">
          <p>Delivery</p>
          <p>s/ 2.00</p>
        </div>
        <div className="flex justify-between border-t-2 border-t-[#F3F4F6] py-2 mx-3 text-sm font-semibold">
          <p className="">Total</p>
          <p className="text-orange-500">s/ 2.00</p>
        </div>
      </div>
      <div className="px-3">
        <button onClick={() => navigate('/voucher')} className="cursor-pointer bg-[#EC6D13] text-white py-3 rounded-md text-sm w-full px-3 mb-6">
          Finalizar compra
        </button>
      </div>
    </section>
  )
}

export default Checkout;