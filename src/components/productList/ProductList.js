import './productList.css'
import ProductCard from '../productCard/ProductCard';
import { useState } from 'react';


const products = [
  { title: 'Tito', price: 55, stock: 3, img: 'https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dwa9cb2d99/products/NI_DC9339-001/NI_DC9339-001-1.JPG'},
  { title: 'Titos', price: 525, stock: 8, img: 'https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dwa9cb2d99/products/NI_DC9339-001/NI_DC9339-001-1.JPG'},
  { title: 'Tito', price: 5, stock: 3, img: 'https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dwa9cb2d99/products/NI_DC9339-001/NI_DC9339-001-1.JPG'},
  { title: 'Tito', price: 55, stock: 3, img: 'https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dwa9cb2d99/products/NI_DC9339-001/NI_DC9339-001-1.JPG'},
  { title: 'Tito', price: 55, stock: 3, img: 'https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dwa9cb2d99/products/NI_DC9339-001/NI_DC9339-001-1.JPG'},
  { title: 'Tito', price: 55, stock: 3, img: 'https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dwa9cb2d99/products/NI_DC9339-001/NI_DC9339-001-1.JPG'},
  { title: 'Tito', price: 55, stock: 3, img: 'https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dwa9cb2d99/products/NI_DC9339-001/NI_DC9339-001-1.JPG'},
  { title: 'Tito', price: 55, stock: 3, img: 'https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dwa9cb2d99/products/NI_DC9339-001/NI_DC9339-001-1.JPG'},
  { title: 'Tito', price: 55, stock: 3, img: 'https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dwa9cb2d99/products/NI_DC9339-001/NI_DC9339-001-1.JPG'}
]


const getProducts = new Promise( (resolve, reject)=>{
  setTimeout( ()=>{
    resolve(products)
  },2500 )

} )


const ProductList = () => {
  const [productList, setProductList] = useState([])
  getProducts.then(result => {
    setProductList(result)
  })
  return(
    <div className='product-container'>
      {productList.map( (p) => {
        return <ProductCard price={p.price} stock={p.stock} img={p.img} title={p.title}/>
      })
    }
{/* 
      <ProductCard price={77000} stock={4} title="Nike Lebron XXI" img="https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dwa9cb2d99/products/NI_DC9339-001/NI_DC9339-001-1.JPG"  />
      <ProductCard price={77000} stock={8} title="Nike Lebron XXI" img="https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dwa9cb2d99/products/NI_DC9339-001/NI_DC9339-001-1.JPG"  />
      <ProductCard price={77000} stock={5} title="Nike Lebron XXI" img="https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dwa9cb2d99/products/NI_DC9339-001/NI_DC9339-001-1.JPG"  />
      <ProductCard price={77000} stock={5} title="Nike Lebron XXI" img="https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dwa9cb2d99/products/NI_DC9339-001/NI_DC9339-001-1.JPG"  />
      <ProductCard price={77000} stock={5} title="Nike Lebron XXI" img="https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dwa9cb2d99/products/NI_DC9339-001/NI_DC9339-001-1.JPG"  />
      <ProductCard price={77000} stock={2} title="Nike Lebron XXI" img="https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dwa9cb2d99/products/NI_DC9339-001/NI_DC9339-001-1.JPG"  />
      <ProductCard price={77000} stock={6} title="Nike Lebron XXI" img="https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dwa9cb2d99/products/NI_DC9339-001/NI_DC9339-001-1.JPG"  />
      <ProductCard price={77000} stock={5} title="Nike Lebron XXI" img="https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dwa9cb2d99/products/NI_DC9339-001/NI_DC9339-001-1.JPG"  />
     */}


    </div>
    

  );
}

export default ProductList; 
