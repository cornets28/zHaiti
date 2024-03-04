/* eslint-disable react-hooks/exhaustive-deps */
import { Suspense, lazy } from "react";
import type { ComponentType } from "react";
import Navbar from "../components/Layout/Navbar/Navbar";
import Footer from "../components/Layout/Footer/Footer";
import AuthModal from "../components/Auth/AuthModal";
import { Route, Routes, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import userApi from "../api/modules/user.api";
import { setUser } from "../redux/features/userSlice";
import type { LazyExoticComponent } from "react";
import { Grid } from "../components/Grid/Grid";

type RoutesTypes = {
  exact?: boolean;
  path: string;
  component: ComponentType<{}> | LazyExoticComponent<ComponentType<{}>>;
  routes?: RoutesTypes;
  label?: string;
}[];

const RenderRoutes = (): JSX.Element => {
  const dispatch = useDispatch();
  // @ts-ignore
  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    console.log("user: ", user);
    const authUser = async () => {
      const { response, err } = await userApi.getInfo();
      if (response) dispatch(setUser(response));
      if (err) dispatch(setUser(null));
    };

    authUser();
  }, [dispatch]);

  return (
    <>
      <AuthModal />
      <Suspense>
        <Navbar />
        <Grid
          className="container"
          sx={{
            md: 0,
            mb: { xs: 0, sm: 0, md: 0, lg: 45 },
          }}
        >
          <Routes>
            {routes.map((route: any, i: number) => {
              return (
                <Route
                  key={i}
                  path={route.path}
                  element={<route.component />}
                />
              );
            })}
          </Routes>
        </Grid>
        <Footer />
      </Suspense>
    </>
  );
};

export default RenderRoutes;

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
    label: "Aktyalite",
    path: "/nouvèl",
    component: lazy(() => import("../views/news/page/News")),
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
    label: "Atik",
    path: "/Atik-yo/:id",
    component: lazy(() => import("../views/article/page/Article")),
  },
  {
    exact: true,
    label: "Espò",
    path: "/aktyalite/espò-yo/:id",
    component: lazy(() => import("../views/singleNews/page/SingleNews")),
  },

  // TODO: add the correct path
  {
    exact: true,
    label: "Aktyalite",
    path: "/aktyalite/ayisyen-enpotan-yo/:id",
    component: lazy(() => import("../views/singleNews/page/SingleNews")),
  },

  // TODO: add the correct path
  {
    exact: true,
    label: "Aktyalite",
    path: "/aktyalite/edikasyon/:id",
    component: lazy(() => import("../views/singleNews/page/SingleNews")),
  },
  // TODO: add the correct path
  {
    exact: true,
    label: "Aktyalite",
    path: "/aktyalite/politik/:id",
    component: lazy(() => import("../views/singleNews/page/SingleNews")),
  },
  {
    exact: true,
    label: "kilti",
    path: "/aktyalite/kilti/:id",
    component: lazy(() => import("../views/singleNews/page/SingleNews")),
  },

  {
    exact: true,
    label: "Espo",
    path: "/aktyalite/espo/:id",
    component: lazy(() => import("../views/singleNews/page/SingleNews")),
  },

  {
    exact: true,
    label: "Lasyans",
    path: "/aktyalite/lasyans/:id",
    component: lazy(() => import("../views/singleNews/page/SingleNews")),
  },

  {
    exact: true,
    label: "Relijyon",
    path: "/aktyalite/relijyon/:id",
    component: lazy(() => import("../views/singleNews/page/SingleNews")),
  },

  {
    exact: true,
    label: "Sante",
    path: "/aktyalite/sante/:id",
    component: lazy(() => import("../views/singleNews/page/SingleNews")),
  },

  {
    exact: true,
    label: "Teknoloji",
    path: "/aktyalite/teknoloji/:id",
    component: lazy(() => import("../views/singleNews/page/SingleNews")),
  },

  {
    exact: true,
    label: "Espirityalite",
    path: "/aktyalite/espirityalite/:id",
    component: lazy(() => import("../views/singleNews/page/SingleNews")),
  },

  {
    exact: true,
    label: "Espo",
    path: "/espo",
    component: lazy(() => import("../views/sports/page/Sports")),
  },

  {
    exact: true,
    label: "Espo",
    path: "/espo",
    component: lazy(() => import("../views/sports/page/Sports")),
  },

  {
    exact: true,
    label: "Kilti",
    path: "/kilti",
    component: lazy(() => import("../views/cultures/page/Cultures")),
  },

  {
    exact: true,
    label: "Edikasyon",
    path: "/edikasyon",
    component: lazy(() => import("../views/educations/page/Educations")),
  },
  {
    exact: true,
    label: "Politik",
    path: "/politik",
    component: lazy(() => import("../views/politics/page/Politics")),
  },

  {
    exact: true,
    label: "Sign In",
    path: "/signin",
    component: lazy(() => import("../views/signIn/page/SignIn")),
  },

  {
    exact: true,
    label: "Lasyans",
    path: "/lasyans",
    component: lazy(() => import("../views/science/page/Science")),
  },
  {
    exact: true,
    label: "Relijyon",
    path: "/relijyon",
    component: lazy(() => import("../views/religion/page/Religion")),
  },
  {
    exact: true,
    label: "Sante",
    path: "/sante",
    component: lazy(() => import("../views/health/page/Health")),
  },
  {
    exact: true,
    label: "Teknoloji",
    path: "/teknoloji",
    component: lazy(() => import("../views/technologies/page/Technologies")),
  },
  {
    exact: true,
    label: "Espirityalite",
    path: "/espirityalite",
    component: lazy(() => import("../views/spiritualities/page/Spiritualities")),
  },

  {
    exact: true,
    label: "Prensip Ak Kondisyon",
    path: "/prensip-ak-kondisyon",
    component: lazy(() => import("../views/termsAndConditions/page/TermsAndConditions")),
  },

  {
    exact: true,
    label: "Pale Sou Rezo Yo",
    path: "/pale-sou-rezo-yo",
    component: lazy(
      () => import("../views/speakOutOnSocial/page/SpeakOutOnSocial")
    ),
  },

  {
    path: "*",
    component: () => <Navigate to="/404" />,
  },
];
