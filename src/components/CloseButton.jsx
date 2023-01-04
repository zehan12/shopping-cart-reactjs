export default function CloseButton({ handleCartToggle }) {
    return <div className=" text-white pt-3 pb-4 w-14 pl-5 h-12" style={{ backgroundColor: "rgb(27,26,32)" }}>
        <button onClick={handleCartToggle}>X</button>
    </div>
}