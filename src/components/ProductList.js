function ProductList({products, deleteProduct}) {
    return (
        <ul>
            {products.map((product)=> (
            <li key={ product.id }>{ product.title } - { product.price }
            <button onClick={() => deleteProduct(product.id)}>Delete</button>
            </li>
            ))}
        </ul>

    )
}

export default ProductList