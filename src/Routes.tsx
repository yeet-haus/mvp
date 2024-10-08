import { useEffect } from "react";
import {
  Routes as Router,
  Route,
  useLocation,
  matchPath,
} from "react-router-dom";

import { ReactSetter } from "@daohaus/utils";
import { MULTI_DAO_ROUTER } from "@daohaus/moloch-v3-hooks";

import Dao from "./pages/Dao";
import { HomeContainer } from "./components/layout/HomeContainer";
import { DaoContainer } from "./components/layout/DaoContainer";
import UpdateSettings from "./pages/UpdateSettings";
import { Explore } from "./pages/Explore";
import { Launch } from "./pages/Launch";
import { Yeet } from "./pages/Yeet";
import { Success } from "./pages/Success";
import { YeetSuccess } from "./pages/YeetSuccess";

export const Routes = ({
  setDaoChainId,
}: {
  setDaoChainId: ReactSetter<string | undefined>;
}) => {
  const location = useLocation();
  const pathMatch = matchPath("molochv3/:daochain/:daoid/*", location.pathname);

  useEffect(() => {
    if (pathMatch?.params?.daochain) {
      setDaoChainId(pathMatch?.params?.daochain);
    }
    if (!pathMatch?.params?.daochain) {
      setDaoChainId(undefined);
    }
  }, [pathMatch?.params?.daochain, setDaoChainId]);

  return (
    <Router>
      <Route path="/" element={<HomeContainer />}>
        <Route index element={<Explore />} />
        <Route path="launch" element={<Launch />} />
        <Route path={`success/:daoId/:txHash`} element={<Success />} />
      </Route>
      <Route path={MULTI_DAO_ROUTER} element={<DaoContainer />}>
        <Route index element={<Dao />} />
        <Route path="yeet" element={<Yeet />} />
        <Route
          path="yeet/success/:lootReceived/:txHash"
          element={<YeetSuccess />}
        />
        <Route path="update" element={<UpdateSettings />} />
      </Route>
    </Router>
  );
};
