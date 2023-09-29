"use client";
import { useState } from "react";

export const Modal = ({ children }: { children: React.ReactElement }) => {
  const [shouldShow, setShouldShow] = useState(false);

  return (
    <>
      <button onClick={() => setShouldShow(true)}>Show Modal</button>
      {shouldShow && (
        <div
          onClick={() => setShouldShow(false)}
          className="modalBackground fixed left-0 top-0 z-10 h-full w-full overflow-auto bg-black opacity-50"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="modalBody mx-auto my-[10%] w-6/12 bg-white p-[20px]"
          >
            <button onClick={() => setShouldShow(false)}>Hide Modal</button>
            {children}
          </div>
        </div>
      )}
    </>
  );
};
