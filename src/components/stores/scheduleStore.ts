import { defineStore } from 'pinia'
import { ref } from "vue";


export const useScheduleStore = defineStore('schedule', () => {

    // отпрвляю группу и даты, получаю расписание
    const schedule = ref<any>([
        {
            date: "03-03-2003",
            schedule: [
                {
                    number: 2,
                    lessonName: "Приготовление холодных блюд",
                    lessonType: 1,
                    teacherName: "Иванов И.И.",
                    teacherID: 123,
                    room: "321"
                }
            ]
        },
        {
            date: "04-03-2003",
            schedule: [
                {
                    number: 1,
                    lessonName: "Основы кулинарии",
                    lessonType: 1,
                    teacherName: "Петров А.А.",
                    teacherID: 456,
                    room: "214"
                },
                {
                    number: 3,
                    lessonName: "Сервировка",
                    lessonType: 2,
                    teacherName: "Смирнова О.О.",
                    teacherID: 789,
                    room: "101"
                }
            ]
        },
        {
            date: "05-03-2003",
            schedule: [
                {
                    number: 2,
                    lessonName: "Технологии приготовления",
                    lessonType: 1,
                    teacherName: "Кузнецов М.М.",
                    teacherID: 101,
                    room: "305"
                }
            ]
        },
        {
            date: "06-03-2003",
            schedule: [
                {
                    number: 1,
                    lessonName: "Уход за оборудованием",
                    lessonType: 2,
                    teacherName: "Лебедев Д.Д.",
                    teacherID: 112,
                    room: "207"
                }
            ]
        },
        {
            date: "07-03-2003",
            schedule: [
                {
                    number: 2,
                    lessonName: "Теория питания",
                    lessonType: 1,
                    teacherName: "Новикова Н.Н.",
                    teacherID: 131,
                    room: "118"
                }
            ]
        },
        {
            date: "08-03-2003",
            schedule: [
                {
                    number: 1,
                    lessonName: "Экология и безопасность",
                    lessonType: 2,
                    teacherName: "Горбунов С.С.",
                    teacherID: 142,
                    room: "209"
                }
            ]
        },
        {
            date: "09-03-2003",
            schedule: [
                {
                    number: 3,
                    lessonName: "Практическая кулинария",
                    lessonType: 1,
                    teacherName: "Иванов И.И.",
                    teacherID: 123,
                    room: "321"
                }
            ]
        }
    ]);

    return { schedule }
})