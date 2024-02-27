"use client";
export default function Button(props) {
  return (
    <button
      className={
        "bg-primary text-white h-14 flex items-center pl-10 pr-10 rounded-full shadow-xl shadow-blue-100"
      }
    >
      <text className={"font-semibold"}>
        {props.children} {">"}
      </text>
    </button>
  );
}
