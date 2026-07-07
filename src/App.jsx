import Header from "./components/layout/Header"
import Home from "./pages/Home"
import Footer from "./components/layout/Footer";
import Background from "./components/layout/Background";

function App() {
	return (
		<div className="relative w-full min-h-screen overflow-hidden bg-bg text-text transition-colors duration-300">
			<Background />
			<Header />
			<Home />
			<Footer />
		</div>
	)
}

export default App;
