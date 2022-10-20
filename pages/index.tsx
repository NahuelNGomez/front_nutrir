import type { NextPage } from "next";
import LayoutAuth from "../components/LayoutAuth";
import Poll from "@components/utils/poll";

export { getServerSideProps } from "../src/contexts/store";

const Home: NextPage = () => {
  return (
    <div>
      <LayoutAuth>
        <Poll />
      </LayoutAuth>
    </div>
  );
};

export default Home;
