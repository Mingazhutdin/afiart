import { Home } from "pages/HomePage";
import { NotFoundPage } from "pages/NotFoundPage";
import { RouteProps } from "react-router-dom";


export enum AppRoutes {
    HOME = "home",
    NOTFOUND = "not_found"
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.HOME]: "/",
    [AppRoutes.NOTFOUND]: "*"
};

export const routerConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.HOME]: {
        path: RoutePath.home,
        element: <Home />
    },
    [AppRoutes.NOTFOUND]: {
        path: RoutePath.not_found,
        element: <NotFoundPage />
    }
};