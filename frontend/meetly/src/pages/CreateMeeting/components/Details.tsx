import { Dispatch, SetStateAction } from "react";

function Details({
  setAllowContinue,
  title,
  setTitle,
  description,
  setDescription,
}: {
  setAllowContinue: Dispatch<SetStateAction<boolean>>;
  title: string;
  setTitle: Dispatch<SetStateAction<string>>;
  description: string;
  setDescription: Dispatch<SetStateAction<string>>;
}) {
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
              Event Name (Required)
            </div>
            <div
              style={{
                width: "100%",
                maxWidth: 420,
              }}
            >
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Add Event Name"
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
              />
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
                Description (Optional)
              </div>
              <textarea
                placeholder="Add details"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={8}
                style={{
                  alignSelf: "stretch",
                  paddingLeft: 14,
                  paddingRight: 14,
                  paddingTop: 12,
                  paddingBottom: 12,
                  background: "white",
                  boxShadow: "0px 6px 16px rgba(0, 0, 0, 0.07)",
                  borderRadius: 14,
                  border: "none",
                  outline: "1px #D7E7DD solid",
                  outlineOffset: "-1px",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  display: "flex",
                  verticalAlign: "top",
                  textAlign: "left",
                  resize: "none",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Details;
