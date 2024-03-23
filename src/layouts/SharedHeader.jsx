import Header from "components/Header/Header";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Loader from "components/Loader";

const SharedHeader = () => {
  return (
    <>
      <Header />
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default SharedHeader;
