import { useNavigate, useParams } from "react-router-dom";
import { NavbarComponent } from "src/components/navbar";
import { FiArrowLeft, FiHome } from "react-icons/fi";
import { MedicalRecordServices } from "src/services/MedicalRecordServices";
import { useEffect, useState } from "react";
import { InputSelect } from "src/components/input/input-select";
import { InputTextarea } from "src/components/input/input-textarea";
import { ButtonComponent, ButtonOutlineComponent } from "src/components/button";
import normalImage from "src/assets/images/normal.jpg";
import toast from "react-hot-toast";

export function PatientDetailMedicalRecord() {
  const navigate = useNavigate();
  const { id } = useParams();
  const medicalRecordServices = new MedicalRecordServices();

  const [editToggle, setEditToggle] = useState(false);

const [formData, setFormData] = useState({})

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await medicalRecordServices.getMedicalRecordById({ id });
    if (res) {
      setFormData(res.data)
    }
  };

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const res = await medicalRecordServices.diagnosisByDoctor({
      id,
      diagnosisDoctor: formData.diagnosisDoctor,
      description: formData.description,
    });

    if (res) {
      toast.success("Success update diagnosis");
      setEditToggle(false);
      fetchData();
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center relative">
      {editToggle && (
        <div className="fixed w-full h-full bg-black bg-opacity-40 flex justify-center items-center">
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-lg w-11/12 p-5"
          >
            <h4 className="f-h4 text-center">Diagnosis by Doctor</h4>
            <div className="w-full mt-2">
              <InputSelect
                color="dark"
                label={"Type Stroke"}
                name="diagnosisDoctor"
                value={formData.diagnosisDoctor}
                handleChange={handleChange}
                options={[
                  { label: "Hemorrhagic", value: "hemorrhagic" },
                  { label: "Ischemic", value: "ischemic" },
                  { label: "Not Stroke", value: "normal" },
                ]}
              />
            </div>
            <div className="w-full mt-2">
              <InputTextarea
                color="dark"
                label={"Description"}
                name={"description"}
                value={formData.description}
                handleChange={handleChange}
              />
            </div>
            <div className="flex flex-row justify-center gap-4 mt-4">
              <ButtonOutlineComponent
                title="Cancel"
                type="button"
                action={() => {
                  setEditToggle(false);
                }}
              />
              <ButtonComponent title="Submit" type="submit" />
            </div>
          </form>
        </div>
      )}

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
        <img src={formData.image} className="w-full" />
      </div>

      <div className="mt-4 w-11/12">
        {
          formData.diagnosisDoctor == null ?
          <div className="flex justify-between items-center">
          <div>
            <h4 className="text-black f-p1-r font-bold mb-2 uppercase">
              {formData.diagnosisAI}
            </h4>
            <p className="text-slate-400 f-p2-r">AI Prediction</p>
          </div>
        </div>
        :
        null
        }
        <div className="flex justify-between items-center mt-4">
          <div>
            <h4 className="text-black f-p1-r font-bold mb-2 uppercase">
              {formData.diagnosisDoctor}
            </h4>
            <p className="text-slate-400 f-p2-r">Diagnosis by Doctor</p>
          </div>
          <div>
            <button
              onClick={() => {
                setEditToggle(true);
              }}
              className="py-2 px-5 bg-white border border-primary-main rounded-full f-p2-r text-primary-main"
            >
              Edit
            </button>
          </div>
        </div>
      </div>

      <div className="mt-4 border-t border-b border-slate-200 w-full flex justify-center py-6">
        <h4 className="f-p1-r w-11/12">
          <a href={formData.image} className="text-primary-main">
            Download
          </a>{" "}
          image CT Scan result
        </h4>
      </div>

      <div className="mt-4 w-11/12 flex flex-col gap-4">
        <ListLabel label="Doctor" value={formData?.doctor} />
        <ListLabel label="Hospital" value={formData?.hospital} />
        <ListLabel label="Patient" value={formData?.patient} />
        <ListLabel
          label="Time"
          value={new Date(formData.createdAt).toLocaleDateString(
            "en-GB",
            { hour: "numeric", minute: "numeric", second: "numeric",
              day: "numeric",
              month: "long",
              year: "numeric",
            }
          )}
        />
        <ListLabel label="Note" value={formData.description} />
      </div>

      <div className="mt-6 w-11/12">
        <button
          onClick={() => {
            navigate("/medical-record/patient/" + formData.idPatient);
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
