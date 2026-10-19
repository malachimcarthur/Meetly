import { Dispatch, SetStateAction } from "react";
import Header from "../../../components/Header";

function Times({
  setAllowContinue,
}: {
  setAllowContinue: Dispatch<SetStateAction<boolean>>;
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
            height: 24,
            justifyContent: "center",
            alignItems: "center",
            gap: 8,
            display: "inline-flex",
          }}
        ></div>
        <div
          style={{
            alignSelf: "stretch",
            flex: "1 1 0",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            display: "flex",
          }}
        >
          <div
            style={{
              alignSelf: "stretch",
              justifyContent: "flex-start",
              alignItems: "center",
              gap: 12,
              display: "inline-flex",
            }}
          >
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
                One Day
              </div>
            </div>
            <div
              style={{
                flex: "1 1 0",
                height: 48,
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
                Repeating Weekly
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
            Select Meeting Length
          </div>
          <div
            style={{
              alignSelf: "stretch",
              height: 33,
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
                color: "#6B7280",
                fontSize: 14,
                fontFamily: "Inter",
                fontWeight: "400",
                wordWrap: "break-word",
              }}
            >
              ex. 30 mins
            </div>
            <div
              style={{
                width: 20,
                height: 20,
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
                  textAlign: "center",
                  justifyContent: "center",
                  display: "flex",
                  flexDirection: "column",
                  color: "white",
                  fontSize: 14,
                  fontFamily: "Inter",
                  fontWeight: "600",
                  wordWrap: "break-word",
                }}
              >
                v
              </div>
            </div>
          </div>
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
              Select Available Times
            </div>
          </div>
          <div
            style={{
              alignSelf: "stretch",
              background: "white",
              boxShadow: "0px 6px 16px rgba(0, 0, 0, 0.06)",
              overflow: "hidden",
              borderRadius: 16,
              outline: "1px #E5F0EB solid",
              outlineOffset: "-1px",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              display: "flex",
            }}
          >
            <div
              style={{
                alignSelf: "stretch",
                height: 32,
                background: "#F5FAF7",
                overflow: "hidden",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                display: "inline-flex",
              }}
            >
              <div style={{ width: 44, height: 32, position: "relative" }} />
              <div
                style={{
                  flex: "1 1 0",
                  height: 32,
                  overflow: "hidden",
                  borderRight: "1px #E5F0EB solid",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  display: "inline-flex",
                }}
              >
                <div
                  style={{
                    color: "#1F2924",
                    fontSize: 11,
                    fontFamily: "Inter",
                    fontWeight: "600",
                    wordWrap: "break-word",
                  }}
                >
                  Sun
                </div>
              </div>
              <div
                style={{
                  flex: "1 1 0",
                  height: 32,
                  overflow: "hidden",
                  borderRight: "1px #E5F0EB solid",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  display: "inline-flex",
                }}
              >
                <div
                  style={{
                    color: "#1F2924",
                    fontSize: 11,
                    fontFamily: "Inter",
                    fontWeight: "600",
                    wordWrap: "break-word",
                  }}
                >
                  Mon
                </div>
              </div>
              <div
                style={{
                  flex: "1 1 0",
                  height: 32,
                  overflow: "hidden",
                  borderRight: "1px #E5F0EB solid",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  display: "inline-flex",
                }}
              >
                <div
                  style={{
                    color: "#1F2924",
                    fontSize: 11,
                    fontFamily: "Inter",
                    fontWeight: "600",
                    wordWrap: "break-word",
                  }}
                >
                  Tue
                </div>
              </div>
              <div
                style={{
                  flex: "1 1 0",
                  height: 32,
                  overflow: "hidden",
                  borderRight: "1px #E5F0EB solid",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  display: "inline-flex",
                }}
              >
                <div
                  style={{
                    color: "#1F2924",
                    fontSize: 11,
                    fontFamily: "Inter",
                    fontWeight: "600",
                    wordWrap: "break-word",
                  }}
                >
                  Wed
                </div>
              </div>
              <div
                style={{
                  flex: "1 1 0",
                  height: 32,
                  overflow: "hidden",
                  borderRight: "1px #E5F0EB solid",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  display: "inline-flex",
                }}
              >
                <div
                  style={{
                    color: "#1F2924",
                    fontSize: 11,
                    fontFamily: "Inter",
                    fontWeight: "600",
                    wordWrap: "break-word",
                  }}
                >
                  Thu
                </div>
              </div>
              <div
                style={{
                  flex: "1 1 0",
                  height: 32,
                  overflow: "hidden",
                  borderRight: "1px #E5F0EB solid",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  display: "inline-flex",
                }}
              >
                <div
                  style={{
                    color: "#1F2924",
                    fontSize: 11,
                    fontFamily: "Inter",
                    fontWeight: "600",
                    wordWrap: "break-word",
                  }}
                >
                  Fri
                </div>
              </div>
              <div
                style={{
                  flex: "1 1 0",
                  height: 32,
                  overflow: "hidden",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  display: "inline-flex",
                }}
              >
                <div
                  style={{
                    color: "#1F2924",
                    fontSize: 11,
                    fontFamily: "Inter",
                    fontWeight: "600",
                    wordWrap: "break-word",
                  }}
                >
                  Sat
                </div>
              </div>
            </div>
            <div
              style={{ alignSelf: "stretch", height: 1, background: "#E5F0EB" }}
            />
            <div
              style={{
                alignSelf: "stretch",
                height: 36,
                overflow: "hidden",
                borderBottom: "1px #E5F0EB solid",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                display: "inline-flex",
              }}
            >
              <div
                style={{
                  width: 44,
                  paddingTop: 2,
                  paddingLeft: 6,
                  overflow: "hidden",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  display: "inline-flex",
                }}
              >
                <div
                  style={{
                    color: "#6B7A73",
                    fontSize: 9,
                    fontFamily: "Inter",
                    fontWeight: "400",
                    wordWrap: "break-word",
                  }}
                >
                  8:00
                </div>
                <div
                  style={{
                    opacity: 0.6,
                    color: "#6B7A73",
                    fontSize: 7,
                    fontFamily: "Inter",
                    fontWeight: "400",
                    wordWrap: "break-word",
                  }}
                >
                  AM
                </div>
              </div>
              <div
                style={{
                  flex: "1 1 0",
                  height: 36,
                  padding: 1,
                  overflow: "hidden",
                  borderRight: "1px #E5F0EB solid",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  gap: 1,
                  display: "inline-flex",
                }}
              >
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
              </div>
              <div
                style={{
                  flex: "1 1 0",
                  height: 36,
                  padding: 1,
                  overflow: "hidden",
                  borderRight: "1px #E5F0EB solid",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  gap: 1,
                  display: "inline-flex",
                }}
              >
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
              </div>
              <div
                style={{
                  flex: "1 1 0",
                  height: 36,
                  padding: 1,
                  overflow: "hidden",
                  borderRight: "1px #E5F0EB solid",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  gap: 1,
                  display: "inline-flex",
                }}
              >
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
              </div>
              <div
                style={{
                  flex: "1 1 0",
                  height: 36,
                  padding: 1,
                  overflow: "hidden",
                  borderRight: "1px #E5F0EB solid",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  gap: 1,
                  display: "inline-flex",
                }}
              >
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
              </div>
              <div
                style={{
                  flex: "1 1 0",
                  height: 36,
                  padding: 1,
                  overflow: "hidden",
                  borderRight: "1px #E5F0EB solid",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  gap: 1,
                  display: "inline-flex",
                }}
              >
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
              </div>
              <div
                style={{
                  flex: "1 1 0",
                  height: 36,
                  padding: 1,
                  overflow: "hidden",
                  borderRight: "1px #E5F0EB solid",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  gap: 1,
                  display: "inline-flex",
                }}
              >
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
              </div>
              <div
                style={{
                  flex: "1 1 0",
                  height: 36,
                  padding: 1,
                  overflow: "hidden",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  gap: 1,
                  display: "inline-flex",
                }}
              >
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
              </div>
            </div>
            <div
              style={{
                alignSelf: "stretch",
                height: 36,
                overflow: "hidden",
                borderBottom: "1px #E5F0EB solid",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                display: "inline-flex",
              }}
            >
              <div
                style={{
                  width: 44,
                  paddingTop: 2,
                  paddingLeft: 6,
                  overflow: "hidden",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  display: "inline-flex",
                }}
              >
                <div
                  style={{
                    color: "#6B7A73",
                    fontSize: 9,
                    fontFamily: "Inter",
                    fontWeight: "400",
                    wordWrap: "break-word",
                  }}
                >
                  9:00
                </div>
                <div
                  style={{
                    opacity: 0.6,
                    color: "#6B7A73",
                    fontSize: 7,
                    fontFamily: "Inter",
                    fontWeight: "400",
                    wordWrap: "break-word",
                  }}
                >
                  AM
                </div>
              </div>
              <div
                style={{
                  flex: "1 1 0",
                  height: 36,
                  padding: 1,
                  overflow: "hidden",
                  borderRight: "1px #E5F0EB solid",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  gap: 1,
                  display: "inline-flex",
                }}
              >
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
              </div>
              <div
                style={{
                  flex: "1 1 0",
                  height: 36,
                  padding: 1,
                  overflow: "hidden",
                  borderRight: "1px #E5F0EB solid",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  gap: 1,
                  display: "inline-flex",
                }}
              >
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "#6EFA85",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "#6EFA85",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "#6EFA85",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "#6EFA85",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "#6EFA85",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "#6EFA85",
                    borderRadius: 1.5,
                  }}
                />
              </div>
              <div
                style={{
                  flex: "1 1 0",
                  height: 36,
                  padding: 1,
                  overflow: "hidden",
                  borderRight: "1px #E5F0EB solid",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  gap: 1,
                  display: "inline-flex",
                }}
              >
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
              </div>
              <div
                style={{
                  flex: "1 1 0",
                  height: 36,
                  padding: 1,
                  overflow: "hidden",
                  borderRight: "1px #E5F0EB solid",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  gap: 1,
                  display: "inline-flex",
                }}
              >
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "#6EFA85",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "#6EFA85",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "#6EFA85",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "#6EFA85",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "#6EFA85",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "#6EFA85",
                    borderRadius: 1.5,
                  }}
                />
              </div>
              <div
                style={{
                  flex: "1 1 0",
                  height: 36,
                  padding: 1,
                  overflow: "hidden",
                  borderRight: "1px #E5F0EB solid",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  gap: 1,
                  display: "inline-flex",
                }}
              >
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
              </div>
              <div
                style={{
                  flex: "1 1 0",
                  height: 36,
                  padding: 1,
                  overflow: "hidden",
                  borderRight: "1px #E5F0EB solid",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  gap: 1,
                  display: "inline-flex",
                }}
              >
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
              </div>
              <div
                style={{
                  flex: "1 1 0",
                  height: 36,
                  padding: 1,
                  overflow: "hidden",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  gap: 1,
                  display: "inline-flex",
                }}
              >
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
              </div>
            </div>
            <div
              style={{
                alignSelf: "stretch",
                height: 36,
                overflow: "hidden",
                borderBottom: "1px #E5F0EB solid",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                display: "inline-flex",
              }}
            >
              <div
                style={{
                  width: 44,
                  paddingTop: 2,
                  paddingLeft: 6,
                  overflow: "hidden",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  display: "inline-flex",
                }}
              >
                <div
                  style={{
                    color: "#6B7A73",
                    fontSize: 9,
                    fontFamily: "Inter",
                    fontWeight: "400",
                    wordWrap: "break-word",
                  }}
                >
                  10:00
                </div>
                <div
                  style={{
                    opacity: 0.6,
                    color: "#6B7A73",
                    fontSize: 7,
                    fontFamily: "Inter",
                    fontWeight: "400",
                    wordWrap: "break-word",
                  }}
                >
                  AM
                </div>
              </div>
              <div
                style={{
                  flex: "1 1 0",
                  height: 36,
                  padding: 1,
                  overflow: "hidden",
                  borderRight: "1px #E5F0EB solid",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  gap: 1,
                  display: "inline-flex",
                }}
              >
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
              </div>
              <div
                style={{
                  flex: "1 1 0",
                  height: 36,
                  padding: 1,
                  overflow: "hidden",
                  borderRight: "1px #E5F0EB solid",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  gap: 1,
                  display: "inline-flex",
                }}
              >
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "#6EFA85",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "#6EFA85",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "#6EFA85",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "#6EFA85",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "#6EFA85",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "#6EFA85",
                    borderRadius: 1.5,
                  }}
                />
              </div>
              <div
                style={{
                  flex: "1 1 0",
                  height: 36,
                  padding: 1,
                  overflow: "hidden",
                  borderRight: "1px #E5F0EB solid",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  gap: 1,
                  display: "inline-flex",
                }}
              >
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
              </div>
              <div
                style={{
                  flex: "1 1 0",
                  height: 36,
                  padding: 1,
                  overflow: "hidden",
                  borderRight: "1px #E5F0EB solid",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  gap: 1,
                  display: "inline-flex",
                }}
              >
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
              </div>
              <div
                style={{
                  flex: "1 1 0",
                  height: 36,
                  padding: 1,
                  overflow: "hidden",
                  borderRight: "1px #E5F0EB solid",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  gap: 1,
                  display: "inline-flex",
                }}
              >
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "#6EFA85",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "#6EFA85",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "#6EFA85",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "#6EFA85",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "#6EFA85",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "#6EFA85",
                    borderRadius: 1.5,
                  }}
                />
              </div>
              <div
                style={{
                  flex: "1 1 0",
                  height: 36,
                  padding: 1,
                  overflow: "hidden",
                  borderRight: "1px #E5F0EB solid",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  gap: 1,
                  display: "inline-flex",
                }}
              >
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
              </div>
              <div
                style={{
                  flex: "1 1 0",
                  height: 36,
                  padding: 1,
                  overflow: "hidden",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  gap: 1,
                  display: "inline-flex",
                }}
              >
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
              </div>
            </div>
            <div
              style={{
                alignSelf: "stretch",
                height: 36,
                overflow: "hidden",
                borderBottom: "1px #E5F0EB solid",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                display: "inline-flex",
              }}
            >
              <div
                style={{
                  width: 44,
                  paddingTop: 2,
                  paddingLeft: 6,
                  overflow: "hidden",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  display: "inline-flex",
                }}
              >
                <div
                  style={{
                    color: "#6B7A73",
                    fontSize: 9,
                    fontFamily: "Inter",
                    fontWeight: "400",
                    wordWrap: "break-word",
                  }}
                >
                  11:00
                </div>
                <div
                  style={{
                    opacity: 0.6,
                    color: "#6B7A73",
                    fontSize: 7,
                    fontFamily: "Inter",
                    fontWeight: "400",
                    wordWrap: "break-word",
                  }}
                >
                  AM
                </div>
              </div>
              <div
                style={{
                  flex: "1 1 0",
                  height: 36,
                  padding: 1,
                  overflow: "hidden",
                  borderRight: "1px #E5F0EB solid",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  gap: 1,
                  display: "inline-flex",
                }}
              >
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
              </div>
              <div
                style={{
                  flex: "1 1 0",
                  height: 36,
                  padding: 1,
                  overflow: "hidden",
                  borderRight: "1px #E5F0EB solid",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  gap: 1,
                  display: "inline-flex",
                }}
              >
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
              </div>
              <div
                style={{
                  flex: "1 1 0",
                  height: 36,
                  padding: 1,
                  overflow: "hidden",
                  borderRight: "1px #E5F0EB solid",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  gap: 1,
                  display: "inline-flex",
                }}
              >
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "#6EFA85",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "#6EFA85",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "#6EFA85",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "#6EFA85",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "#6EFA85",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "#6EFA85",
                    borderRadius: 1.5,
                  }}
                />
              </div>
              <div
                style={{
                  flex: "1 1 0",
                  height: 36,
                  padding: 1,
                  overflow: "hidden",
                  borderRight: "1px #E5F0EB solid",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  gap: 1,
                  display: "inline-flex",
                }}
              >
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
              </div>
              <div
                style={{
                  flex: "1 1 0",
                  height: 36,
                  padding: 1,
                  overflow: "hidden",
                  borderRight: "1px #E5F0EB solid",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  gap: 1,
                  display: "inline-flex",
                }}
              >
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
              </div>
              <div
                style={{
                  flex: "1 1 0",
                  height: 36,
                  padding: 1,
                  overflow: "hidden",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  gap: 1,
                  display: "inline-flex",
                }}
              >
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
              </div>
              <div
                style={{
                  flex: "1 1 0",
                  height: 36,
                  padding: 1,
                  overflow: "hidden",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  gap: 1,
                  display: "inline-flex",
                }}
              >
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
              </div>
            </div>
            <div
              style={{
                alignSelf: "stretch",
                height: 36,
                overflow: "hidden",
                borderBottom: "1px #E5F0EB solid",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                display: "inline-flex",
              }}
            >
              <div
                style={{
                  width: 44,
                  paddingTop: 2,
                  paddingLeft: 6,
                  overflow: "hidden",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  display: "inline-flex",
                }}
              >
                <div
                  style={{
                    color: "#6B7A73",
                    fontSize: 9,
                    fontFamily: "Inter",
                    fontWeight: "400",
                    wordWrap: "break-word",
                  }}
                >
                  12:00
                </div>
                <div
                  style={{
                    opacity: 0.6,
                    color: "#6B7A73",
                    fontSize: 7,
                    fontFamily: "Inter",
                    fontWeight: "400",
                    wordWrap: "break-word",
                  }}
                >
                  PM
                </div>
              </div>
              <div
                style={{
                  flex: "1 1 0",
                  height: 36,
                  padding: 1,
                  overflow: "hidden",
                  borderRight: "1px #E5F0EB solid",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  gap: 1,
                  display: "inline-flex",
                }}
              >
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
              </div>
              <div
                style={{
                  flex: "1 1 0",
                  height: 36,
                  padding: 1,
                  overflow: "hidden",
                  borderRight: "1px #E5F0EB solid",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  gap: 1,
                  display: "inline-flex",
                }}
              >
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "#6EFA85",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "#6EFA85",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "#6EFA85",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "#6EFA85",
                    borderRadius: 1.5,
                  }}
                />
              </div>
              <div
                style={{
                  flex: "1 1 0",
                  height: 36,
                  padding: 1,
                  overflow: "hidden",
                  borderRight: "1px #E5F0EB solid",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  gap: 1,
                  display: "inline-flex",
                }}
              >
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
              </div>
              <div
                style={{
                  flex: "1 1 0",
                  height: 36,
                  padding: 1,
                  overflow: "hidden",
                  borderRight: "1px #E5F0EB solid",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  gap: 1,
                  display: "inline-flex",
                }}
              >
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
              </div>
              <div
                style={{
                  flex: "1 1 0",
                  height: 36,
                  padding: 1,
                  overflow: "hidden",
                  borderRight: "1px #E5F0EB solid",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  gap: 1,
                  display: "inline-flex",
                }}
              >
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
              </div>
              <div
                style={{
                  flex: "1 1 0",
                  height: 36,
                  padding: 1,
                  overflow: "hidden",
                  borderRight: "1px #E5F0EB solid",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  gap: 1,
                  display: "inline-flex",
                }}
              >
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
              </div>
              <div
                style={{
                  flex: "1 1 0",
                  height: 36,
                  padding: 1,
                  overflow: "hidden",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  gap: 1,
                  display: "inline-flex",
                }}
              >
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
              </div>
            </div>
            <div
              style={{
                alignSelf: "stretch",
                height: 36,
                overflow: "hidden",
                borderBottom: "1px #E5F0EB solid",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                display: "inline-flex",
              }}
            >
              <div
                style={{
                  width: 44,
                  paddingTop: 2,
                  paddingLeft: 6,
                  overflow: "hidden",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  display: "inline-flex",
                }}
              >
                <div
                  style={{
                    color: "#6B7A73",
                    fontSize: 9,
                    fontFamily: "Inter",
                    fontWeight: "400",
                    wordWrap: "break-word",
                  }}
                >
                  1:00
                </div>
                <div
                  style={{
                    opacity: 0.6,
                    color: "#6B7A73",
                    fontSize: 7,
                    fontFamily: "Inter",
                    fontWeight: "400",
                    wordWrap: "break-word",
                  }}
                >
                  PM
                </div>
              </div>
              <div
                style={{
                  flex: "1 1 0",
                  height: 36,
                  padding: 1,
                  overflow: "hidden",
                  borderRight: "1px #E5F0EB solid",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  gap: 1,
                  display: "inline-flex",
                }}
              >
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
              </div>
              <div
                style={{
                  flex: "1 1 0",
                  height: 36,
                  padding: 1,
                  overflow: "hidden",
                  borderRight: "1px #E5F0EB solid",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  gap: 1,
                  display: "inline-flex",
                }}
              >
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "#6EFA85",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "#6EFA85",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "#6EFA85",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "#6EFA85",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "#6EFA85",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "#6EFA85",
                    borderRadius: 1.5,
                  }}
                />
              </div>
              <div
                style={{
                  flex: "1 1 0",
                  height: 36,
                  padding: 1,
                  overflow: "hidden",
                  borderRight: "1px #E5F0EB solid",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  gap: 1,
                  display: "inline-flex",
                }}
              >
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
              </div>
              <div
                style={{
                  flex: "1 1 0",
                  height: 36,
                  padding: 1,
                  overflow: "hidden",
                  borderRight: "1px #E5F0EB solid",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  gap: 1,
                  display: "inline-flex",
                }}
              >
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
              </div>
              <div
                style={{
                  flex: "1 1 0",
                  height: 36,
                  padding: 1,
                  overflow: "hidden",
                  borderRight: "1px #E5F0EB solid",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  gap: 1,
                  display: "inline-flex",
                }}
              >
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "#6EFA85",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "#6EFA85",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "#6EFA85",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "#6EFA85",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "#6EFA85",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "#6EFA85",
                    borderRadius: 1.5,
                  }}
                />
              </div>
              <div
                style={{
                  flex: "1 1 0",
                  height: 36,
                  padding: 1,
                  overflow: "hidden",
                  borderRight: "1px #E5F0EB solid",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  gap: 1,
                  display: "inline-flex",
                }}
              >
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
              </div>
              <div
                style={{
                  flex: "1 1 0",
                  height: 36,
                  padding: 1,
                  overflow: "hidden",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  gap: 1,
                  display: "inline-flex",
                }}
              >
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
              </div>
            </div>
            <div
              style={{
                alignSelf: "stretch",
                height: 36,
                overflow: "hidden",
                borderBottom: "1px #E5F0EB solid",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                display: "inline-flex",
              }}
            >
              <div
                style={{
                  width: 44,
                  paddingTop: 2,
                  paddingLeft: 6,
                  overflow: "hidden",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  display: "inline-flex",
                }}
              >
                <div
                  style={{
                    color: "#6B7A73",
                    fontSize: 9,
                    fontFamily: "Inter",
                    fontWeight: "400",
                    wordWrap: "break-word",
                  }}
                >
                  2:00
                </div>
                <div
                  style={{
                    opacity: 0.6,
                    color: "#6B7A73",
                    fontSize: 7,
                    fontFamily: "Inter",
                    fontWeight: "400",
                    wordWrap: "break-word",
                  }}
                >
                  PM
                </div>
              </div>
              <div
                style={{
                  flex: "1 1 0",
                  height: 36,
                  padding: 1,
                  overflow: "hidden",
                  borderRight: "1px #E5F0EB solid",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  gap: 1,
                  display: "inline-flex",
                }}
              >
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
              </div>
              <div
                style={{
                  flex: "1 1 0",
                  height: 36,
                  padding: 1,
                  overflow: "hidden",
                  borderRight: "1px #E5F0EB solid",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  gap: 1,
                  display: "inline-flex",
                }}
              >
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
              </div>
              <div
                style={{
                  flex: "1 1 0",
                  height: 36,
                  padding: 1,
                  overflow: "hidden",
                  borderRight: "1px #E5F0EB solid",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  gap: 1,
                  display: "inline-flex",
                }}
              >
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "#6EFA85",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "#6EFA85",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "#6EFA85",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "#6EFA85",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "#6EFA85",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "#6EFA85",
                    borderRadius: 1.5,
                  }}
                />
              </div>
              <div
                style={{
                  flex: "1 1 0",
                  height: 36,
                  padding: 1,
                  overflow: "hidden",
                  borderRight: "1px #E5F0EB solid",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  gap: 1,
                  display: "inline-flex",
                }}
              >
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "#6EFA85",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "#6EFA85",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "#6EFA85",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "#6EFA85",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "#6EFA85",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "#6EFA85",
                    borderRadius: 1.5,
                  }}
                />
              </div>
              <div
                style={{
                  flex: "1 1 0",
                  height: 36,
                  padding: 1,
                  overflow: "hidden",
                  borderRight: "1px #E5F0EB solid",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  gap: 1,
                  display: "inline-flex",
                }}
              >
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
              </div>
              <div
                style={{
                  flex: "1 1 0",
                  height: 36,
                  padding: 1,
                  overflow: "hidden",
                  borderRight: "1px #E5F0EB solid",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  gap: 1,
                  display: "inline-flex",
                }}
              >
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
              </div>
              <div
                style={{
                  flex: "1 1 0",
                  height: 36,
                  padding: 1,
                  overflow: "hidden",
                  borderRight: "1px #E5F0EB solid",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  gap: 1,
                  display: "inline-flex",
                }}
              >
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
              </div>
            </div>
            <div
              style={{
                alignSelf: "stretch",
                height: 36,
                overflow: "hidden",
                borderBottom: "1px #E5F0EB solid",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                display: "inline-flex",
              }}
            >
              <div
                style={{
                  width: 44,
                  paddingTop: 2,
                  paddingLeft: 6,
                  overflow: "hidden",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  display: "inline-flex",
                }}
              >
                <div
                  style={{
                    color: "#6B7A73",
                    fontSize: 9,
                    fontFamily: "Inter",
                    fontWeight: "400",
                    wordWrap: "break-word",
                  }}
                >
                  3:00
                </div>
                <div
                  style={{
                    opacity: 0.6,
                    color: "#6B7A73",
                    fontSize: 7,
                    fontFamily: "Inter",
                    fontWeight: "400",
                    wordWrap: "break-word",
                  }}
                >
                  PM
                </div>
              </div>
              <div
                style={{
                  flex: "1 1 0",
                  height: 36,
                  padding: 1,
                  overflow: "hidden",
                  borderRight: "1px #E5F0EB solid",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  gap: 1,
                  display: "inline-flex",
                }}
              >
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
              </div>
              <div
                style={{
                  flex: "1 1 0",
                  height: 36,
                  padding: 1,
                  overflow: "hidden",
                  borderRight: "1px #E5F0EB solid",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  gap: 1,
                  display: "inline-flex",
                }}
              >
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "#6EFA85",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "#6EFA85",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "#6EFA85",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "#6EFA85",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "#6EFA85",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "#6EFA85",
                    borderRadius: 1.5,
                  }}
                />
              </div>
              <div
                style={{
                  flex: "1 1 0",
                  height: 36,
                  padding: 1,
                  overflow: "hidden",
                  borderRight: "1px #E5F0EB solid",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  gap: 1,
                  display: "inline-flex",
                }}
              >
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
              </div>
              <div
                style={{
                  flex: "1 1 0",
                  height: 36,
                  padding: 1,
                  overflow: "hidden",
                  borderRight: "1px #E5F0EB solid",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  gap: 1,
                  display: "inline-flex",
                }}
              >
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
              </div>
              <div
                style={{
                  flex: "1 1 0",
                  height: 36,
                  padding: 1,
                  overflow: "hidden",
                  borderRight: "1px #E5F0EB solid",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  gap: 1,
                  display: "inline-flex",
                }}
              >
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
              </div>
              <div
                style={{
                  flex: "1 1 0",
                  height: 36,
                  padding: 1,
                  overflow: "hidden",
                  borderRight: "1px #E5F0EB solid",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  gap: 1,
                  display: "inline-flex",
                }}
              >
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "#6EFA85",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "#6EFA85",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "#6EFA85",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "#6EFA85",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "#6EFA85",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "#6EFA85",
                    borderRadius: 1.5,
                  }}
                />
              </div>
              <div
                style={{
                  flex: "1 1 0",
                  height: 36,
                  padding: 1,
                  overflow: "hidden",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  gap: 1,
                  display: "inline-flex",
                }}
              >
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
              </div>
            </div>
            <div
              style={{
                alignSelf: "stretch",
                height: 36,
                overflow: "hidden",
                borderBottom: "1px #E5F0EB solid",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                display: "inline-flex",
              }}
            >
              <div
                style={{
                  width: 44,
                  paddingTop: 2,
                  paddingLeft: 6,
                  overflow: "hidden",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  display: "inline-flex",
                }}
              >
                <div
                  style={{
                    color: "#6B7A73",
                    fontSize: 9,
                    fontFamily: "Inter",
                    fontWeight: "400",
                    wordWrap: "break-word",
                  }}
                >
                  4:00
                </div>
                <div
                  style={{
                    opacity: 0.6,
                    color: "#6B7A73",
                    fontSize: 7,
                    fontFamily: "Inter",
                    fontWeight: "400",
                    wordWrap: "break-word",
                  }}
                >
                  PM
                </div>
              </div>
              <div
                style={{
                  flex: "1 1 0",
                  height: 36,
                  padding: 1,
                  overflow: "hidden",
                  borderRight: "1px #E5F0EB solid",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  gap: 1,
                  display: "inline-flex",
                }}
              >
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
              </div>
              <div
                style={{
                  flex: "1 1 0",
                  height: 36,
                  padding: 1,
                  overflow: "hidden",
                  borderRight: "1px #E5F0EB solid",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  gap: 1,
                  display: "inline-flex",
                }}
              >
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
              </div>
              <div
                style={{
                  flex: "1 1 0",
                  height: 36,
                  padding: 1,
                  overflow: "hidden",
                  borderRight: "1px #E5F0EB solid",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  gap: 1,
                  display: "inline-flex",
                }}
              >
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
              </div>
              <div
                style={{
                  flex: "1 1 0",
                  height: 36,
                  padding: 1,
                  overflow: "hidden",
                  borderRight: "1px #E5F0EB solid",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  gap: 1,
                  display: "inline-flex",
                }}
              >
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "#6EFA85",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "#6EFA85",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "#6EFA85",
                    borderRadius: 1.5,
                  }}
                />
              </div>
              <div
                style={{
                  flex: "1 1 0",
                  height: 36,
                  padding: 1,
                  overflow: "hidden",
                  borderRight: "1px #E5F0EB solid",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  gap: 1,
                  display: "inline-flex",
                }}
              >
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
              </div>
              <div
                style={{
                  flex: "1 1 0",
                  height: 36,
                  padding: 1,
                  overflow: "hidden",
                  borderRight: "1px #E5F0EB solid",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  gap: 1,
                  display: "inline-flex",
                }}
              >
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
              </div>
              <div
                style={{
                  flex: "1 1 0",
                  height: 36,
                  padding: 1,
                  overflow: "hidden",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  gap: 1,
                  display: "inline-flex",
                }}
              >
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
              </div>
            </div>
            <div
              style={{
                alignSelf: "stretch",
                height: 36,
                overflow: "hidden",
                borderBottom: "1px #E5F0EB solid",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                display: "inline-flex",
              }}
            >
              <div
                style={{
                  width: 44,
                  paddingTop: 2,
                  paddingLeft: 6,
                  overflow: "hidden",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  display: "inline-flex",
                }}
              >
                <div
                  style={{
                    color: "#6B7A73",
                    fontSize: 9,
                    fontFamily: "Inter",
                    fontWeight: "400",
                    wordWrap: "break-word",
                  }}
                >
                  5:00
                </div>
                <div
                  style={{
                    opacity: 0.6,
                    color: "#6B7A73",
                    fontSize: 7,
                    fontFamily: "Inter",
                    fontWeight: "400",
                    wordWrap: "break-word",
                  }}
                >
                  PM
                </div>
              </div>
              <div
                style={{
                  flex: "1 1 0",
                  height: 36,
                  padding: 1,
                  overflow: "hidden",
                  borderRight: "1px #E5F0EB solid",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  gap: 1,
                  display: "inline-flex",
                }}
              >
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
              </div>
              <div
                style={{
                  flex: "1 1 0",
                  height: 36,
                  padding: 1,
                  overflow: "hidden",
                  borderRight: "1px #E5F0EB solid",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  gap: 1,
                  display: "inline-flex",
                }}
              >
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
              </div>
              <div
                style={{
                  flex: "1 1 0",
                  height: 36,
                  padding: 1,
                  overflow: "hidden",
                  borderRight: "1px #E5F0EB solid",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  gap: 1,
                  display: "inline-flex",
                }}
              >
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
              </div>
              <div
                style={{
                  flex: "1 1 0",
                  height: 36,
                  padding: 1,
                  overflow: "hidden",
                  borderRight: "1px #E5F0EB solid",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  gap: 1,
                  display: "inline-flex",
                }}
              >
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
              </div>
              <div
                style={{
                  flex: "1 1 0",
                  height: 36,
                  padding: 1,
                  overflow: "hidden",
                  borderRight: "1px #E5F0EB solid",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  gap: 1,
                  display: "inline-flex",
                }}
              >
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
              </div>
              <div
                style={{
                  flex: "1 1 0",
                  height: 36,
                  padding: 1,
                  overflow: "hidden",
                  borderRight: "1px #E5F0EB solid",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  gap: 1,
                  display: "inline-flex",
                }}
              >
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
              </div>
              <div
                style={{
                  flex: "1 1 0",
                  height: 36,
                  padding: 1,
                  overflow: "hidden",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  gap: 1,
                  display: "inline-flex",
                }}
              >
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 4,
                    background: "white",
                    borderRadius: 1.5,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Times;
