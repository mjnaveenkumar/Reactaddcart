import React ,{useState}from 'react';
import './App.css';
const PAGE_PRODUCTS='products';
const  PAGE_CART='cart';



function App() {
  const [cart,setCart]=useState([]);
  const [page,setPage]=useState(PAGE_PRODUCTS);
  const [products]=useState([
    {
name:'Riding jacket',
cost:'$199.99',
image:'https://bikesterglobal.com/shop/wp-content/uploads/2022/09/1-251.png'
    },
    {
      name:'Panda Doll',
      cost:'$59.29',
      image:'https://spng.pngfind.com/pngs/s/181-1814002_bear-bonnie-stuffed-toy-hd-png-download.png'

    },
    {
      name:'bmw 1000rr',
      cost:'$19999.99',
      image:'https://m.media-amazon.com/images/I/717VnY8taqL._SL1500_.jpg'
      
    },
    {
      name:'Laptop',
      cost:'$1333.99',
      image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYWwJbKCdAOxvCMpxHUPMsdWIEaSy2i4GN9A&usqp=CAU'
      
    },
  ]);
  const addtocart=(product)=>{
  

    setCart([...cart,{ ...product}]);
  };
  const removefromcart =(producttoremove) =>{
    setCart(cart.filter((product)=>product !== producttoremove));

  };
  const navigateto = (nextPage) =>{
    setPage(nextPage);

  };

  const renderproducts = () =>(

    
      <>
    
      <h1>Products</h1>
      <div className='products'> 
      {products.map((product,idx) =>(
      <div className='product' key={idx}>
       <h3>{product.name}</h3>
       <h4>{product.cost}</h4>
       <img src={product.image}/>
 <button onClick={() => addtocart(product)}>Add to Cart</button> 
   
    </div>
      ))}
      </div>
      </>
    );
    

    const rendercart =() =>(
      <>
      <h1>Cart</h1>
      <div className="products">
        {cart.map((product,idx) =>(
          <div className='product' key={idx}>
            <h3>{product.name}</h3>
            <h4>{product.cost}</h4>
            <img src={product.image} alt={product.image}/>
           <button onClick={()=> removefromcart(product)}>Remove</button>
            </div>
        ))}
      </div>
    </>
    );


return (
  <div className="App">
    <header>
      
     <button onClick={() => navigateto(PAGE_PRODUCTS)}>Products</button>    
     <button onClick={() => navigateto(PAGE_CART)}>Go to cart({cart.length})</button>
    </header>
  {page === PAGE_PRODUCTS && renderproducts()}
  {page === PAGE_CART && rendercart()}
  
    </div>
);
}
    

 





export default App;
 



