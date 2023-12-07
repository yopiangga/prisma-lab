import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserLayout } from "src/layouts/user";
import { StartPage } from "src/pages/start";

export default function UserRouterPage() {
  return (
    <UserLayout>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StartPage />} />

          <Route path="*" element={<StartPage />} exact />
        </Routes>
      </BrowserRouter>
    </UserLayout>
  );
}
