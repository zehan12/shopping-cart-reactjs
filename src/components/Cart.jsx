import CartHeader from "./CartHeader"
import CartItemCard from "./CartIemCard"
import CartToOpenButton from "./CartToOpenButton"
import Checkout from "./Checkout"
import CloseButton from "./CloseButton"
import EmptyCartText from "./EmptyCartText"

const Cart = ({ isCartOpen, handleCartToggle, cart, handleIncrement, handleDecrement, handleRemove, total }) => {
    let amount = total(cart)
    return <div>
        {isCartOpen ?
            <div className="flex fixed right-1 max-h-screen	">
                <CloseButton handleCartToggle={handleCartToggle} />
                <div className=" w-full h-screen" style={{ backgroundColor: "rgb(27,26,32)" }}>
                    <CartHeader count={cart.length} />
                    <div className="mt-10 overflow-y-scroll p-3 mx-3x" style={{ height: "63%", backgroundColor: "rgb(27,26,32)" }}>
                        {
                            cart.length === 0 ? <EmptyCartText />
                                : cart.map((item, index) => <CartItemCard
                                    item={item}
                                    index={index}
                                    key={item.id}
                                    handleIncrement={handleIncrement}
                                    handleDecrement={handleDecrement}
                                    handleRemove={handleRemove}
                                />
                                )
                        }
                    </div>
                    <Checkout amount={amount} />
                </div>
            </div>
            :
            <CartToOpenButton handleCartToggle={handleCartToggle} length={cart.length} />
        }
    </div>

}

export default Cart;