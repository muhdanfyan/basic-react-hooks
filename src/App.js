import { useState } from "react";
import Header from "./components/Header";

function App() {
  // cara gunakan useState
  const [title, setTitle] = useState("Welcome to My App")
  const [age, setAge] = useState(20)
  // const link = "https://mfikri.com"

  const [products, setProduct] = useState([
    {id:1, title: 'Product 1', price : 899},
    {id:2, title: 'Product 2', price : 239},
    {id:3, title: 'Product 3', price : 649},
    {id:4, title: 'Product 4', price : 889},
    {id:5, title: 'Product 5', price : 649}
  ])

  // const clickMe = (name) =>{
  //   console.log('Clicked '+ name)
  // }

  // const changeTitle = (name) =>{
  //   setTitle(name)
  //   setAge(40)
  // }

  return (
    <div>
      <Header />
      {/* materi 1 */}
      {/* <h1>{title}</h1> */}
      {/* <h1>{ age}</h1> */}
      {/* <a href={link}>Go To My Webiste</a> */}
      {/* <button onClick={ () => changeTitle('fikri') }>Click Me</button> */}
      {/* <button onClick={ () => changeTitle('Bisa berubah tawwa') }>Click Me</button> */}

      <ul>
        {products.map((product)=> (
          <li key={ product.id }>{ product.title } - { product.price }</li>
        ))}
      </ul>

    </div>
  );
}

export default App;