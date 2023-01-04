export default function CartToOpenButton({ handleCartToggle, length  }) {
    return <div className="bg-black text-white absolute right-1 pr-8 pt-6 pb-6 pl-5">
        <button onClick={handleCartToggle}>
            <img className="w-12" src="../static/bag-icon.png" alt="cart" />
            <span className="absolute self-center top-14 left-14 bg-yellow-400 text-black rounded-full pl-2 pr-2"> {length} </span>
        </button>
    </div>
}