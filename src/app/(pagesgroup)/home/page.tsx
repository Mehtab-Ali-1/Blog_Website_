"use client"
import React from "react";
import Image from "next/image";
import Typed from 'typed.js';
import PricingSection from "../../../components/pricing";
import WellComeHome from "../../../components/wellcomeHome";
import ShowMyBlog from "../../../components/showMyBlog";

export default function Home () {

 const el = React.useRef(null);
  
React.useEffect(() => {
  const typed = new Typed(el.current, {
    strings: ['Web Development', 'Mobile Development', 'Web Designing', 'UI/UX Design', 'Cloud Computing', 'Software Engineering', 'Data Science', 'Artificial Intelligence'],
    typeSpeed: 60,
    loop: true,
    backSpeed: 60,
    backDelay: 2000
  });
    
  return () => {
    // Destroy Typed instance during cleanup to stop animation
    typed.destroy();
  };
}, []);
  
return (
    <main>
    <section className="container px-8 py-10 mx-auto lg:h-128 lg:space-x-8 lg:flex lg:items-center ">
      <div className="w-full text-center lg:text-left lg:w-1/2 lg:-mt-8">
        <h1 className="text-3xl leading-snug text-gray-800 dark:text-gray-200 md:text-4xl">
          A <span className="font-semibold">free repository</span> for community{" "}
          <br className="hidden lg:block" /> components using{" "}
          <span className="font-bold border-b-4 border-gray-600" ref={el} />

        </h1>

        <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
          Open source Tailwind UI components and templates to{" "}
          <br className="hidden lg:block" /> bootstrap your new apps, projects
          or landing sites!
        </p>

        <div className="mt-6 bg-transparent border rounded-lg dark:border-gray-700 lg:w-2/3 focus-within:border-primary focus-within:ring focus-within:ring-primary dark:focus-within:border-primary focus-within:ring-opacity-20">
          <form
            action="https://www.creative-tim.com/twcomponents/search"
            className="flex flex-wrap justify-between md:flex-row"
          >
            
          </form>
        </div>
      </div>

      <div className="w-full mt-4 lg:mt-0 lg:w-1/2">
        <Image
          src="https://www.creative-tim.com/twcomponents/svg/website-designer-bro-purple.svg"
          alt="tailwind css components"
          width={500}
          height={500}
          className="w-full h-full max-w-md mx-auto"
          priority
        />
      </div>
    </section>

    <section>
      <PricingSection />
    </section>

    <section>
      <WellComeHome/>
    </section>

    <section>
      <ShowMyBlog/>
    </section>

    </main>
  );
};
