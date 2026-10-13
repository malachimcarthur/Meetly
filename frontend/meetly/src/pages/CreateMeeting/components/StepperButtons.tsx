function StepperButtons({
  step,
  setStep,
}: {
  step: number;
  setStep: (step: number) => void;
}) {
  return (
    <div
      style={{
        alignSelf: "stretch",
        justifyContent: "flex-end",
        alignItems: "center",
        gap: 10,
        display: "inline-flex",
      }}
    >
      <div
        style={{
          width: 200,
          height: 48,
          background: "white",
          boxShadow: "0px 6px 16px rgba(0, 0, 0, 0.07)",
          borderRadius: 14,
          outline: "1px #D7E7DD solid",
          outlineOffset: "-1px",
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
        }}
      >
        <div
          style={{
            color: "#2EA24D",
            fontSize: 14,
            fontFamily: "Inter",
            fontWeight: "700",
            wordWrap: "break-word",
          }}
        >
          Cancel
        </div>
      </div>
      <div
        style={{
          width: 200,
          height: 48,
          background: "#3CC160",
          boxShadow: "0px 8px 18px rgba(60, 193, 96, 0.20)",
          borderRadius: 14,
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
        }}
      >
        <div
          style={{
            color: "white",
            fontSize: 14,
            fontFamily: "Inter",
            fontWeight: "700",
            wordWrap: "break-word",
          }}
        >
          Next Step
        </div>
      </div>
    </div>
  );
}
export default StepperButtons;
