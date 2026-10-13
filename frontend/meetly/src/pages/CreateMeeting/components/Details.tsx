function Details() {
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
              Event Name
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
                Add event name
              </div>
            </div>
          </div>
          <div
            style={{
              alignSelf: "stretch",
              flex: "1 1 0",
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
            <div
              style={{
                alignSelf: "stretch",
                paddingLeft: 14,
                paddingRight: 14,
                paddingTop: 12,
                paddingBottom: 12,
                background: "white",
                boxShadow: "0px 6px 16px rgba(0, 0, 0, 0.07)",
                borderRadius: 14,
                outline: "1px #D7E7DD solid",
                outlineOffset: "-1px",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                display: "flex",
              }}
            >
              <div
                style={{
                  alignSelf: "stretch",
                  color: "#6B7280",
                  fontSize: 14,
                  fontFamily: "Inter",
                  fontWeight: "400",
                  lineHeight: 20,
                  wordWrap: "break-word",
                }}
              >
                Add a brief description
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Details;
