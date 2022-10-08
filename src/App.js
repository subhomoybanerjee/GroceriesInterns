import Header from "./components/Layout/Header";
import Groceries from "./components/Items/Groceries";
import CartProvider from "./Store/CartProvider";


function App() {

  return (
    <CartProvider>

      <Header />
      <main>
        <Groceries />
      </main>

    </CartProvider>
  );
}

export default App;
