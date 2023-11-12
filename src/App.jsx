import Header from "./components/Header";
import Footer from "./components/Footer";
import Content from "./components/Content";

function App() {
  return (
    <div className="px-[20vw] py-[5vh]">
      <Header />
      <div className="grid grid-cols-4 gap-4 ">
        <Content />
      </div>
      <Footer />
    </div>
  );
}

export default App;
