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

const HOURS = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17];
const HOUR_LABELS = [
  '8:00 AM',
  '9:00 AM',
  '10:00 AM',
  '11:00 AM',
  '12:00 PM',
  '1:00 PM',
  '2:00 PM', 
  '3:00 PM', 
  '4:00 PM', 
  '5:00 PM'];

const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export function CalendarGrid({
  activeTimes,
  setActiveTimes,
}: {
  activeTimes: Record<string, boolean>;
  setActiveTimes: Dispatch<SetStateAction<Record<string, boolean>>>;
}) {
  const handleQuarterClick = (dayName: string, hour: number, quarterIndex: number) => {
    const key = `${dayName}-${hour}-${quarterIndex}`;
    setActiveTimes(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

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
          {HOUR_LABELS.map(label => (
            <div key={label} className="time-slot">{label}</div>
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
                      onClick={() => handleQuarterClick(dayName, hour, quarterIndex)}
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
