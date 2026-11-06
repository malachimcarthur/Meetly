import {Fragment} from "react";
const STEPS = ["Details", "Times", "Confirm", "Share"];

function Stepper({ step }: { step: number }) {
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
        padding: 16,
        gap: 8,
      }}
    >
      <div
        style={{
          color: "#444444",
          fontSize: 12,
          fontFamily: "Inter",
          fontWeight: "400",
          wordWrap: "break-word",
        }}
      >
        Create a Meeting
      </div>
      <div
        style={{
          alignSelf: "stretch",
          justifyContent: "center",
          alignItems: "center",
          gap: 8,
          display: "inline-flex",
        }}
      >
        {STEPS.map((_, index) => {
          const number = index + 1;
          const reached = step >= number - 1;
          const lineReached = step > number - 1;
          return (
            <Fragment key={number}>
              <div
                style={{
                  width: 24,
                  height: 24,
                  boxSizing: "border-box",
                  background: reached ? "#2EA24D" : "white",
                  border: reached ? "none" : "2px solid #D7E7DD",
                  borderRadius: 12,
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  display: "inline-flex",
                }}
              >
                <div
                  style={{
                    color: reached ? "white" : "#9CA3AF",
                    fontSize: 12,
                    fontFamily: "Inter",
                    fontWeight: "700",
                    wordWrap: "break-word",
                  }}
                >
                  {number}
                </div>
              </div>
              {index < STEPS.length - 1 && (
                <div
                  style={{
                    width: 44,
                    height: 2,
                    background: lineReached ? "#2EA24D" : "#D7E7DD",
                    borderRadius: 1,
                  }}
                />
              )}
            </Fragment>
          );
        })}
      </div>
      <div
        style={{
          alignSelf: "stretch",
          justifyContent: "center",
          alignItems: "center",
          gap: 12,
          display: "inline-flex",
        }}
      >
        {STEPS.map((label, index) => {
          const number = index + 1;
          return (
            <div
              key={label}
              style={{
                width: 72,
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "center",
                display: "inline-flex",
              }}
            >
              <div
                style={{
                  alignSelf: "stretch",
                  textAlign: "center",
                  color: step >= number - 1 ? "#2EA24D" : "#9CA3AF",
                  fontSize: 12,
                  fontFamily: "Inter",
                  fontWeight: step === number - 1? "600" : "500",
                  wordWrap: "break-word",
                }}
              >
                {label}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Stepper;