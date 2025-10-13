import { Download, CreditCard, User2, Store } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Voucher = () => {
  const navigate = useNavigate()

  const items = [
    { name: "Refresco de cola", quantity: 2, price: 3.0 },
    { name: "Papas fritas", quantity: 1, price: 2.5 },
    { name: "Barra de chocolate", quantity: 1, price: 1.5 },
  ]

  return (
    <section className="relative max-w-7xl mx-auto outline-1 bg-[#F3F4F6] text-gray-800 min-h-screen flex flex-col">
      <div className='bg-white flex items-center justify-between p-4 shadow-sm'>
        <h2 className="text-2xl text-center flex-1 font-semibold">Voucher</h2>
        <Download className='absolute right-4 cursor-pointer' />
      </div>
      <div className="flex-1 flex items-center justify-center my-10">
        <div className="bg-white w-full mx-4 rounded-2xl max-w-md shadow-sm">
          <div className="flex flex-col gap-1 py-5">
            <h3 className="text-xl text-center font-semibold">EasyStore</h3>
            <p className="text-sm text-center text-gray-400">Av. Siempre Viva 742</p>
          </div>
          <p className="text-sm text-center text-gray-400 border-b border-dashed border-gray-300 pb-5 mx-4">
            15 de mayo de 2024, 15:30
          </p>
          <div className="flex flex-col gap-2 py-5 border-b border-dashed border-gray-300 mx-4">
            {items.map((item, index) => (
              <div key={index} className="grid grid-cols-[1fr_auto] items-center mx-4 gap-x-2">
                <p className="text-gray-500">
                  {item.name} x{item.quantity}
                </p>
                <p>S/{item.price.toFixed(2)}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-2 pt-5 pb-2 border-b border-gray-300 mx-4">
            <div className="text-center flex justify-between mx-4">
              <p className="text-gray-500">Subtotal</p>
              <p>S/7.00</p>
            </div>
            <div className="text-center flex justify-between mx-4">
              <p className="text-gray-500">Costo de envio</p>
              <p>S/1.00</p>
            </div>
          </div>
          <div className="text-center flex justify-between mx-4 font-bold mb-5 px-4 pt-3 pb-5 border-b border-dashed border-gray-300">
            <p>Total</p>
            <p>S/8.00</p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 mx-4">
              <User2 size={32} color="#99a1af " />
              <div className="flex flex-col">
                <p>Sofia Rodiguez</p>
                <p className="text-gray-400 text-sm">Cliente</p>
              </div>
            </div>
            <div className="flex items-center gap-2 mx-4">
              <CreditCard size={32} color="#99a1af " />
              <div className="flex flex-col">
                <p>Transferencia - Interbank</p>
                <p className="text-gray-400 text-sm">Metodo de pago</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center mt-10 mb-4">
            <p>Pedido #12345</p>
            <p className="text-sm text-gray-400">!Gracias por tu compra!</p>
          </div>
        </div>
      </div>
      <div className='bg-white flex items-center justify-between p-4'>
        <div className="px-3 w-full">
          <button onClick={() => navigate('/')} className="flex justify-center items-center gap-2 cursor-pointer bg-[#EC6D13] text-white py-3 px-3 rounded-md text-sm w-full">
            <Store /> Volver a la tienda
          </button>
        </div>
      </div>
    </section>
  )
}

export default Voucher;