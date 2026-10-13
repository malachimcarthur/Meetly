import { useState } from "react";
import Header from "../../components/Header";
import Stepper from "./components/Stepper";

function CreateMeeting() {
  const [step, setStep] = useState(0);
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        background: "#F7FBF8",
        overflow: "hidden",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        display: "inline-flex",
      }}
    >
      <Header />
      <Stepper step={step} />
    </div>
  );
}
export default CreateMeeting;
