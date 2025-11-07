export interface ScheduleLesson {
    number: number;
    lessonName: string;
    lessonType: 1 | 2; // тип 1 — лекция, 2 — практика
    teacherName: string;
    teacherID: number;
    room: string;
}

export interface ScheduleDay {
    date: string; // формат "dd-mm-yyyy"
    schedule: ScheduleLesson[];
}