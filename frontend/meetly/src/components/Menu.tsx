function Menu() {
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
    <div
      style={{
        width: 146,
        height: 30,
        left: 0,
        top: 0,
        position: "absolute",
        background: "#2EA24D",
        borderBottomRightRadius: 5,
        borderBottomLeftRadius: 5,
      }}
    />
    <div
      style={{
        width: 167,
        height: 56,
        paddingLeft: 16,
        paddingRight: 16,
        paddingTop: 8,
        paddingBottom: 8,
        left: 0,
        top: 0,
        position: "absolute",
        background: "#2EA24D",
        boxShadow: "0px 6px 16px rgba(15, 77, 46, 0.10)",
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
    </div>
    <div
      style={{
        width: 129,
        height: 19,
        left: 9,
        top: 67,
        position: "absolute",
        justifyContent: "center",
        display: "flex",
        flexDirection: "column",
        color: "black",
        fontSize: 12,
        fontFamily: "Inter",
        fontWeight: "400",
        wordWrap: "break-word",
      }}
    >
      Create a Meeting
    </div>
    <div
      style={{
        width: 129,
        height: 19,
        left: 9,
        top: 185,
        position: "absolute",
        justifyContent: "center",
        display: "flex",
        flexDirection: "column",
        color: "black",
        fontSize: 12,
        fontFamily: "Inter",
        fontWeight: "400",
        wordWrap: "break-word",
      }}
    >
      Settings
    </div>
    <div
      style={{
        width: 129,
        height: 19,
        left: 9,
        top: 161,
        position: "absolute",
        justifyContent: "center",
        display: "flex",
        flexDirection: "column",
        color: "black",
        fontSize: 12,
        fontFamily: "Inter",
        fontWeight: "400",
        wordWrap: "break-word",
      }}
    >
      Profile
    </div>
    <div
      style={{
        width: 129,
        height: 19,
        left: 9,
        top: 137,
        position: "absolute",
        justifyContent: "center",
        display: "flex",
        flexDirection: "column",
        color: "black",
        fontSize: 12,
        fontFamily: "Inter",
        fontWeight: "400",
        wordWrap: "break-word",
      }}
    >
      Dashboard
    </div>
    <div
      style={{
        width: 129,
        height: 19,
        left: 9,
        top: 113,
        position: "absolute",
        justifyContent: "center",
        display: "flex",
        flexDirection: "column",
        color: "black",
        fontSize: 12,
        fontFamily: "Inter",
        fontWeight: "400",
        wordWrap: "break-word",
      }}
    >
      Your Availability
    </div>
    <div
      style={{
        width: 129,
        height: 19,
        left: 9,
        top: 90,
        position: "absolute",
        justifyContent: "center",
        display: "flex",
        flexDirection: "column",
        color: "black",
        fontSize: 12,
        fontFamily: "Inter",
        fontWeight: "400",
        wordWrap: "break-word",
      }}
    >
      Upcoming Meetings
    </div>
  </div>;
}
export default Menu;
