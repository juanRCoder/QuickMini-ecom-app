import { Minus, Plus, Trash2 } from "lucide-react"

type CartItem = {
  image: string;
  name: string;
  price: number;
}

export const CartItem = ({ image, name, price }: CartItem) => {
  return (
    <div className="flex gap-3 items-start">
      <div className="flex justify-center items-center rounded-xl">
        <img src={image} className="object-contain w-24 h-24 rounded-xl outline-1 outline-gray-200" />
      </div>
      <div className="flex flex-col justify-between flex-1">
        <div className="relative">
          <p className="font-semibold">{name}</p>
          <p className="text-gray-500">${price.toFixed(2)}</p>
          <Trash2 color="#9095A0" className="absolute top-2 right-2" />
        </div>
        <div className="ml-auto flex items-center bg-gray-100 p-1 rounded-xl">
          <Minus size={28} className="bg-white rounded-lg p-1 cursor-pointer" />
          <span className="px-2 font-semibold w-10 text-center">1</span>
          <Plus size={28} color="#EC6D13" className="bg-white rounded-lg p-1 cursor-pointer" />
        </div>
      </div>
    </div>
  )
}
