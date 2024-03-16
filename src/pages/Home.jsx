import { useNavigation } from "react-router-dom";
import HomeContent from "../features/HomeContent";
import Loader from "../ui/Loader";


function Home() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div className="flex gap-10 ">
      {isLoading && <Loader />}
      <div className="basis-1/3"></div>
      <HomeContent />
     
    </div>
  );
}

export default Home;
