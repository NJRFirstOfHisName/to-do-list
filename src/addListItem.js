export default class ListItem {
    constructor(title, description = " ", dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }

    // timeLeft() {
    //     if(dueDate) {
    //         now = new Date();
    //         return (now.getTime() - this.dueDate.getTime())/36000;
    //     }
    // }
    get getTitle() {
        return this._title;
    }
    get getDescription() {
        return this._description;
    }
    get getDueDate() {
        return this._dueDate;
    }
    get getPriority() {
        return this._priority;
    }

    set title(title) {
        this._title = title;
    }
    set description(description) {
        this._description = description;
    }
    set dueDate(dueDate) {
        this._dueDate = dueDate;
    }
    set priority(priority) {
        this._priority = priority;
    }
}

// export default { ListItem }