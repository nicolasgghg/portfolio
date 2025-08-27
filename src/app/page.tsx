import Footer from "@/components/footer";
import Header from "@/components/header";
import AboutMe from "./_components/aboutMe";
import Welcome from "./_components/welcome";

export default function Home() {
  return (
    <>
      <Header />
      <main className="w-full md:w-[98%] p-4 flex-1 border-2 border-zinc-200 dark:border-zinc-800 flex flex-col gap-4">
        <Welcome />
        <AboutMe />
      </main>
      <Footer />
    </>
  );
}
