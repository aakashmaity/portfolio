import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Main from "@/components/Main";

export default function Home() {
  return (
    <>
      <div
        className="flex flex-col justify-between h-screen w-full bg-black overflow-hidden rounded-md">

        <Header/>

        <Main/>

        <Footer/>
      </div>
    </>
  );
}
