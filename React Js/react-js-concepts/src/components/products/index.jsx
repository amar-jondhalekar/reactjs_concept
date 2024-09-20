import ProductItem from "./components/product-item";

// const dummyProductData = ['Product 1', 'Product 2', 'Product 3'];

function ProductList({name, city, listOfProducts}){
    // console.log(props);
    // const {name, city} = props;
    return <div>
        <h4 className="title"> Ecomerce Product </h4>
        {/* {<ProductItem/>} */}
        <h4> Name is {name}, He/She is belongs to this city {city} </h4>
        <ul>
            {
                listOfProducts.map(
                (item, index) => 
               <ProductItem singleProuctItem={item} key={index}/>
            )
            }
        </ul>
    </div>
};

export default ProductList; 