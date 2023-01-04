const Sidebar = (props) => {
    let sizes = props.sizes.reduce((acc,cv)=>acc.concat(cv.availableSizes),[]).filter((v, i, a) => a.indexOf(v) === i)
    let classes = "cursor-pointer bg-gray-200 p-4 m-3 pr-3 text-xs a"
    return <div className="subpixel-antialiased text-normal p-14 h-screen w-80 ">
      <h3>Sizes:</h3>
      <div className="flex flex-wrap mt-5 w-60">
        {
          sizes.map((size, i) => {
            let activeClass = props.activeSize.includes(size) ? "active " : "";
            return <button key={size} onClick={() => { props.handleSize(size) }} className={activeClass + classes} style={{ heigth: "60px", width: "45px", borderRadius: "50%" }} >{size}</button>
          })
        }
      </div>
      <p className="mt-5 text-xs subpixel-antialiased">follow me on Github if you like this layout my username is @zehan12</p>
    </div>
  }

  export default Sidebar;