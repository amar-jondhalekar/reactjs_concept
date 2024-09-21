import { useEffect, useState } from "react";
import ProductItem from "./components/product-item";

// const dummyProductData = ['Product 1', 'Product 2', 'Product 3'];
const initialState = true;

function ProductList({name, city, listOfProducts}){
    // console.log(props);
    // const {name, city} = props;
    const [flag, setFlag] = useState(initialState);
    // useEffect() 
    const [count, setCount] = useState(0);
    const [changeStyle, setChangeStyle] = useState(false);
    function handleToggleText(){
        setFlag(!flag)
    }

    function handleIncreaseCount(){
        setCount(count + 1);
    }

    useEffect(() => {
        console.log('count changes');
        if(count == 10) setChangeStyle(true)
    }, [count]);

    console.log(changeStyle);

    useEffect(() => {
        document.title = `You clicked ${count} times.`;
        console.log('Run only once on page load.');
        return () => {
            console.log('component is unmounted -> some side effects here also');
        }
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
        <div>
            <button style={{backgroundColor: changeStyle ? 'black' : 'white', color: changeStyle ? 'white' : 'black'}} onClick={handleIncreaseCount}>Increase Count </button>
            <p>Count is {count}</p>
        </div>
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