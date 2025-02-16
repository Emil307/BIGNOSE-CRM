import { MainPage } from "pages/MainPage";
import { RouteProps } from "react-router-dom";

export enum AdminRoutes {
  MAIN = "main",
}

const RoutePath: Record<AdminRoutes, string> = {
  [AdminRoutes.MAIN]: "/dashboard",
};

export const adminRoutesConfig: Record<AdminRoutes, RouteProps> = {
  [AdminRoutes.MAIN]: {
    path: RoutePath.main,
    element: <MainPage />,
  },
};
