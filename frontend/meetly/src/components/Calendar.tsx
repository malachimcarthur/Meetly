import { Dispatch, SetStateAction, useState } from 'react';
import "./calendar.css";

export class CalendarDay {
  constructor(
    public date: Date,
    public dayName: string,
  ) {}
}

export class CalendarDayRenderer {
  constructor(private containerElement: HTMLElement) {}

  public renderDay(day: CalendarDay): void {
    let dayColumn = this.containerElement.querySelector(
      `[data-day="${day.dayName}"]`,
    ) as HTMLElement;

    if (!dayColumn) {
      dayColumn = document.createElement("div");
      dayColumn.className = "calendar-day-column";
      dayColumn.setAttribute("data-day", day.dayName);
      this.containerElement.appendChild(dayColumn);
    } else {
      dayColumn.innerHTML = "";
    }
  }
}

const HOURS = Array.from({ length: 24 }, (_, i) => i);
const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function getHourLabel(hour: number): string {
  const period = hour > 11 ? "PM" : "AM";
  hour %= 12;
  if (hour == 0) hour = 12;
  return `${hour}:00 ${period}`;
}

export function CalendarGrid({
  activeTimes,
  setActiveTimes,
}: {
  activeTimes: Record<string, boolean>;
  setActiveTimes: Dispatch<SetStateAction<Record<string, boolean>>>;
}) {
  const toKey = (dayName: string, hour: number, quarterIndex: number) => `${dayName}-${hour}-${quarterIndex}`;
  const getIsActive = (key: string) => activeTimes[key];
  const setIsActive = (key: string, value: boolean) => {
    setActiveTimes(prev => ({
      ...prev,
      [key]: value
    }));
  };
  const [mouseDown, setMouseDown] = useState(false);
  const [activeBrush, setActiveBrush] = useState(true);

  return (
    <div className="calendar-wrapper">
      <div className="calendar-header">
        <div>Time</div>
        {DAYS.map(day => (
          <div key={day}>{day}</div>
        ))}
      </div>

      <div className="calendar-body">
        <div className="time-column">
          {HOURS.map(hour => (
            <div key={hour} className="time-slot">{getHourLabel(hour)}</div>
          ))}
        </div>

        {DAYS.map(dayName => (
          <div key={dayName} className="calendar-day-column">
            {HOURS.map(hour => (
              <div key={hour} className="hour-block">
                {[0, 1, 2, 3].map(quarterIndex => {
                  const key = `${dayName}-${hour}-${quarterIndex}`;
                  const isActive = activeTimes[key] || false;
                  
                  return (
                    <div
                      key={quarterIndex}
                      className={`quarter-section ${isActive ? 'active' : ''}`}
                      onMouseDown={(e) => {
                        e.preventDefault();
                        setMouseDown(true);
                        const key = toKey(dayName, hour, quarterIndex);
                        const newState = !getIsActive(key);
                        setIsActive(key, newState);
                        setActiveBrush(newState);
                      }}
                      onMouseUp={() => setMouseDown(false)}
                      onMouseOver={() => {
                        if (mouseDown) {
                          const key = toKey(dayName, hour, quarterIndex);
                          setIsActive(key, activeBrush);
                        }
                      }}
                    />
                  );
                })}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
