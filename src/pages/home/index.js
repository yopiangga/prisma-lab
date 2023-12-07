import imageUser from "src/assets/images/user.png";
import iconUser from "src/assets/icons/user.png";

export function HomePage() {
  const data = [
    {
      id: 1,
      title: "Total Pateints",
      subTitle: "06 November 2023",
      value: 2985,
    },
    {
      id: 2,
      title: "Normal Pateint",
      subTitle: "06 November 2023",
      value: 956,
    },
    {
      id: 3,
      title: "Stroke Ischemic",
      subTitle: "06 November 2023",
      value: 1267,
    },
    {
      id: 4,
      title: "Stroke Hemorrhagic",
      subTitle: "06 November 2023",
      value: 956,
    },
    {
      id: 5,
      title: "Classified",
      subTitle: "06 November 2023",
      value: 956,
    },
    {
      id: 6,
      title: "Un-Classified",
      subTitle: "06 November 2023",
      value: 956,
    },
  ];

  return (
    <div className="min-h-screen">
      <div className="mt-6 px-4 flex flex-row items-center justify-between">
        <div className="">
          <h3 className="f-h3 text-black font-bold">Good Morning</h3>
          <p className="f-p1-r text-black">Monday, 06 November 2023</p>
        </div>
        <div className="">
          <img src={imageUser} className="w-10 h-10" />
        </div>
      </div>

      <div className="w-full mt-5 flex justify-center">
        <div className="w-11/12 overflow-scroll flex gap-1">
          <BadgeComponent title="Overview" status={true} />
          <BadgeComponent title="Daily" status={false} />
          <BadgeComponent title="Weekly" status={false} />
          <BadgeComponent title="Monthly" status={false} />
          <BadgeComponent title="Daily" status={false} />
          <BadgeComponent title="Weekly" status={false} />
          <BadgeComponent title="Monthly" status={false} />
        </div>
      </div>

      <div className="mt-5 px-4">
        <div className="p-4 bg-primary-surface rounded-2xl">
          <h4 className="text-lg text-black font-bold">
            Statistical classification of stroke patients
          </h4>
          <h4 className="text-black text-sm text-center mt-1">
            Total Patients
          </h4>
          <h4 className="text-black text-3xl font-bold text-center mt-2">
            2,985
          </h4>

          <div className="w-full flex flex-row mt-4">
            <ChartComponent title="Normal" color="#6B4EFF" percent={30} />
            <ChartComponent title="Ischemic" color="#FFB323" percent={40} />
            <ChartComponent title="Hemorrhagic" color="#C5341B" percent={30} />
          </div>
        </div>
      </div>

      <div className="mt-5 px-4 grid grid-cols-2 gap-3">
        {data.map((item, index) => {
          return (
            <CardComponent
              key={index}
              id={item.id}
              title={item.title}
              subTitle={item.subTitle}
              value={item.value}
            />
          );
        })}
      </div>
    </div>
  );
}

const CardComponent = ({ id, title, subTitle, value }) => {
  return (
    <div className={`bg-white p-4 rounded-lg flex-1 shadow-s1`}>
      <h4 className="text-black font-bold text-sm">{title}</h4>
      <h5 className="text-black text-xs">{subTitle}</h5>
      <div className="flex flex-row items-center mt-2">
        <img src={iconUser} />
        <h4 className="text-black text-lg font-bold text-center ml-2">
          {value}
        </h4>
      </div>
    </div>
  );
};

const BadgeComponent = ({ title, status, callback }) => {
  return (
    <button>
      <div
        className={`${
          status ? "bg-primary-surface" : "bg-white"
        } rounded-full px-5 py-2`}
      >
        <h4
          className={`text-center f-p1-r ${
            status ? "text-primary-main" : "text-black"
          }`}
        >
          {title}
        </h4>
      </div>
    </button>
  );
};

const ChartComponent = ({ title, color, percent }) => {
  return (
    <div className="" style={{ width: `${percent}%` }}>
      <h4 className="text-center font-bold text-lg" style={{ color: color }}>
        {percent}%
      </h4>
      <div className="w-full py-2 mt-1" style={{ backgroundColor: color }}>
        <h4 className="text-white text-center text-xs">{title}</h4>
      </div>
    </div>
  );
};
