import Header from "./components/Header";
import Footer from "./components/Footer";
import Content from "./components/Content";

function App() {
  return (
    <div className="px-[20vw] py-6">
      <Header />

      <div className="grid lg:grid-cols-4 grid-cols-2 gap-x-4 ">
        <Content />
      </div>

      <Footer />
    </div>
  );
}

export default App;
