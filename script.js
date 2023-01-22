// #1 У стдентів повинні бути наступні властивості: university, course, fullName, вони передаються при створенні студента(в конструктор).

class Student {
    constructor(university, course, fullName) {
        this.university = university;
        this.course = course;
        this.fullName = fullName;
        this.marks = [5, 4, 4, 5,];
        this.active = true;
    };

    // #2 Створіть метод this.getInfo() -> "Студент 1го курсу Вищої Школи Психотерапії м.Одеса, Остап Родоманський Бендер", метод повертає сукупну інформацію про курс, учбовий заклад та імені студента.
    getInfo() {
        return ('Студент ' + this.course + ' курсу ' + this.university + ' - ' + this.fullName);
    };
    
    // #3 Створіть геттер оцінок this.marks, який повертає масив оцінок студента [5, 4, 4, 5]
    get rating() {
        return this.active ? this.marks : null;
    };
    
    // #4 Створіть сеттер оцінок this.marks = 5, який дозволяє поставити оцінку студенту. Після того, як оцінка поставлена, геттер повинен повернути масив this.marks -> [5, 4, 4, 5, 5]
    set rating(newMark) {
        if (this.active) {
            this.marks.push(newMark);
        }
    };

    // #5 Створіть метод отримання середнього балу this.getAverageMark() -> 4.6
    getAverageMark() {
        return this.marks.reduce((sum, current) => sum + current, 0) / this.marks.length; 
    };

    // #6 Створіть метод this.dismiss, який "виключить" студента. Після виклику цього методу – ставити студенту оцінки та отримувати їх більше не можна. (Ніяких помилок, просто повертається завжди null замість масиву оцінок)
    dismiss() {
        this.active = false;
    };

    // #7 Створіть метод this.recover, який дозволить поновити студента
    recover() {
        this.active = true;
    };
    
}

// #2
let student = new Student ('Вищої Школи Психотерапії м.Одеса', '1', 'Остап Родоманський Бендер');
console.log(student.getInfo());

// #3 / #4
student.rating = 5
console.log(student.rating);    

// №5
console.log(student.getAverageMark());

// #6
student.dismiss();
console.log("Студента виключено:", student.fullName, student.rating);

// #7
student.recover();
console.log("Студента поновлено:", student.fullName, student.rating);


// Advanced

// #1 Створіть новий клас BudgetStudent, який повністю наслідує клас Student
// #3 Метод отримання стипендії автоматично викликається кожні 30 секунд післе створення об'єкту. Підказка: викликайте його в constructor

class BudgetStudent extends Student {
    constructor(university, course, fullName) {
        super(university, course, fullName);
        this.marks = [3, 3, 4, 3,];
        this.active = true;
        setInterval(() => this.getScholarship(), 30000)
    }

// #2 Бюджетний студент може отримати стипендію за допомогою методу this.getScholarship. Отримання стипендії супроводжується виведенням інформації в консоль: Ви отримали 1400 грн. стипендії
// #4 Студент отримує стипендію тільки в тому випадку, якщо середній бал у нього вище або дорівнює 4.0

    getScholarship() {
        if (this.getAverageMark() >= 4) {
            console.log("Ви отримали 1400 грн. стипендії");
        } else {
            console.log("Ви не отримуєте стипендію");
        }
  }    

// #5 Якщо студента виключено, він не отримує стипендію (думаю це було і так очевидно:) )
    
    getDismiss_2() {
        if (this.active = false) {
            console.log('Ви отримуєте стипендію');
        } else {
            console.log('Вас виключено - стипандію не отримуєте');
        }
    };
}

let secondStudent = new BudgetStudent ('Вищої Школи Психотерапії м.Одеса', '2', 'Іван Іванович Іванов');

// tests

console.log(secondStudent.getInfo());

console.log(secondStudent.marks);

console.log(secondStudent.getAverageMark());

secondStudent.getDismiss_2();
