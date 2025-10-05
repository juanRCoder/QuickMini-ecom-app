
type CardProductProps = {
  image: string;
  name: string;
  price: number;
}

export const CardProduct = ({ image, name, price }: CardProductProps) => {
  return (
    <div className='bg-white rounded-md shadow-sm flex flex-col justify-between'>
      <div className='flex justify-center items-center flex-1'>
        <img src={image} className='rounded-t-md object-contain' />
      </div>
      <div className='rounded-b-md bg-white pt-3 pb-2 px-2 font-semibold'>
        <p>{name}</p>
        <p className='text-sm text-[#EC6D13] font-semibold'>S/ {price.toFixed(2)}</p>
        <button className='bg-[#FDF0E7] text-[#EC6D13] py-1.5 px-3 rounded-md text-xs mt-2 cursor-pointer w-full'>
          Agregar al carrito
        </button>
      </div>
    </div>
  )
}
