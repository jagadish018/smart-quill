import { PropsWithChildren } from "react";

const Container = (props: PropsWithChildren & { className?: string }) => {
  return (
    <div
      className={
        "w-full px-4 md:w-2xl md:px-0 lg:w-4xl md:mx-auto b text-black dark:text-white flex flex-col" +
        (props.className || "")
      }
    >
      {props.children}
    </div>
  );
};

export default Container;
