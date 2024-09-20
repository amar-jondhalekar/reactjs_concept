import { useEffect, useState } from "react";
import ProductItem from "./components/product-item";

// const dummyProductData = ['Product 1', 'Product 2', 'Product 3'];
const initialState = true;

function ProductList({name, city, listOfProducts}){
    // console.log(props);
    // const {name, city} = props;
    const [flag, setFlag] = useState(initialState);
    function handleToggleText(){
        setFlag(!flag)
    }

    // useEffect() 
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `You clicked ${count} times.`;
        console.log('Run only once on page load.');
    }, [count]); // Effects run only when "count" changes

    return <div>
        <h4 className="title"> Ecomerce Product </h4>
        <p> You clicked {count} times. </p>
        <button onClick={() => setCount(count + 1)}> Click me </button>
        <button onClick={handleToggleText}> Toggle Text </button>
        {/* {<ProductItem/>} */}
        {
            flag ? (<h4> {name} and {city} </h4>) : <h4> Hello </h4>
        }
        {/* <h4> Name is {name}, He/She is belongs to this city {city} </h4> */}
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