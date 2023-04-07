import Image from "next/image";
import { Rubik } from "next/font/google";

const rubik = Rubik({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center space-y-8 p-24">
      <h1 className={`${rubik.className} text-5xl font-bold`}>
        Coming soon...
      </h1>
      <div className="">
        <Image
          src="/undraw_under_construction_-46-pa.svg"
          alt="under construction"
          width={517}
          height={318}
          priority
        />
      </div>
    </main>
  );
}
