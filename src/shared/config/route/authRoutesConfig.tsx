import { SignInPage } from "pages/SignInPage";
import { RouteProps } from "react-router-dom";

export enum AuthRoutes {
  SIGN_IN = "sign-in",
}

const RoutePath: Record<AuthRoutes, string> = {
  [AuthRoutes.SIGN_IN]: "/auth",
};

export const authRoutesConfig: Record<AuthRoutes, RouteProps> = {
  [AuthRoutes.SIGN_IN]: {
    path: RoutePath["sign-in"],
    element: <SignInPage />,
  },
};
