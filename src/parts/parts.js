import Header from "./Header/Header";
import Demo from "./Demo/Demo";
import Banner from "./Banner/Banner";

function DefaultPart({ children }) {
  return (
    <div>
      <Header />
      <Demo />
      <Banner />
    </div>
  );
}

export default DefaultPart;
