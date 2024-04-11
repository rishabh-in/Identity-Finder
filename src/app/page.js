'use client'

import Homepage from "./homepage/page";
import LayoutHOC from "@/utils/LayoutHOC";

export default function Home() {
  return (
    <LayoutHOC>
      <Homepage />
    </LayoutHOC>
  );
}
