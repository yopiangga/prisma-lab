import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserLayout } from "src/layouts/user";
import { HomePage } from "src/pages/home";
import { MedicalRecordPage } from "src/pages/medical-record";
import { PatientDetailMedicalRecord } from "src/pages/patient-detail-medical-record";
import { PatientMedicalRecord } from "src/pages/patient-medical-record";
import { StartPage } from "src/pages/start";

export default function DoctorRouterPage() {
  return (
    <UserLayout>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/medical-record" element={<MedicalRecordPage />} />
          <Route
            path="/medical-record/patient/:id"
            element={<PatientMedicalRecord />}
          />
          <Route
            path="/medical-record/:id"
            element={<PatientDetailMedicalRecord />}
          />

          <Route path="*" element={<StartPage />} exact />
        </Routes>
      </BrowserRouter>
    </UserLayout>
  );
}
