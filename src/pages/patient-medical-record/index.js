import { NavbarComponent } from "src/components/navbar";
import { FiArrowLeft, FiHome } from "react-icons/fi";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { MedicalRecordServices } from "src/services/MedicalRecordServices";
import normalImage from "src/assets/images/normal.jpg";

export function PatientMedicalRecord() {
  const navigate = useNavigate();
  const { id } = useParams();

  const medicalRecordServices = new MedicalRecordServices();

  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await medicalRecordServices.getMedicalRecordsByPatientId({
      id,
    });
    if (res) {
      setData(res.data);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center">
      <div className="w-full">
        <NavbarComponent
          title={data[0].patient}
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

      <div className="w-11/12 mt-4 flex flex-col gap-4">
        {data && data.map((item) => (
          <MedicalRecordComponent
            data={item}
            callback={(e) => {
              navigate(`/medical-record/${id}`);
            }}
          />
        ))}
      </div>

      <br />
      <br />
      <br />
    </div>
  );
}

function MedicalRecordComponent({ data, callback }) {
  return (
    <div className="w-full shadow-s4 rounded-2xl overflow-hidden">
      <div className="">
        {/* <img src={normalImage} className="w-full" /> */}
        <img src={data.image} className="w-full" />
      </div>
      <div className="p-4">
        <p className="f-p1-r text-primary-main">
          {
            // tanggal
            new Date(data.createdAt).toLocaleDateString("en-US", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })
          }
        </p>
        <h3 className="f-h3 mt-2 uppercase">
          {data.diagnosisDoctor == ""
            ? "Un-Classified"
            : data.diagnosisDoctor}
        </h3>
        <p className="mt-2 f-p2-r">{data.description ?? "-"}</p>
        <div className="grid grid-cols-2 gap-2 mt-2">
          <h4 className="f-p2-m uppercase">
            AI: <span className="text-primary-main">{data.diagnosisAI ?? "-"}</span>
          </h4>
          <h4 className="f-p2-m uppercase">
            Doctor: <span className="text-primary-main">{data.diagnosisDoctor ?? "-"}</span>
          </h4>
        </div>
      </div>
    </div>
  );
}
