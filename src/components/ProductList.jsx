import ProductCard from "./ProductCard";

const ProductList = (props) => {
    return <div className="w-full my-7 ml-2  flex flex-wrap items-baseline">
      {
        props.products.map((product) => <ProductCard
          img={product.sku}
          currencyFormat={product.currencyFormat}
          key={product.id}
          installments={product.installments}
          isFreeShipping={product.isFreeShipping}
          price={product.price}
          title={product.title}
          style={product.style}
          availableSizes={product.availableSizes}
          id={product.id}
          addItemInCart={props.AddToCart}
        />)
      }
    </div>
  }

  
export default ProductList;