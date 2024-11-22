import { lazy } from "react";

const AdminLoginPage = lazy(() => import("./pages/AdminLoginPage"));

const ROUTES = {
  ADMIN: "/admin",
};

export const adminRoutes = [
  { path: ROUTES.ADMIN, element: <AdminLoginPage /> },
];
