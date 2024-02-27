"use client";
export default function SecondaryButton(props) {
  return (
    <button
      className={
        "bg-white text-primary w-fit h-14 flex items-center pl-10 pr-10 " +
        "rounded-full shadow-lg hover:scale-95 transform duration-100 group"
      }
    >
      <text className={"font-bold text-lg"}>{props.children}</text>
    </button>
  );
}
