import "./App.css";
import ProductList from "./ProductList";
import Form from "./Form";

function doSomthing() {
  console.log("button  clicked!");
}

function onClickDemo(e) {
  console.log("bye");
  console.log(e);
}

function App() {
  return (
    <div>
      <h1 style={{ textAlign: "center", fontFamily: "Arial" }}>Amazon Cards</h1>
      <h2>BlockBuster Deals | Shop Now</h2>
      <ProductList />
      <button onClick={doSomthing}>Click Me!</button>
      <p onClick={onClickDemo}>onClick Demo</p>
      <Form />
    </div>
  );
}

export default App;
