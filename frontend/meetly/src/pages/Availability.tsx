import { act, useState } from "react";
import { CalendarGrid } from "../components/Calendar";
import Header from "../components/Header";
function Availability() {
  const [activeTimes, setActiveTimes] = useState<Record<string, boolean>>({});

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
      <div
        style={{
          alignSelf: "stretch",
          flex: "1 1 0",
          padding: 16,
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          gap: 12,
          display: "flex",
        }}
      >
        <div
          style={{
            color: "#838383",
            fontSize: 10,
            fontFamily: "Inter",
            fontWeight: "400",
            wordWrap: "break-word",
          }}
        >
          Your Availability
        </div>
        <div
          style={{
            alignSelf: "stretch",
            height: 40,
            background: "white",
            boxShadow: "0px 6px 16px rgba(0, 0, 0, 0.07)",
            borderRadius: 14,
            outline: "1px #D7E7DD solid",
            outlineOffset: "-1px",
            justifyContent: "center",
            alignItems: "center",
            gap: 8,
            display: "inline-flex",
          }}
        >
          <div
            style={{
              width: 16,
              height: 16,
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                width: 9.33,
                height: 9.33,
                left: 3.33,
                top: 3.33,
                position: "absolute",
                outline: "2px #2EA24D solid",
                outlineOffset: "-1px",
              }}
            />
          </div>
          <div
            style={{
              color: "#2EA24D",
              fontSize: 14,
              fontFamily: "Inter",
              fontWeight: "700",
              wordWrap: "break-word",
            }}
          >
            Import Calendar
          </div>
        </div>
        <CalendarGrid
          activeTimes={activeTimes}
          setActiveTimes={setActiveTimes}
        />
      </div>
    </div>
  );
}
export default Availability;
