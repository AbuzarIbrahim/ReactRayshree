import { Routes, Route } from "react-router-dom";
import SearchPatients from "../components/SearchPatients";
import Enquiries from "../components/Enquiries";
import Patients from "../components/Patients";
import AllPatients from "../components/AllPatients";
import SpineAppointments from "../components/SpineAppointments";
import PilesAppointments from "../components/PilesAppointments";
import PreviousOPDs from "../components/PreviousOPDs";
import MedicineManufacturer from "../components/MedicineManufacturer";
import MedicineCreate from "../components/MedicineCreate";
import MedicinePurchase from "../components/MedicinePurchase";
import MedicineSale from "../components/MedicineSale";
import MedicineStock from "../components/MedicineStock";
import CheckUpList from "../components/CheckUpList";
import Last25CheckUps from "../components/Last25CheckUps";
import DiagnosticCenter from "../components/DiagnosticCenter";
import Dashboard from "../components/Dashboard";
const AppRoutes = () => (
  <div className="flex h-screen w-full">
    <div className="flex-grow shadow-2xl rounded-3xl relative z-10 mt-3 mx-2 mb-2 overflow-hidden">
      <div className="h-full overflow-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-gray-300 hover:[&::-webkit-scrollbar-thumb]:bg-gray-400">
        <Routes>
          <Route path="" element={<Dashboard />} />
          <Route path="search" element={<SearchPatients />} />
          <Route path="Enquiries" element={<Enquiries />} />
          <Route path="/patients" element={<Patients />} />
          <Route path="/patients/all" element={<AllPatients />} />
          <Route path="/all-patients" element={<AllPatients />} />
          <Route
            path="opd-patients/todays-spine-appointment"
            element={<SpineAppointments />}
          />
          <Route
            path="opd-patients/todays-piles-appointment"
            element={<PilesAppointments />}
          />
          <Route path="opd-patients/previous-opds" element={<PreviousOPDs />} />
          <Route
            path="pharmacy/medicine-manufacturer"
            element={<MedicineManufacturer />}
          />
          <Route path="pharmacy/medicine-create" element={<MedicineCreate />} />
          <Route
            path="pharmacy/medicine-purchase"
            element={<MedicinePurchase />}
          />
          <Route path="pharmacy/medicine-sale" element={<MedicineSale />} />
          <Route path="pharmacy/medicine-stock" element={<MedicineStock />} />
          <Route path="checkup/check-up-list" element={<CheckUpList />} />
          <Route path="checkup/last-25-checkups" element={<Last25CheckUps />} />
          <Route
            path="checkup/diagnostic-center"
            element={<DiagnosticCenter />}
          />
        </Routes>
      </div>
    </div>
  </div>
);

export default AppRoutes;
