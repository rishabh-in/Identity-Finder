import Header from "./components/Header";
import Footer from "./components/Footer";
import { Fragment } from "react";
import Homepage from "./homepage/page";
import LayoutHOC from "@/utils/LayoutHOC";

export default function Home() {
  return (
    <LayoutHOC>
      <Homepage />
    </LayoutHOC>
  );
}
