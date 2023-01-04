export default function Checkout( {amount} ){
    return <div className="py-1" style={{ backgroundColor: "rgb(27,26,32)", boxShadow: " 0 -10px 20px -5px rgba(115,115,115,0.75)" }}>
        <div className="flex justify-between items-center	mx-2 pt-2 text-right text-gray-700 px-5 my-1 " >
            <div className="ml-3">
                <h3 className="text-gray-400">SUBTOTAL</h3>
            </div>
            <div className="mr-3">
                <p className="font-normal text-2xl text-amber-500">${amount[0]}</p>
                <p className="text-gray-400" >OR UP TO {amount[1]} x $ {amount[2]}</p>
            </div>
        </div>
        <div className="text-center mt-6 p-2">
            <button onClick={() => alert(`SUBTOTAL = $${amount[0]}`)} className="w-96 h-10 bg-black mb-5 text-white">CHECKOUT</button>
        </div>
    </div>
}