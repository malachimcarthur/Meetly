import Header from "../../../components/Header";

function Share() {
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
            alignItems: "flex-start",
            gap: 12,
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
            Share Event
          </div>
          <div
            style={{
              alignSelf: "stretch",
              height: 44,
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
              Add email to share
            </div>
            <div
              style={{
                width: 32,
                height: 32,
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
                +
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
            Shared With
          </div>
          <div
            style={{
              alignSelf: "stretch",
              flex: "1 1 0",
              padding: 7,
              background: "white",
              boxShadow: "0px 6px 16px rgba(0, 0, 0, 0.07)",
              borderRadius: 14,
              outline: "1px #D7E7DD solid",
              outlineOffset: "-1px",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "center",
              gap: 7,
              display: "flex",
            }}
          >
            <div
              style={{
                alignSelf: "stretch",
                height: 44,
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
                  color: "black",
                  fontSize: 14,
                  fontFamily: "Inter",
                  fontWeight: "400",
                  wordWrap: "break-word",
                }}
              >
                jsmith@example.com
              </div>
              <div
                style={{
                  width: 32,
                  height: 32,
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
                  −
                </div>
              </div>
            </div>
            <div
              style={{
                alignSelf: "stretch",
                height: 44,
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
                  color: "black",
                  fontSize: 14,
                  fontFamily: "Inter",
                  fontWeight: "400",
                  wordWrap: "break-word",
                }}
              >
                jdoe@example.com
              </div>
              <div
                style={{
                  width: 32,
                  height: 32,
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
                  −
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Share;
