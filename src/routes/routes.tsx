import { Suspense, lazy } from "react";
import type { ComponentType } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import type { LazyExoticComponent } from "react";

import Navbar from "../components/Layout/Navbar/Navbar";
import Footer from "../components/Layout/Footer/Footer";
import SignIn from "../views/signIn/page/SignIn";
import { Grid } from "@mui/material";

type RoutesTypes = {
  exact?: boolean;
  path: string;
  component: ComponentType<{}> | LazyExoticComponent<ComponentType<{}>>;
  routes?: RoutesTypes;
  label?: string;
}[];

export const renderRoutes = (routes: RoutesTypes = []): JSX.Element => (
  <Suspense fallback={<SignIn />}>
    <Navbar />
    <Grid
      className="container"
      sx={{
        md: 0,
        mb: { xs: 0, sm: 0, md: 0, lg: 45 },
      }}
    >
      <Routes>
        {routes.map((route, i) => {
          return (
            <Route key={i} path={route.path} element={<route.component />} />
          );
        })}
      </Routes>
    </Grid>
    <Footer />
  </Suspense>
);

const routes: RoutesTypes = [
  {
    exact: true,
    path: "/404",
    component: lazy(() => import("../views/errors/NotFoundView")),
  },
  {
    exact: true,
    label: "Kiyès Nou Ye",
    path: "/",
    component: lazy(() => import("../views/home/page/Home")),
  },
  {
    exact: true,
    label: "Atik",
    path: "/atik",
    component: lazy(() => import("../views/articles/page/Articles")),
  },
  {
    exact: true,
    label: "Sa k ap pase",
    path: "/nouvèl",
    component: lazy(() => import("../views/articles/page/Articles")),
  },
  {
    exact: true,
    label: "Kontakte Nou",
    path: "/kontak",
    component: lazy(() => import("../views/contact/page/Contact")),
  },
  {
    exact: true,
    label: "Chanèl",
    path: "/chanèl",
    component: lazy(() => import("../views/channels/page/Channels")),
  },

  {
    exact: true,
    label: "Sign Up",
    path: "/signup",
    component: lazy(() => import("../views/signUp/page/SignUp")),
  },
  {
    exact: true,
    label: "Sign In",
    path: "/signin",
    component: lazy(() => import("../views/signIn/page/SignIn")),
  },
  {
    path: "*",
    component: () => <Navigate to="/404" />,
  },
];

export default routes;
