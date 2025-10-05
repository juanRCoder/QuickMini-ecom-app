import { Minus, Plus, Trash2 } from "lucide-react"

type CartItem = {
  image: string;
  name: string;
  price: number;
}

export const CartItem = ({ image, name, price }: CartItem) => {
  return (
    <div className="flex gap-3">
      <div className="flex justify-center items-center rounded-xl">
        <img src={image} className="object-contain w-24 h-24 rounded-xl outline-1 outline-[#F3F4F6]" />
      </div>
      <div className="flex flex-col justify-between flex-1 gap-3">
        <div className="relative">
          <p className="font-semibold">{name}</p>
          <p className="text-[#B7BAC0]">${price.toFixed(2)}</p>
          <Trash2 color="#9095A0" className="absolute top-0 right-2" />
        </div>
        <div className="ml-auto flex items-center bg-[#F3F4F6] p-1.5 rounded-full">
          <Minus size={32} className="bg-white rounded-full p-1.5 cursor-pointer" />
          <span className="px-2 font-semibold w-10 text-center">1</span>
          <Plus size={32} color="#EC6D13" className="bg-white rounded-full p-1.5 cursor-pointer" />
        </div>
      </div>
    </div>
  )
}
