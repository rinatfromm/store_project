export const RenderBasketDiscountCart = ({product, styles}) => {
    return (
        <div className={styles.productsCardsContainer}>
            <div className={styles.productDiscount}>
                <img
                    src={`http://localhost:3333${product.image}`}
                    alt={product.title}
                />
            </div>
            <p className={styles.productInfo}>{product.title}</p>
            <div className={styles.priceContainer}>
                <p className={styles.productDiscontPrice}>{`${"$"}${product.discont_price
                    }`}</p>
                <p className={styles.productPrice}>{`${"$"}${product.price}`}</p>
            </div>
        </div>
    );
};