import { useState } from "react";
import Menu from "./Menu";
import AppLogo from "./AppLogo";
function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div
      style={{
        width: "100%",
        paddingBottom: 12,
      }}
    >
      {isMenuOpen && <Menu />}
      <div
        style={{
          width: "100%",
          paddingTop: 12,
          paddingBottom: 12,
          background: "#2EA24D",
          boxShadow: "0px 6px 16px rgba(15, 77, 46, 0.10)",
          justifyContent: "space-between",
          alignItems: "center",
          display: "inline-flex",
          position: "relative",
          zIndex: 1000,
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
          <button
            style={{
              background: "transparent",
              border: "none",
              padding: 0,
              cursor: "pointer",
            }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <img
              style={{ width: 24, height: 24, borderRadius: 6 }}
              src={
                isMenuOpen
                  ? "source/hamburger_open.png"
                  : "source/hamburger_closed.png"
              }
            />
          </button>
          <AppLogo />
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
    </div>
  );
}

export default Header;
