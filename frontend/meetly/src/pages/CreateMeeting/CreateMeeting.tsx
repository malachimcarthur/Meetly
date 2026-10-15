import { useState } from "react";
import Header from "../../components/Header";
import Stepper from "./components/Stepper";
import Details from "./components/Details";
import Share from "./components/Share";
import Confirm from "./components/Confirm";
import StepperButtons from "./components/StepperButtons";
import { useNavigate } from "react-router-dom";
import { CalendarGrid } from "../../components/Calendar";

function CreateMeeting() {
  const [step, setStep] = useState(0);
  const navigate = useNavigate();
  const renderStep = () => {
    switch (step) {
      case 0:
        return <Details />;
      case 1:
        return <CalendarGrid />;
      case 2:
        return <Confirm />;
      case 3:
        return <Share />;
      default:
        return <Details />;
    }
  };
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
      {renderStep()}
      <StepperButtons step={step} setStep={setStep} navigate={navigate} />
    </div>
  );
}
export default CreateMeeting;
