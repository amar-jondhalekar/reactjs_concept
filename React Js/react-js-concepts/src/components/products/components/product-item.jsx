
function ButtonComponent(){
    return <button> Click </button>
}

function ProductItem({singleProuctItem, key}) {
    return(
        <div key={key}>
            <p> {singleProuctItem} </p>
            <ButtonComponent/>
        </div>
    );
}
export default ProductItem;