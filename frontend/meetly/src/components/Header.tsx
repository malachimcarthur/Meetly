function Header() {
  return (
    <div
      style={{
        width: "100%",
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
  );
}

export default Header;
