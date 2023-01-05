import React from "react";
import products from "./data/products";
import Sidebar from "./components/Sidebar";
import Head from "./components/Head";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart"
import { LoadingSpinner } from "./components/LoadingSpinner";

class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      isCartOpen: false,
      select: "Select",
      products: [],
      activeSize: [],
      sorterdFilteredArray: [],
      LoadingSpinner: true,
      cart: JSON.parse(localStorage.getItem('cart')) || [],
    }
  }

  handleCartToggle = () => {
    console.log(this.state.isCartOpen, "cart open")
    this.setState(prevState => ({
      isCartOpen: !prevState.isCartOpen
    }))
  }

  handleSize = (size) => {
    let arr = [];
    if (this.state.activeSize.includes(size)) {
      arr = this.state.activeSize.filter((v) => v !== size)
    } else {
      // arr = this.state.activeSize.concat(size);
      arr = [...this.state.activeSize, size];
    }
    this.setState({ activeSize: arr }, () => this.sortData());

  }

  handleSort = ({ target }) => {
    let { name, value } = target
    this.setState({ [name]: value, products: [] }, () => this.sortData());
  }

  componentDidMount() {
    setTimeout(() => { this.setState({ LoadingSpinner: false }) }, 1000);
    console.log("mount")
  }

  componentDidUpdate() {
    console.log("update")
  }

  componentWillUnmount() {
    console.log("unmont")
  }

  addItemInCart = (item) => {
    let arr = this.state.cart
    let itemFound = arr.find(ele => ele.id === item.id)
    if (itemFound) {
      itemFound.quantity = itemFound.quantity + 1;
    } else {
      item.quantity = 1;
      arr.push(item)
    }
    this.setState({ cart: arr });
    window.localStorage.setItem("cart", JSON.stringify(this.state.cart))
  }

  handleRemove = (id, index) => {
    this.setState(prevState => ({
      cart: prevState.cart.filter(item => item.id !== id)
    }));
  }

  handleIncrement = (item, index) => {
    const updatedCart = [...this.state.cart]
    updatedCart[index].quantity++
    this.setState({ cart: updatedCart })
  }

  handleDecrement = (item, index) => {
    const updatedCart = [...this.state.cart]
    updatedCart[index].quantity--
    this.setState({ cart: updatedCart })
  }

  getTotalPrice = (cart) => {
    let SUBTOTAL = 0;
    let installments = 0;
    if (cart.length === 0) {
      return 0
    } else {
      SUBTOTAL = cart.reduce((total, item) => {
        if (installments < item.installments) {
          installments = item.installments;
        }
        total += (item.price * item.quantity)
        return total
      }, 0)
    }
    return [SUBTOTAL.toFixed(2), installments, (SUBTOTAL / installments).toFixed(2)]

  }


  sortData = () => {
    const value = this.state.select;
    this.setState({ LoadingSpinner: true })
    let allProduct = products;
    let filterProduct = allProduct
    if (this.state.activeSize.length > 0) {
      filterProduct = allProduct.filter((product) => product.availableSizes.some((size) => this.state.activeSize.includes(size)))
    }
    if (value === "H2L") {
      filterProduct.sort((a, z) => parseFloat(z.price) - parseFloat(a.price))
      setTimeout(() => { this.setState({ sorterdFilteredArray: filterProduct, LoadingSpinner: false }) }, 500);
    }
    if (value === "L2H") {
      filterProduct.sort((a, z) => parseFloat(a.price) - parseFloat(z.price))
      setTimeout(() => { this.setState({ sorterdFilteredArray: filterProduct, LoadingSpinner: false }) }, 500);
    }
    if (value === "Select") {
      setTimeout(() => { this.setState({ sorterdFilteredArray: filterProduct, LoadingSpinner: false }) }, 500);
    }
  }


  render() {
    console.log("render")
    let displayProduct = this.state.sorterdFilteredArray.length === 0 ? products : this.state.sorterdFilteredArray;
    return (

      <div className="flex">
        <Sidebar
          sizes={products}
          activeSize={this.state.activeSize}
          handleSize={this.handleSize}
        />

        <main className="flex flex-col mt-14 w-2/3">
          <Head
            count={displayProduct.length}
            onChange={this.handleSort}
          />

          {this.state.LoadingSpinner ? <LoadingSpinner /> :
            <ProductList
              products={displayProduct}
              AddToCart={this.addItemInCart}
            />}
        </main>

        <Cart
          handleCartToggle={this.handleCartToggle}
          isCartOpen={this.state.isCartOpen}
          cart={this.state.cart}
          handleIncrement={this.handleIncrement}
          handleDecrement={this.handleDecrement}
          handleRemove={this.handleRemove}
          total={this.getTotalPrice}
        />
      </div>
    );
  }
}


export default App;


