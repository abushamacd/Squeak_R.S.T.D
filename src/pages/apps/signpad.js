import { SignatureComponent, Signature } from "@syncfusion/ej2-react-inputs";
import React from "react";
import Header from "../../components/Header";

const Signpad = () => {
  let signObj = Signature | null;
  const OnSave = () => {
    signObj?.save();
  };
  const OnClear = () => {
    signObj?.clear();
  };
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl ">
      <Header category="App" title="Signature Pad" />
      <SignatureComponent
        ref={(sign) => (signObj = sign)}
        className="rounded-lg w-11/12 "
      ></SignatureComponent>
      <div className="">
        <button
          onClick={OnSave}
          className=" bg-white m-2 dark:bg-black py-2 px-4 rounded-lg"
        >
          Save
        </button>
        <button
          onClick={OnClear}
          className=" bg-white m-2 dark:bg-black py-2 px-4 rounded-lg"
        >
          Clear
        </button>
      </div>
    </div>
  );
};

export default Signpad;
