const CartHeader = ({ count }) => {
    return <>
      <div className="pl-52 pr-52 mt-12 flex">
        <div>
          <img className="w-12 mr-5 " src="../static/bag-icon.png" alt="cart" />
          <span className="absolute top-16 mt-5 ml-7 bg-yellow-400 text-black rounded-full pl-2 pr-2"> {count}</span>
        </div>
        <h2 className="text-white mt-2">CART</h2>
      </div>
    </>
  }
  
export default CartHeader;