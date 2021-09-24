import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Header from "./components/Header";
import ProductList from "./components/ProductList";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  // cara gunakan useState
  // const [title, setTitle] = useState("Welcome to My App")
  // const [age, setAge] = useState(20)
  // const link = "https://mfikri.com"

  const [products, setProduct] = useState([
    {id:1, title: 'Product 1', price : 899},
    {id:2, title: 'Product 2', price : 239},
    {id:3, title: 'Product 3', price : 649},
    {id:4, title: 'Product 4', price : 889},
    {id:5, title: 'Product 5', price : 649}
  ])

  const deleteProduct = (productId) => {
    const newProducts = products.filter(product => product.id !== productId)
    setProduct(newProducts)
  }

  const [name, setName] = useState('dadan')

  useEffect(() => {
    console.log('useEffect Running..') 
  }, [name])
  
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <ProductList products={products} deleteProduct={deleteProduct} />
          </Route>
          <Route path="/about">
              <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;