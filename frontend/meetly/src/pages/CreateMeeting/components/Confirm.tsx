import Header from "../../../components/Header";

function Confirm() {
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
            flex: "1 1 0",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "center",
            display: "flex",
          }}
        >
          <div
            style={{
              alignSelf: "stretch",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "center",
              gap: 12,
              display: "flex",
            }}
          >
            <div
              style={{
                alignSelf: "stretch",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "center",
                gap: 6,
                display: "flex",
              }}
            >
              <div
                style={{
                  textAlign: "center",
                  color: "#1F2937",
                  fontSize: 24,
                  fontFamily: "Inter",
                  fontWeight: "600",
                  wordWrap: "break-word",
                }}
              >
                Event Name
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
                About
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
                  fontWeight: "400",
                  wordWrap: "break-word",
                }}
              >
                Yada yada yada etc etc etc...
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
                Repeating Weekly
              </div>
            </div>
          </div>
          <div
            style={{
              alignSelf: "stretch",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "center",
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
              Available Times
            </div>
          </div>
          <div
            style={{
              color: "#1F2937",
              fontSize: 13,
              fontFamily: "Inter",
              fontWeight: "400",
              wordWrap: "break-word",
            }}
          >
            Sunday–Tuesday, Thursday 4:30 AM–4:30 PM
          </div>
          <div
            style={{
              color: "#1F2937",
              fontSize: 13,
              fontFamily: "Inter",
              fontWeight: "400",
              wordWrap: "break-word",
            }}
          >
            Friday 12:30 PM–4:30 PM
          </div>
        </div>
        <div
          style={{
            alignSelf: "stretch",
            justifyContent: "flex-end",
            alignItems: "center",
            gap: 12,
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
              Back
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
      </div>
    </div>
  );
}
export default Confirm;
