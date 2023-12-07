import imageUser from "src/assets/images/user.png";

export function MedicalRecordPage() {
  return (
    <div className="min-h-screen">
      <div className="py-3">
        <h4 className="text-center text-lg text-black font-semibold">
          Patients
        </h4>
      </div>

      <div className="px-4 w-full mt-2">
        <div className="flex flex-row bg-gray-50 py-1 px-1 rounded-md">
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
        {Array(10)
          .fill(0)
          .map((_, i) => (
            <PatientComponent key={i} />
          ))}
      </div>
    </div>
  );
}

const PatientComponent = ({ data }) => {
  return (
    <div className="flex flex-row items-center py-2">
      <div>
        <img src={imageUser} />
        {/* <Image source={imageUser} /> */}
      </div>
      <div className="ml-4">
        <h4 className="text-black text-sm font-bold">
          Alfian Prisma Yopiangga
        </h4>
        <h4 className="text-black text-sm mt-1">Normal</h4>
      </div>
    </div>
  );
};

const ToggleButton = ({ title, status, callback }) => {
  return (
    <button className="w-1/2" onClick={() => callback()}>
      <div
        className={`${status ? "bg-primary-main" : "bg-white"} py-2 rounded-md`}
      >
        <h4
          className={`${
            status ? "text-white" : "text-primary-main"
          } text-center`}
        >
          {title}
        </h4>
      </div>
    </button>
  );
};