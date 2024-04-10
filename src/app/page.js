import Header from "./components/Header";
import Homepage from "./pages/Homepage";
import Footer from "./components/Footer";
import { Fragment } from "react";

export default function Home() {
  return (
    <div>
      <Header />
      <Homepage />
      <Footer />
    </div>
  );
}
