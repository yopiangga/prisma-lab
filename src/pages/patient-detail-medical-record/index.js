import { useNavigate } from "react-router-dom";
import { NavbarComponent } from "src/components/navbar";
import { FiArrowLeft, FiHome } from "react-icons/fi";

export function PatientDetailMedicalRecord() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center">
      <div className="w-full">
        <NavbarComponent
          title="Result CT Scan"
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

      <div className="mt-4 w-11/12">
        <img src="https://st4.depositphotos.com/14431644/22076/i/450/depositphotos_220767694-stock-photo-handwriting-text-writing-example-concept.jpg" />
      </div>

      <div className="mt-4 w-11/12">
        <div className="flex justify-between items-center">
          <div>
            <h4 className="text-black f-p1-r font-bold mb-2">
              Stroke Ischemic
            </h4>
            <p className="text-slate-400 f-p2-r">AI Prediction</p>
          </div>
        </div>
        <div className="flex justify-between items-center mt-4">
          <div>
            <h4 className="text-black f-p1-r font-bold mb-2">Not Stroke</h4>
            <p className="text-slate-400 f-p2-r">Diagnosis by Doctor</p>
          </div>
          <div>
            <button className="py-2 px-5 bg-white border border-primary-main rounded-full f-p2-r text-primary-main">
              Edit
            </button>
          </div>
        </div>
      </div>

      <div className="mt-4 border-t border-b border-slate-200 w-full flex justify-center py-6">
        <h4 className="f-p1-r w-11/12">
          <button onClick={() => {}} className="text-primary-main">
            Download
          </button>{" "}
          image CT Scan result
        </h4>
      </div>

      <div className="mt-4 w-11/12 flex flex-col gap-4">
        <ListLabel label="Doctor" value="Dr Alfian Prisma Yopianga" />
        <ListLabel label="Hospital" value="RS Siloam Surabaya" />
        <ListLabel label="Patient" value="Alfian Y" />
        <ListLabel label="Time" value="07 December 2023" />
        <ListLabel
          label="Note"
          value="Patient stroke with type ischemic djhdns sn c sjc sjncsjncj"
        />
      </div>

      <div className="mt-6 w-11/12">
        <button
          onClick={() => {
            navigate("/medical-record/patient/1");
          }}
          className="py-3 px-5 bg-primary-main border border-primary-main rounded-full f-p1-m text-white w-full"
        >
          Detail Patient
        </button>
      </div>

      <br />
    </div>
  );
}

function ListLabel({ label, value }) {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-3">
        <h4 className="f-p1-r">{label}</h4>
      </div>
      <div className="col-span-9">
        <p className="f-p1-r text-right">{value ?? "-"}</p>
      </div>
    </div>
  );
}
