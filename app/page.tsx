import Image from "next/image";
import Hello from "@/app/components/hello";

export default function Home() {
  console.log("what am I doing here? --SEVER/CLIENT?");
  return (
    <>
      <h1 className="text-3xl font-bolt underline">Welcome to next.js</h1>;
      <Hello />
    </>
  );
}
