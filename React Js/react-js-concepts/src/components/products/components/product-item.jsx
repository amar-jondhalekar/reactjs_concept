import styles from './product-item.module.css'

function ButtonComponent(){
    console.log(styles);
    return <button className={styles.buttonStyle}> Click </button>
}

function ProductItem({singleProuctItem, key}) {
    return(
        <div style={{padding: '20px', border: '2px solid red', marginBottom: '10px'}} key={key}>
            <p className={styles.productTitle}> {singleProuctItem} </p>
            <ButtonComponent/>
        </div>
    );
}
export default ProductItem;