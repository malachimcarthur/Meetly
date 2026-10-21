import { CalendarGrid } from "../components/Calendar";
import Header from "../components/Header";
function Availability() {
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
        <div
          style={{
            alignSelf: "stretch",
            height: 84,
            padding: 12,
            background: "white",
            boxShadow: "0px 6px 16px rgba(0, 0, 0, 0.06)",
            borderRadius: 16,
            outline: "1px #E6F0EA solid",
            outlineOffset: "-1px",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            gap: 8,
            display: "flex",
          }}
        >
          <div
            style={{
              justifyContent: "flex-start",
              alignItems: "center",
              gap: 8,
              display: "inline-flex",
            }}
          >
            <div
              style={{
                width: 12,
                height: 12,
                background: "white",
                borderRadius: 4,
                border: "1px #D1D5DB solid",
              }}
            />
            <div
              style={{
                color: "#1F2937",
                fontSize: 12,
                fontFamily: "Inter",
                fontWeight: "700",
                wordWrap: "break-word",
              }}
            >
              Hour
            </div>
          </div>
          <div
            style={{
              justifyContent: "flex-start",
              alignItems: "center",
              gap: 8,
              display: "inline-flex",
            }}
          >
            <div
              style={{
                width: 12,
                height: 12,
                background: "#505CFE",
                borderRadius: 4,
              }}
            />
            <div
              style={{
                color: "#1F2937",
                fontSize: 12,
                fontFamily: "Inter",
                fontWeight: "700",
                wordWrap: "break-word",
              }}
            >
              30 minutes
            </div>
          </div>
          <div
            style={{
              justifyContent: "flex-start",
              alignItems: "center",
              gap: 8,
              display: "inline-flex",
            }}
          >
            <div
              style={{
                width: 12,
                height: 12,
                background: "white",
                borderRadius: 4,
                border: "1px #D1D5DB solid",
              }}
            />
            <div
              style={{
                color: "#1F2937",
                fontSize: 12,
                fontFamily: "Inter",
                fontWeight: "700",
                wordWrap: "break-word",
              }}
            >
              10 minutes
            </div>
          </div>
        </div>
        <CalendarGrid />
        <div
          style={{
            alignSelf: "stretch",
            height: 84,
            padding: 12,
            background: "white",
            boxShadow: "0px 6px 16px rgba(0, 0, 0, 0.06)",
            borderRadius: 16,
            outline: "1px #E6F0EA solid",
            outlineOffset: "-1px",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            gap: 8,
            display: "flex",
          }}
        >
          <div
            style={{
              justifyContent: "flex-start",
              alignItems: "center",
              gap: 8,
              display: "inline-flex",
            }}
          >
            <div
              style={{
                width: 12,
                height: 12,
                background: "#F96D6D",
                borderRadius: 4,
              }}
            />
            <div
              style={{
                color: "#1F2937",
                fontSize: 12,
                fontFamily: "Inter",
                fontWeight: "700",
                wordWrap: "break-word",
              }}
            >
              Unavailable
            </div>
          </div>
          <div
            style={{
              justifyContent: "flex-start",
              alignItems: "center",
              gap: 8,
              display: "inline-flex",
            }}
          >
            <div
              style={{
                width: 12,
                height: 12,
                background: "#6DF984",
                borderRadius: 4,
              }}
            />
            <div
              style={{
                color: "#1F2937",
                fontSize: 12,
                fontFamily: "Inter",
                fontWeight: "700",
                wordWrap: "break-word",
              }}
            >
              Available
            </div>
          </div>
          <div
            style={{
              justifyContent: "flex-start",
              alignItems: "center",
              gap: 8,
              display: "inline-flex",
            }}
          >
            <div
              style={{
                width: 12,
                height: 12,
                borderRadius: 4,
                border: "1px rgba(0, 0, 0, 0.25) solid",
              }}
            />
            <div
              style={{
                color: "#1F2937",
                fontSize: 12,
                fontFamily: "Inter",
                fontWeight: "700",
                wordWrap: "break-word",
              }}
            >
              Unset
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Availability;
