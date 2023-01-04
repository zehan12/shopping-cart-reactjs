const Head = (props) => {
    return <div className="flex justify-between subpixel-antialiased text-normal ml-2 px-2 ">
      <h4 className="pl-2">{props.count} Product(s) found</h4>
      <form>
        <label>Order By:</label>
        <select className="shadow leading-tight text-sm focus:none w-36 px-1 pr-0 py-2 mx-2 mr-1" name="select" onChange={props.onChange}  >
          <option value="Select">Select</option>
          <option value="L2H">Lowest to Highest</option>
          <option value="H2L">Highest to Lowest</option>
        </select>
      </form>
    </div>
  }

export default Head;