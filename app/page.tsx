import { Button } from "@/components/ui/button";
import Link from "next/link";
import HomePageSection from "../page-modules/home/HomePageSection";

export default function Home() {
  return (
    <div>
    <section className="container grid gap-6 py-8 md:py-10 h-[calc(100vh-150px)]">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground">
          Accessible and customizable components that you can copy and paste
          into your apps. Free. Open Source. And Next.js 13 Ready.
        </p>
      </div>
      
      {/* <HomePageSection /> */}
    </section>

    <section className="container grid gap-6 pb-8 pt-6 md:py-10 h-[calc(100vh-150px)]">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground">
          Accessible and customizable components that you can copy and paste
          into your apps. Free. Open Source. And Next.js 13 Ready.
        </p>
      </div>

      <HomePageSection />
    </section>
    </div>
    // </main>
  );
}
