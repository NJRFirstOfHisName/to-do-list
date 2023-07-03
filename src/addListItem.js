export default class ListItem {
    constructor(title, description = " ", dueDate, priority, project) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.project = project;
        this.completed = false;
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
    get getCompleted() {
        return this._completed;
    }
    get getProject() {
        return this._project;
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
    set completed(completed) {
        this._completed = completed;
    }
    set project(project) {
        this._project = project;
    }
}

// export default { ListItem }