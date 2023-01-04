const CartItemCard = (props) => {
    return <div className="flex justify-between  border-t-2 border-black m-2 pt-2" style={{ backgroundColor: "rgb(27,26,32)" }}>
      <div className="flex">
        <img className="w-20 mr-3" src={`../static/products/${props.item.img}_2.jpg`} alt="photos" />
        <div className="mt-4">
          <h4 className="text-white">{props.item.title}</h4>
          <h3 className="text-gray-400" >{props.item.availableSizes[0]} | {props.item.style}</h3>
          <h3 className="text-gray-400" >Quantity: {props.item.quantity}</h3>
        </div>
      </div>
      <div className="text-right mr-3">
        <button onClick={() => props.handleRemove(props.item.id, props.index)} className="font-bold not-italic text-lg">X</button>
        <p className="my-1 mb-3 text-amber-400">${props.item.price}</p>
        <div>
          <span className="p-1 px-2 text-lg bg-black text-white"><button onClick={() => props.handleIncrement(props.item, props.index)} >+</button></span>
          <span className="p-1 px-2 text-lg bg-black text-white"><button onClick={() => props.handleDecrement(props.item, props.index)}
  
            disabled={props.item.quantity === 1 ? true : false}>-</button></span>
        </div>
      </div>
    </div>
  }

export default CartItemCard;