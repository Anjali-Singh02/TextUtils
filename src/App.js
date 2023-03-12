
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  return (
    <>
     <Navbar title ="TextUtils" />
    {/* default props */}
     {/* <Navbar/> */}

     <TextForm label="Enter text"/>
    </>
  );
}

export default App;
