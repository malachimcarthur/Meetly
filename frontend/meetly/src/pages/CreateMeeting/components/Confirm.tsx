import Header from "../../../components/Header";

const DAYS_KEYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const DAY_NAMES = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function parseKey(key: string): { day: number; slot: number } | null {
  const [dayKey, h, q] = key.split("-");
  const day = DAYS_KEYS.indexOf(dayKey);
  const hour = Number(h);
  const quarter = Number(q);
  if (day === -1 || Number.isNaN(hour) || Number.isNaN(quarter)) {
    return null;
  }
  return { day, slot: hour * 4 + quarter };
}

function formatSlot(slot: number): string {
  const mins = slot * 15;
  const hour24 = Math.floor(mins / 60) % 24;
  const minutes = mins % 60;
  const period = hour24 >= 12 ? "PM" : "AM";
  const hour12 = hour24 % 12 || 12;
  return `${hour12}:${minutes.toString().padStart(2, "0")} ${period}`;
}

function collapseDays(days: number[]): string {
  const parts: string[] = [];
  let i = 0;
  while (i < days.length) {
    let j = i;
    while (j + 1 < days.length && days[j + 1] === days[j] + 1) {
      j += 1;
    }
    if (j - i >= 2) {
      parts.push(`${DAY_NAMES[days[i]]} - ${DAY_NAMES[days[j]]}`);
    } else {
      for (let k = i; k <= j; k++) {
        parts.push(DAY_NAMES[days[k]]);
      }
    }
    i = j + 1;
  }
  return parts.join(", ");
}

function formatAvailability(activeTimes: Record<string, boolean>): string[] {
  const byDay = new Map<number, number[]>();
  for (const [key, active] of Object.entries(activeTimes)) {
    if (!active) {
      continue;
    }
    const parsed = parseKey(key);
    if (!parsed) {
      continue;
    }
    byDay.set(parsed.day, [...(byDay.get(parsed.day) ?? []), parsed.slot]);
  }

  const rangesByDay = new Map<number, string>();
  for (const [day, slots] of byDay) {
    slots.sort((a, b) => a - b);
    const ranges: string[] = [];
    let start = slots[0];
    let prev = slots[0];
    for (let i = 1; i <= slots.length; i++) {
      const slot = slots[i];
      if (slot === prev + 1) {
        prev = slot;
        continue;
      }
      ranges.push(`${formatSlot(start)} - ${formatSlot(prev + 1)}`);
      start = slot;
      prev = slot;
    }
    rangesByDay.set(day, ranges.join(", "));
  }

  const byRange = new Map<string, number[]>();
  for (let day = 0; day < 7; day++) {
    const range = rangesByDay.get(day);
    if (!range) {
      continue;
    }
    byRange.set(range, [...(byRange.get(range) ?? []), day]);
  }

  return [...byRange].map(([range, days]) => `${collapseDays(days)}: ${range}`);
}

function Confirm({
  title,
  description,
  activeTimes,
}: {
  title: string,
  description: string,
  activeTimes: Record<string, boolean>,
}) {
  const availabilityLines = formatAvailability(activeTimes);
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
            alignSelf: "stretch",
            flex: "1 1 0",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "center",
            display: "flex",
          }}
        >
          <div
            style={{
              alignSelf: "stretch",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "center",
              gap: 12,
              display: "flex",
            }}
          >
            <div
              style={{
                alignSelf: "stretch",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "center",
                gap: 6,
                display: "flex",
              }}
            >
              <div
                style={{
                  textAlign: "center",
                  color: "#1F2937",
                  fontSize: 24,
                            fontWeight: "600",
                  wordWrap: "break-word",
                }}
              >
                {title}
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
                            fontWeight: "600",
                  wordWrap: "break-word",
                }}
              >
                About
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
                            fontWeight: "400",
                  wordWrap: "break-word",
                }}
              >
                {description}
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
                            fontWeight: "600",
                  wordWrap: "break-word",
                }}
              >
                Repeating Weekly
              </div>
            </div>
          </div>
          <div
            style={{
              alignSelf: "stretch",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "center",
              gap: 6,
              display: "flex",
            }}
          >
            <div
              style={{
                color: "#1F2937",
                fontSize: 13,
                        fontWeight: "600",
                wordWrap: "break-word",
              }}
            >
              Available Times
            </div>
          </div>
          {availabilityLines.length === 0 ? (
            <div
              style={{
                color: "#6B7280",
                fontSize: 13,
              }}
            >
              No times selected
            </div>
          ) : (
            availabilityLines.map((line) => (
              <div
                key={line}
                style={{
                  color: "#1F2937",
                  fontSize: 13,
                  fontWeight: "400",
                  wordWrap: "break-word",
                }}
              >
                {line}
              </div>
            ))
          )}

        </div>
      </div>
    </div>
  );
}
export default Confirm;
