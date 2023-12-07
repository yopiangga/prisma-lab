import { NavbarComponent } from "src/components/navbar";
import { FiArrowLeft, FiHome } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export function PatientMedicalRecord() {
  const navigate = useNavigate();

  const [data, setData] = useState([
    {
      id: 1,
      title: "Medical Record 1",
      status: "classified",
      date: "12/12/2021",
      patient: {
        name: "Alfian Prisma Yopiangga",
        status: "Normal",
      },
    },
    {
      id: 2,
      title: "Medical Record 2",
      status: "un-classified",
      date: "12/12/2021",
      patient: {
        name: "Alfian Prisma Yopiangga",
        status: "Normal",
      },
    },
  ]);

  return (
    <div className="min-h-screen flex flex-col items-center">
      <div className="w-full">
        <NavbarComponent
          title="Alfian Prisma Yopiangga"
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
        {data.map((item) => (
          <MedicalRecordComponent data={item} />
        ))}
      </div>

      <br />
      <br />
      <br />
    </div>
  );
}

function MedicalRecordComponent() {
  return (
    <div className="w-full shadow-s4 rounded-2xl overflow-hidden">
      <div className="">
        <img src="https://st4.depositphotos.com/14431644/22076/i/450/depositphotos_220767694-stock-photo-handwriting-text-writing-example-concept.jpg" />
      </div>
      <div className="p-4">
        <p className="f-p1-r text-primary-main">27 November 2023</p>
        <h3 className="f-h3 mt-2">Unclassified</h3>
        <p className="mt-2 f-p2-r">
          Lorem ipsum dolor sit amet con sectetur adipisicing elit. Aliquam,
        </p>
        <div className="grid grid-cols-2 gap-2 mt-2">
          <h4 className="f-p2-m text-primary-main">AI: Stroke Ischemic</h4>
          <h4 className="f-p2-m text-primary-main">Doctor: Not Stroke</h4>
        </div>
      </div>
    </div>
  );
}
