import { useState } from "react";
import Email from "./Email";

function Share() {
  const [emailEntry, setEmailEntry] = useState("");
  const [emailList, setEmailList] = useState([] as string[]);

  function AddEmail(email: string) {
    email = email.toLowerCase();
    if (email && !emailList.includes(email)) {
      setEmailList(emailList.concat(email));
      setEmailEntry("");
    }
  }

  function RemoveEmail(email: string) {
    setEmailList(emailList.filter(e => e !== email));
  }

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
              justifyContent: "space-between",
              alignItems: "center",
              display: "inline-flex",
            }}
          >
            <span 
            style={{ 
              flexGrow: 1, 
              textAlign: "center",
              paddingLeft: 128 
            }}
          >
            DISPLAY LINK HERE.
          </span> 
            <div style ={{justifyContent: "flex-end"}}>
              <div
                style={{
                  width: 128,
                  height: 32,
                  background: "#3CC160",
                  boxShadow: "0px 8px 18px rgba(60, 193, 96, 0.20)",
                  borderRadius: 14,
                  justifyContent: "center",
                  alignItems: "center",
                  display: "flex",
                }}
              >
                <button
                  style={{
                    color: "white",
                    fontSize: 14,
                    fontFamily: "Inter",
                    fontWeight: "700",
                    background: "#3CC160",
                    cursor: "pointer",
                    border: "none",}}
                >
                  Copy Link
                </button>
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
            <input
              value={emailEntry}
              type="text"
              placeholder="Add Email"
              maxLength={100}
              style={{
                width: "100%",
                height: 20,
                padding: "10px 14px",
                background: "white",
                boxShadow: "0px 6px 16px rgba(0, 0, 0, 0.07)",
                borderRadius: 14,
                border: "1px solid #D7E7DD",
                outline: "none",
                fontSize: 12,
                lineHeight: "20px",
              }}
              onChange={(event) => setEmailEntry(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === 'Enter') AddEmail(emailEntry);
              }}
            />

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
              <button
                style={{
                  color: "white",
                  fontSize: 14,
                  fontFamily: "Inter",
                  fontWeight: "700",
                  wordWrap: "break-word",
                  background: "#3CC160",
                  cursor: "pointer",
                  border: "none",
                }}
                onClick={() => AddEmail(emailEntry)}
              >
                +
              </button>
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
              fontSize: 13,
              flexDirection: "column",
              justifyContent: "flex-start",
              fontFamily: "Inter",
              alignItems: "center",
              gap: 7,
              display: "flex",
            }}
          >
            {emailList.length > 0
            ? emailList.map(email => <Email email={email} onRemove={() => RemoveEmail(email)} />)
            : "Enter an email above to share this meeting"}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Share;
