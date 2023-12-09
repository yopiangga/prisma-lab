import { useEffect, useState } from "react";
import imageUser from "src/assets/icons/avatar.png";
import { FiArrowLeft, FiHome } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { NavbarComponent } from "src/components/navbar";
import { BottomNavbarComponent } from "src/components/navbar/BottomNavbarComponent";
import { MedicalRecordServices } from "src/services/MedicalRecordServices";

export function MedicalRecordPage() {
  const navigate = useNavigate();
  const medicalRecordServices = new MedicalRecordServices();

  const [data, setData] = useState([]);

  const [toggle, setToggle] = useState(1);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await medicalRecordServices.getMedicalRecords();
    if (res) {
      console.log(res.data);
      setData(res.data);
    }
  };

  return (
    <div className="min-h-screen">
      <div className="w-full">
        <NavbarComponent
          title="Medical Records"
          type="dark"
          leftIcon={FiArrowLeft}
          handleLeft={() => {
            navigate(-1);
          }}
          rightIcon={FiHome}
          handleRight={() => {
            navigate("/");
          }}
        />
      </div>

      <div className="px-4 w-full mt-4">
        <div className="flex flex-row bg-primary-main p-1 rounded-md">
          <ToggleButton
            title="Un-Classified"
            status={1 == toggle}
            callback={() => setToggle(1)}
          />
          <ToggleButton
            title="Classified"
            status={2 == toggle}
            callback={() => setToggle(2)}
          />
        </div>
      </div>

      <div className="px-4 mt-4">
        <h4 className="text-black text-sm font-bold mb-2">List Patients</h4>
        {data.map((e, i) => {
          if (
            (toggle == 1 && e.diagnosis_doctor == "") ||
            (toggle == 2 && e.diagnosis_doctor != "")
          )
            return (
              <PatientComponent
                key={i}
                data={{
                  id: e.id,
                  name: e.patient_name,
                  status: e.diagnosis_ai,
                }}
                callback={(data) => {
                  navigate("/medical-record/" + data.id);
                }}
              />
            );
        })}

        {/* {data.map((e, i) => (
          <PatientComponent
            key={i}
            data={{
              id: e.id,
              name: e.patient_name,
              status: e.diagnosis_ai,
            }}
            callback={(data) => {
              navigate("/medical-record/" + data.id);
            }}
          />
        ))} */}
      </div>

      <br />
      <br />
      <br />

      <div className="w-full fixed bottom-0">
        <BottomNavbarComponent />
      </div>
    </div>
  );
}

const PatientComponent = ({ data, callback }) => {
  return (
    <button
      onClick={() => {
        callback(data);
      }}
      className="flex flex-row items-center py-2 gap-4 w-full"
    >
      <div>
        <img src={imageUser} className="w-12 rounded-full" />
      </div>
      <div className="w-full text-left">
        <h4 className="text-black f-p1-m font-bold">{data.name}</h4>
        <h4 className="text-black f-p2-r">{data.diagnosis_ai || "-"}</h4>
      </div>
    </button>
  );
};

const ToggleButton = ({ title, status, callback }) => {
  return (
    <button className="w-1/2" onClick={() => callback()}>
      <div
        className={`${status ? "bg-white" : "bg-primary-main"} py-2 rounded-md`}
      >
        <h4
          className={`${
            status ? "text-primary-main" : "text-white"
          } text-center f-p1-r`}
        >
          {title}
        </h4>
      </div>
    </button>
  );
};
