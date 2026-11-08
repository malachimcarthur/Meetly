import { useNavigate } from "react-router-dom";
import type { CSSProperties } from "react";

function Menu() {
  const navigate = useNavigate();

  const buttonStyle: CSSProperties = {
    width: 129,
    height: 19,
    color: "black",
    fontSize: 14,
    fontFamily: "Inter",
    fontWeight: 400,
    textAlign: "left",
    cursor: "pointer",
    border: "none",
    background: "transparent",
    padding: 0,
  };

  return (
    <div style={{ width: "100%", height: "100%", position: "relative" }}>
      <div
        style={{
          width: 167,
          height: 800,
          left: 0,
          top: 1,
          position: "absolute",
          background: "#F5F3F3",
        }}
      />
      <nav
        style={{
          position: "absolute",
          left: 5,
          paddingTop: 67,
          display: "flex",
          flexDirection: "column",
          gap: 4,
        }}
      >
        <button style={buttonStyle} onClick={() => navigate("/create-meeting")}>
          Create a Meeting
        </button>
        <button style={buttonStyle}>Settings</button>
        <button style={buttonStyle}>Profile</button>
        <button style={buttonStyle} onClick={() => navigate("/")}>
          Dashboard
        </button>
        <button style={buttonStyle} onClick={() => navigate("/availability")}>
          Your Availability
        </button>
        <button style={buttonStyle}>Upcoming Meetings</button>
      </nav>
    </div>
  );
}

export default Menu;
