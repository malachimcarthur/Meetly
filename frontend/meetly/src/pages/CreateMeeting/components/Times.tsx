import { Dispatch, SetStateAction, useState } from "react";
import Header from "../../../components/Header";
import { CalendarGrid } from "../../../components/Calendar";

function Times({
  setAllowContinue,
}: {
  setAllowContinue: Dispatch<SetStateAction<boolean>>;
}) {
  const [activeTimes, setActiveTimes] = useState({} as Record<string, boolean>);

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
          Create a Meeting
        </div>
        <div
          style={{
            alignSelf: "stretch",
            height: 24,
            justifyContent: "center",
            alignItems: "center",
            gap: 8,
            display: "inline-flex",
          }}
        ></div>
        <div
          style={{
            alignSelf: "stretch",
            flex: "1 1 0",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            display: "flex",
          }}
        >
          <div
            style={{
              alignSelf: "stretch",
              justifyContent: "flex-start",
              alignItems: "center",
              gap: 12,
              display: "inline-flex",
            }}
          >
            <div
              style={{
                flex: "1 1 0",
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
                One Day
              </div>
            </div>
            <div
              style={{
                flex: "1 1 0",
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
                Repeating Weekly
              </div>
            </div>
          </div>
          <div
            style={{
              color: "#1F2937",
              fontSize: 13,
              fontFamily: "Inter",
              fontWeight: "600",
              wordWrap: "break-word",
            }}
          >
            Select Meeting Length
          </div>
          <div
            style={{
              alignSelf: "stretch",
              height: 33,
              paddingLeft: 14,
              paddingRight: 14,
              background: "white",
              boxShadow: "0px 6px 16px rgba(0, 0, 0, 0.07)",
              borderRadius: 14,
              outline: "1px #D7E7DD solid",
              outlineOffset: "-1px",
              justifyContent: "flex-start",
              alignItems: "center",
              display: "inline-flex",
            }}
          >
            <div
              style={{
                flex: "1 1 0",
                color: "#6B7280",
                fontSize: 14,
                fontFamily: "Inter",
                fontWeight: "400",
                wordWrap: "break-word",
              }}
            >
              ex. 30 mins
            </div>
            <div
              style={{
                width: 20,
                height: 20,
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
                  textAlign: "center",
                  justifyContent: "center",
                  display: "flex",
                  flexDirection: "column",
                  color: "white",
                  fontSize: 14,
                  fontFamily: "Inter",
                  fontWeight: "600",
                  wordWrap: "break-word",
                }}
              >
                v
              </div>
            </div>
          </div>
          <div
            style={{
              alignSelf: "stretch",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              gap: 6,
              display: "flex",
            }}
          >
            <div
              style={{
                color: "#1F2937",
                fontSize: 13,
                fontFamily: "Inter",
                fontWeight: "600",
                wordWrap: "break-word",
              }}
            >
              Select Available Times
            </div>
          </div>
          <CalendarGrid activeTimes={activeTimes} setActiveTimes={setActiveTimes} />
        </div>
      </div>
    </div>
  );
}
export default Times;
