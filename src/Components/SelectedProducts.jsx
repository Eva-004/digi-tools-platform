
const SelectedProducts = ({cartProduct,handleRemove}) => {
   
    return (
        <div className='flex justify-between p-5 bg-base-200 items-center'>
            <div className='flex gap-4 justify-between items-center'>
                <div>
                    <img src={cartProduct.icon} alt={cartProduct.name} />
                </div>
                <div className='space-y-2'>
                    <h2 className='text-lg font-semibold'>{cartProduct.name}</h2>
                    <span className='font-medium text-[#627382]'>${cartProduct.price}</span>
                </div>
            </div>
            <button onClick={()=>handleRemove(cartProduct)} className='font-bold
             text-[#FF3980] cursor-pointer'>
                Remove
            </button>
        </div>
    );
};

export default SelectedProducts;