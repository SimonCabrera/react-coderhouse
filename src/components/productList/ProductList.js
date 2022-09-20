import './productList.css'
import ProductCard from '../productCard/ProductCard';

const ProductList = () => {
  return(
    <div className='product-container'>

      <ProductCard price={77000} stock={4} title="Nike Lebron XXI" img="https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dwa9cb2d99/products/NI_DC9339-001/NI_DC9339-001-1.JPG"  />
      <ProductCard price={77000} stock={8} title="Nike Lebron XXI" img="https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dwa9cb2d99/products/NI_DC9339-001/NI_DC9339-001-1.JPG"  />
      <ProductCard price={77000} stock={5} title="Nike Lebron XXI" img="https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dwa9cb2d99/products/NI_DC9339-001/NI_DC9339-001-1.JPG"  />
      <ProductCard price={77000} stock={5} title="Nike Lebron XXI" img="https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dwa9cb2d99/products/NI_DC9339-001/NI_DC9339-001-1.JPG"  />
      <ProductCard price={77000} stock={5} title="Nike Lebron XXI" img="https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dwa9cb2d99/products/NI_DC9339-001/NI_DC9339-001-1.JPG"  />
      <ProductCard price={77000} stock={2} title="Nike Lebron XXI" img="https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dwa9cb2d99/products/NI_DC9339-001/NI_DC9339-001-1.JPG"  />
      <ProductCard price={77000} stock={6} title="Nike Lebron XXI" img="https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dwa9cb2d99/products/NI_DC9339-001/NI_DC9339-001-1.JPG"  />
      <ProductCard price={77000} stock={5} title="Nike Lebron XXI" img="https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dwa9cb2d99/products/NI_DC9339-001/NI_DC9339-001-1.JPG"  />
    


    </div>
    

  );
}

export default ProductList; 
