import type { ReactNode } from "react";
import { Route, Routes } from "react-router-dom";
import NotFoundPage from "./NotFoundPage";

export const RoutesWithNotFound = ({ children }:{ children: ReactNode }) => {
  return (
    <Routes>
      {children}

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default RoutesWithNotFound;
