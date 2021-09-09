//components
import Header from "./components/header/Header.js";
import Home from "./components/home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cart from "./components/cart/Cart.js";
import Footer from "./components/footer/Footer.js";
import ContextProvider from "./context/ContextProvider";
import ProductDetail from "./components/itemDetail/ProductDetail.js";

function App() {
	return (
		<div className="App">
			<ContextProvider>
				<Router>
					<Header />
					<Switch>
						<Route exact path="/" component={Home} />
						<Route path="/cart" component={Cart} />
						<Route path="/product/:id" component={ProductDetail} />
					</Switch>
					<Footer />
				</Router>
			</ContextProvider>
		</div>
	);
}

export default App;
