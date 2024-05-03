export class Event {
  name: string;
  date: string;
  hours: string;
  period: string;
  duration: string;
  direccion: string;
  category: string;

  constructor(name: string, date: string, hours: string, period: string, duration: string, direccion: string, category: string) {
    this.name = name;
    this.date = date;
    this.hours = hours;
    this.period = period;
    this.duration = duration;
    this.direccion = direccion;
    this.category = category;
  }
}
