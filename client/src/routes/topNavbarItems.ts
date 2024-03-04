import { lazy } from "react";
import type { ComponentType } from "react";
import type { LazyExoticComponent } from "react";

type TopNavItemsTypes = {
  exact: boolean;
  path: string;
  component: ComponentType<{}> | LazyExoticComponent<ComponentType<{}>>;
  routes?: TopNavItemsTypes;
  label: string;
}[];

export const topNavBatItems: TopNavItemsTypes = [
  {
    exact: true,
    label: "Kilti",
    path: "/kilti",
    component: lazy(() => import("../views/signIn/page/SignIn")),
  },

  {
    exact: true,
    label: "Espo",
    path: "/espo",
    component: lazy(() => import("../views/sports/page/Sports")),
  },

  {
    exact: true,
    label: "Edikasyon",
    path: "/edikasyon",
    component: lazy(() => import("../views/signIn/page/SignIn")),
  },
  {
    exact: true,
    label: "Politik",
    path: "/politik",
    component: lazy(() => import("../views/signUp/page/SignUp")),
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
    component: lazy(() => import("../views/technologies/page/Technology")),
  },

  {
    exact: true,
    label: "Espirityalite",
    path: "/espirityalite",
    component: lazy(() => import("../views/signIn/page/SignIn")),
  },

  {
    exact: true,
    label: "Prensip Ak Kondisyon",
    path: "/prensip-ak-kondisyon",
    component: lazy(
      () => import("../views/termsAndConditions/page/TermsAndConditions")
    ),
  },
];
