import Image from "next/image";
import { Inter } from "next/font/google";
import { Seo } from "@/ui/components/seo";

export default function Home() {
  return (
  <>
    <h1>Hello world</h1>
    <Seo title="hello"/>
  </>
  );
}
