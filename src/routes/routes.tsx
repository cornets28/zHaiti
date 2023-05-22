import { Suspense, lazy } from 'react';
import type { ComponentType } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import type { LazyExoticComponent } from 'react';

// import Navbar from "../components/Layout/Navbar/Navbar";
import SignIn from "../views/signIn/page/SignIn";

type RoutesTypes = {
    exact?: boolean;
    path: string;
    component: ComponentType<{}> | LazyExoticComponent<ComponentType<{}>>;
    routes?: RoutesTypes;
    label?: string;
}[];

export const renderRoutes = (routes: RoutesTypes = []): JSX.Element => (
    <Suspense fallback={<SignIn />}>
        {/* <Navbar /> */}
        <div className='container'>
            <Routes>
                {routes.map((route, i) => {
                    return (
                        <Route
                            key={i}
                            path={route.path}
                            element={<route.component />}
                        />
                    );
                })}
            </Routes>
        </div>

    </Suspense>
);

const routes: RoutesTypes = [
    {
        exact: true,
        path: '/404',
        component: lazy(() => import('../views/errors/NotFoundView')),
    },
    {
        exact: true,
        label: 'FAST LEARNING',
        path: '/',
        component: lazy(() => import('../views/home/page/Home')),
    },
    {
        exact: true,
        label: 'PROGRAMS',
        path: '/programs',
        component: lazy(() => import('../views/articles/page/Articles')),
    },
   
    {
        exact: true,
        label: 'Sign Up',
        path: '/signup',
        component: lazy(() => import("../views/signUp/page/SignUp")),
    },
    {
        exact: true,
        label: 'Sign In',
        path: '/signin',
        component: lazy(() => import('../views/signIn/page/SignIn')),
    },
    {
        path: '*',
        component: () => <Navigate to="/404" />,
    },
];

export default routes;
