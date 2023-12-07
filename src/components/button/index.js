export function ButtonComponent({
  title,
  action,
  type = "button",
  color = "bg-primary-main",
}) {
  return (
    <button
      type={type}
      onClick={action}
      className={`f-p1-r w-full py-3 px-3  border-white rounded-lg text-white border ${color}`}
    >
      {title}
    </button>
  );
}

export function ToggleButton({ ...props }) {
  return (
    <button
      onClick={props.handleClick}
      className={`py-2 px-4 rounded-full border border-primary-main capitalize ${
        props.active
          ? "bg-primary-main text-white"
          : "bg-white text-primary-main"
      }`}
    >
      <p className="f-p2-r w-max">{props.title}</p>
    </button>
  );
}
