import Header from "./Header";
import CartOverview from "../features/cart/CartOverview";
import { Outlet, useNavigation } from "react-router-dom";
import Spinner from "./Spinner";

export default function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto] ">
      {isLoading && <Spinner />}
      <Header />
      <div className="overflow-scroll my-5">

      <main className=" max-w-3xl mx-auto ">
        <Outlet />
      </main>
      </div>
      <CartOverview />
    </div>
  );
}
