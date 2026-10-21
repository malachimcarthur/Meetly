function Email({ email }: { email: String }) {
  return (
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
        {email}
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
  );
}
export default Email;
