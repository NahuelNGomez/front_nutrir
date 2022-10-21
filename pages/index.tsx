import type { NextPage } from "next";
import LayoutAuth from "../components/LayoutAuth";

export { getServerSideProps } from "../src/contexts/store";

const Home: NextPage = () => {
  return (
    <div>
      <LayoutAuth>
        
      </LayoutAuth>
    </div>
  );
};

export default Home;
