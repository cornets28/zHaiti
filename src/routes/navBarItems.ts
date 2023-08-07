import { lazy } from 'react';
import type { ComponentType } from 'react';
import type { LazyExoticComponent } from 'react';

type NavItemsTypes = {
    exact?: boolean;
    path: string ;
    component: ComponentType<{}> | LazyExoticComponent<ComponentType<{}>>;
    routes?: NavItemsTypes;
    label?: string;
}[];


export const navBatItems: NavItemsTypes = [
    {
        exact: true,
        label: 'Kiyès Nou Ye',
        path: '/',
        component: lazy(() => import('../views/home/page/Home')),
    },
    {
        exact: true,
        label: 'Atik',
        path: '/atik',
        component: lazy(() => import('../views/articles/page/Articles')),
    },
    {
        exact: true,
        label: 'Aktyalite',
        path: '/nouvèl',
        component: lazy(() => import('../views/news/page/News'))
    },
    // {
    //     exact: true,
    //     label: 'Chanèl',
    //     path: '/chanèl',
    //     component: lazy(() => import('../views/channels/page/Channels'))
    // },
    {
        exact: true,
        label: 'Kontakte Nou',
        path: '/kontak',
        component: lazy(() => import('../views/contact/page/Contact')),
    },
    {
        exact: true,
        label: 'Pale Sou Rezo Yo',
        path: '/signin',
        component: lazy(() => import('../views/signIn/page/SignIn')),
    },
];

