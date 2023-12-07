import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserLayout } from "src/layouts/user";
import { HomePage } from "src/pages/home";
import { StartPage } from "src/pages/start";

export default function AuthRouterPage() {
  return (
    <UserLayout>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="*" element={<StartPage />} exact />
        </Routes>
      </BrowserRouter>
    </UserLayout>
  );
}
