function Dashboard() {
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
          width: 800,
          paddingLeft: 16,
          paddingRight: 16,
          paddingTop: 12,
          paddingBottom: 12,
          background: "#2EA24D",
          boxShadow: "0px 6px 16px rgba(15, 77, 46, 0.10)",
          borderBottomRightRadius: 16,
          borderBottomLeftRadius: 16,
          justifyContent: "space-between",
          alignItems: "center",
          display: "inline-flex",
        }}
      >
        <div
          style={{
            justifyContent: "flex-start",
            alignItems: "center",
            gap: 10,
            display: "flex",
          }}
        >
          <img
            style={{ width: 24, height: 24, borderRadius: 6 }}
            src="https://placehold.co/24x24"
          />
          <div
            style={{
              color: "white",
              fontSize: 18,
              fontFamily: "Inter",
              fontWeight: "700",
              wordWrap: "break-word",
            }}
          >
            AppLogo
          </div>
        </div>
        <div
          style={{
            justifyContent: "flex-end",
            alignItems: "center",
            gap: 11,
            display: "flex",
          }}
        >
          <div
            style={{
              justifyContent: "flex-start",
              alignItems: "center",
              gap: 8,
              display: "flex",
            }}
          >
            <div
              style={{
                paddingLeft: 12,
                paddingRight: 12,
                paddingTop: 6,
                paddingBottom: 6,
                background: "white",
                borderRadius: 999,
                justifyContent: "flex-start",
                alignItems: "flex-start",
                display: "flex",
              }}
            >
              <div
                style={{
                  color: "#2EA24D",
                  fontSize: 12,
                  fontFamily: "Inter",
                  fontWeight: "700",
                  wordWrap: "break-word",
                }}
              >
                Sign in
              </div>
            </div>
          </div>
          <div
            style={{
              width: 32,
              height: 32,
              background: "rgba(255, 255, 255, 0.12)",
              borderRadius: 16,
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              display: "inline-flex",
            }}
          >
            <img
              style={{ width: 18, height: 18, borderRadius: 4 }}
              src="https://placehold.co/18x18"
            />
          </div>
          <div
            style={{
              width: 32,
              height: 32,
              background: "rgba(255, 255, 255, 0.12)",
              borderRadius: 16,
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              display: "inline-flex",
            }}
          >
            <img
              style={{ width: 28, height: 28, borderRadius: 14 }}
              src="https://placehold.co/28x28"
            />
          </div>
        </div>
      </div>
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
          Dashboard
        </div>
        <div
          style={{
            alignSelf: "stretch",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            gap: 12,
            display: "inline-flex",
          }}
        >
          <div
            style={{
              flex: "1 1 0",
              height: 48,
              background: "#3CC160",
              boxShadow: "0px 8px 18px rgba(60, 193, 96, 0.20)",
              borderRadius: 14,
              justifyContent: "center",
              alignItems: "center",
              gap: 8,
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
              Create a Meeting
            </div>
            <img
              style={{ width: 16, height: 16, borderRadius: 4 }}
              src="https://placehold.co/16x16"
            />
          </div>
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
              Your Availability
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
          Upcoming Meetings
        </div>
        <div
          style={{
            alignSelf: "stretch",
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
              height: 92,
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
                color: "#2EA24D",
                fontSize: 12,
                fontFamily: "Inter",
                fontWeight: "700",
                wordWrap: "break-word",
              }}
            >
              Next Meeting
            </div>
            <div
              style={{
                alignSelf: "stretch",
                justifyContent: "space-between",
                alignItems: "center",
                display: "inline-flex",
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
                Name
              </div>
              <div
                style={{
                  color: "#6B7280",
                  fontSize: 12,
                  fontFamily: "Inter",
                  fontWeight: "500",
                  wordWrap: "break-word",
                }}
              >
                Date
              </div>
            </div>
            <div
              style={{
                alignSelf: "stretch",
                color: "#6B7280",
                fontSize: 12,
                fontFamily: "Inter",
                fontWeight: "500",
                wordWrap: "break-word",
              }}
            >
              About
            </div>
          </div>
          <div
            style={{
              alignSelf: "stretch",
              height: 48,
              background: "white",
              boxShadow: "0px 6px 16px rgba(0, 0, 0, 0.07)",
              borderRadius: 14,
              outline: "1px #D7E7DD solid",
              outlineOffset: "-1px",
              justifyContent: "center",
              alignItems: "center",
              display: "inline-flex",
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
              View All
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
