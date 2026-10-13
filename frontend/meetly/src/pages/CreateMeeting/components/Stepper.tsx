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
          alignSelf: "stretch",
          justifyContent: "center",
          alignItems: "center",
          gap: 8,
          display: "inline-flex",
        }}
      >
        <div
          style={{
            width: 24,
            height: 24,
            background: "#2EA24D",
            borderRadius: 12,
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            display: "inline-flex",
          }}
        >
          <div
            style={{
              color: "white",
              fontSize: 12,
              fontFamily: "Inter",
              fontWeight: "700",
              wordWrap: "break-word",
            }}
          >
            1
          </div>
        </div>
        <div
          style={{
            width: 44,
            height: 2,
            background: "#2EA24D",
            borderRadius: 1,
          }}
        />
        <div
          style={{
            width: 24,
            height: 24,
            background: "#2EA24D",
            borderRadius: 12,
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            display: "inline-flex",
          }}
        >
          <div
            style={{
              color: "white",
              fontSize: 12,
              fontFamily: "Inter",
              fontWeight: "700",
              wordWrap: "break-word",
            }}
          >
            2
          </div>
        </div>
        <div
          style={{
            width: 44,
            height: 2,
            background: "#2EA24D",
            borderRadius: 1,
          }}
        />
        <div
          style={{
            width: 24,
            height: 24,
            background: "#2EA24D",
            borderRadius: 12,
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            display: "inline-flex",
          }}
        >
          <div
            style={{
              color: "white",
              fontSize: 12,
              fontFamily: "Inter",
              fontWeight: "700",
              wordWrap: "break-word",
            }}
          >
            3
          </div>
        </div>
        <div
          style={{
            width: 44,
            height: 2,
            background: "#2EA24D",
            borderRadius: 1,
          }}
        />
        <div
          style={{
            width: 24,
            height: 24,
            background: "#2EA24D",
            borderRadius: 12,
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            display: "inline-flex",
          }}
        >
          <div
            style={{
              color: "white",
              fontSize: 12,
              fontFamily: "Inter",
              fontWeight: "700",
              wordWrap: "break-word",
            }}
          >
            4
          </div>
        </div>
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
        <div
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
              color: "#2EA24D",
              fontSize: 11,
              fontFamily: "Inter",
              fontWeight: "600",
              wordWrap: "break-word",
            }}
          >
            Details
          </div>
        </div>
        <div
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
              color: "#2EA24D",
              fontSize: 11,
              fontFamily: "Inter",
              fontWeight: "500",
              wordWrap: "break-word",
            }}
          >
            Times
          </div>
        </div>
        <div
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
              color: "#2EA24D",
              fontSize: 11,
              fontFamily: "Inter",
              fontWeight: "500",
              wordWrap: "break-word",
            }}
          >
            Confirm
          </div>
        </div>
        <div
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
              color: "#2EA24D",
              fontSize: 11,
              fontFamily: "Inter",
              fontWeight: "500",
              wordWrap: "break-word",
            }}
          >
            Share
          </div>
        </div>
      </div>
    </div>
  );
}
export default Stepper;
