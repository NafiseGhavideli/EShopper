import { useNavigation } from "react-router-dom";
import HomeContent from "../features/HomeContent";
import Loader from "../ui/Loader";


function Home() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div className="relative">
      {isLoading && <Loader />}
      <HomeContent />
     
    </div>
  );
}

export default Home;
