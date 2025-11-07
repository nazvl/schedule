import {defineStore} from 'pinia'
import {ref} from "vue";
import {useLoaderStore} from './loaderStore';

export const useScheduleStore = defineStore('schedule', () => {
    const viewMode = ref<string | null>('')
    const loaderStore = useLoaderStore()
    const currentGroup = ref<Record<string, string> | null>();
    const choosenDate = ref('');
    const groupList = ref([
            {
                name: '42-ПИ',
                id: 123
            },
            {
                name: '42-ПИИ',
                id: 456
            }
        ]
    )
    const choosenYear = ref('0');
    const years = [
        {value: '1', name: '1'},
        {value: '2', name: '2'},
        {value: '3', name: '3'},
        {value: '4', name: '4'},
    ]

    // отпрвляю группу и даты, получаю расписание
    async function getSchedule() {
        loaderStore.status = true
        try {
            if (choosenDate.value && choosenYear.value && currentGroup.value) {
                await new Promise(resolve => setTimeout(() => {
                    console.log('zapros', choosenYear.value, currentGroup.value, choosenDate.value);
                    resolve(true)
                    schedule.value = mockSchedule
                }, 3000))
            }
        } catch (error) {
            console.log(error);
        } finally {
            loaderStore.status = false
        }
    }

    function clearAllData() {
        schedule.value = []
        viewMode.value = '';
        choosenDate.value = '';
        choosenYear.value = '0';
        currentGroup.value = null;
    }

    const schedule = ref<any>([]);
    const mockSchedule =
        [
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
                schedule:
                    [
                        {
                            number: 1,
                            lessonName: "Основы кулинарии",
                            lessonType: 1,
                            teacherName: "Петров А.А.",
                            teacherID: 456,
                            room: "214"
                        },
                        {
                            number: 2,
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
                        },
                        {
                            number: 4,
                            lessonName: "Сервировка",
                            lessonType: 2,
                            teacherName: "Смирнова О.О.",
                            teacherID: 789,
                            room: "101"
                        },
                    ]
            }
            ,
            {
                date: "05-03-2003",
                schedule:
                    [
                        {
                            number: 2,
                            lessonName: "Технологии приготовления",
                            lessonType: 1,
                            teacherName: "Кузнецов М.М.",
                            teacherID: 101,
                            room: "305"
                        }
                    ]
            }
            ,
            {
                date: "06-03-2003",
                schedule:
                    [
                        {
                            number: 1,
                            lessonName: "Уход за оборудованием",
                            lessonType: 2,
                            teacherName: "Лебедев Д.Д.",
                            teacherID: 112,
                            room: "207"
                        }
                    ]
            }
            ,
            {
                date: "07-03-2003",
                schedule:
                    [
                        {
                            number: 2,
                            lessonName: "Теория питания",
                            lessonType: 1,
                            teacherName: "Новикова Н.Н.",
                            teacherID: 131,
                            room: "118"
                        }
                    ]
            }
            ,
            {
                date: "08-03-2003",
                schedule:
                    [
                        {
                            number: 1,
                            lessonName: "Экология и безопасность",
                            lessonType: 2,
                            teacherName: "Горбунов С.С.",
                            teacherID: 142,
                            room: "209"
                        }
                    ]
            }
        ]

    return {schedule, viewMode, currentGroup, groupList, years, choosenYear, getSchedule, choosenDate, clearAllData};
})