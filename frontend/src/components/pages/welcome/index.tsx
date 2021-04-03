// NODE_MODULES
import { FC } from "react";

// COMPONENTS
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Hero, Feature, OurTeam } from "./sections";

export const Welcome: FC = () => {
  return (
    <div className="bg-neutral-100 dark:bg-neutral-900">
      <Header />
      <Hero />
      <Feature />
      <OurTeam />
      <Footer />
    </div>
  );
};
