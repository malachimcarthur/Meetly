import { useState } from "react";
import type { FocusEvent } from "react";

function StepperButtons({
  step,
  setStep,
  navigate,
  allowContinue,
}: {
  step: number;
  setStep: (step: number) => void;
  navigate: (path: string) => void;
  allowContinue: boolean;
}) {
  const [focused, setFocused] = useState<"back" | "next" | null>(null);
  const focusProps = (name: "back" | "next") => ({
    onFocus: (event: FocusEvent<HTMLButtonElement>) => {
      if (event.currentTarget.matches(":focus-visible")) {
        setFocused(name);
      }
    },
    onBlur: () => setFocused(null),
  });
  return (
    <div
      style={{
        position: "fixed",
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 10,
        boxSizing: "border-box",
        padding: 4,
        background: "#F7FBF8",
        justifyContent: "flex-end",
        alignItems: "center",
        gap: 10,
        display: "inline-flex",
      }}
    >
      <button
        {...focusProps("back")}
        style={{
          width: 200,
          height: 48,
          background: "white",
          boxShadow: "0px 6px 16px rgba(0, 0, 0, 0.07)",
          borderRadius: 14,
          outline: focused === "back" ? "3px solid #2EA24D" : "1px #D7E7DD solid",
          outlineOffset: focused === "back" ? 2 : -1,
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          cursor: "pointer",
          border: "none",
        }}
        onClick={() => {
          if (step > 0) {
            setStep(step - 1);
          } else {
            navigate("/");
          }
        }}
      >
        <div
          style={{
            color: "#2EA24D",
            fontSize: 14,
                fontWeight: "700",
            wordWrap: "break-word",
          }}
        >
          {step === 0 ? "Cancel" : "Back"}
        </div>
      </button>
      <button
        {...focusProps("next")}
        style={{
          width: 200,
          height: 48,
          background: allowContinue ? "#3CC160" : "#CBD5E1",
          boxShadow: allowContinue
            ? "0px 8px 18px rgba(60, 193, 96, 0.20)"
            : "none",
          borderRadius: 14,
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          cursor: allowContinue ? "pointer" : "not-allowed",
          border: "none",
          outline: focused === "next" ? "3px solid #1F7A38" : "none",
          outlineOffset: 2,
          
        }}
        disabled={!allowContinue}
        onClick={() => {
          if (step < 3) {
            setStep(step + 1);
          } else {
            navigate("/");
          }
        }}
      >
        <div
          style={{
            color: "white",
            fontSize: 14,
                fontWeight: "700",
            wordWrap: "break-word",
          }}
        >
          {step === 3 ? "Share" : "Next Step"}
        </div>
      </button>
    </div>
  );
}
export default StepperButtons;
