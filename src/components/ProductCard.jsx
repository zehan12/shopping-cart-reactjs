

const ProductCard = ({ img, currencyFormat, installments, isFreeShipping, price, title, addItemInCart, style, availableSizes, id }) => {
    let items = { img, currencyFormat, installments, isFreeShipping, price, title, style, availableSizes, id }
    let amount = String(price).split(".")
    return <div className=" mb-10 mx-4 text-center w-52">
      {isFreeShipping &&
        <p className="absolute bg-black text-white text-xs font-normal subpixel-antialiased px-2 ml-28 pl-3 tracking-tight">
          Free shipping</p>
      }
      <img onError={(err) => console.log(err)} src={`../static/products/${img}_1.jpg`}
        // onMouseOver={e =>{ e.target.src=`../static/obiONE.jpeg` }}
        // onMouseOut={e => e.target.src=`../static/products/${img}_1.jpg`}
        alt="img"
      />
      <div className="my-2">
        <h4 className="text-sm font-normal  pt-4 px-4 mb-3" style={{ paddingBottom: title.length > 4 && title.length < 24 ? "20px" : "" }} >{title}</h4>
      </div>
      <div className="border-solid border-2 w-4 ml-24 my-2 border-amber-500"></div>
      <div className="flex items-baseline ml-16" >
        <p className="text-xs not-italic">{currencyFormat}</p>
        <p><b className="text-3xl">{amount[0]}</b>{amount[1] ? "." + amount[1] : ".00"}</p>
      </div>
      <div className="flex ml-16 text-gray-500">
        {installments ? <p> or {installments} x</p> : <p className="h-6"> </p>}
        <p className="font-bold">{installments > 0 ? currencyFormat + "" + (price / installments).toFixed(2) : ""}</p>
      </div>
      <button onClick={() => { addItemInCart(items) }} className="bg-black hover:bg-yellow-400 text-white text-sm mt-3 font-normal subpixel-antialiased py-3 px-16 ">Add To Cart</button>
    </div>
  }

  export default ProductCard;