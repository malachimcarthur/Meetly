import { useNavigate } from "react-router-dom";

function AppLogo() {
  const navigate = useNavigate();
  return (
    <button
      style={{
        color: "white",
        fontSize: 18,
        fontFamily: "Inter",
        fontWeight: "700",
        wordWrap: "break-word",
        background: "transparent",
        border: "none",
        cursor: "pointer",
      }}
      onClick={() => {
        navigate("/");
      }}
    >
      Meetly
    </button>
  );
}
export default AppLogo;
