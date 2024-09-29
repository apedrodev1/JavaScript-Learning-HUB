export class Logger {
    list = [];

    constructor(listEl) {
        this.listEl = listEl;
    }

    addMessage(msg) {
        this.list.push(msg);
        let li = document.createElement("li");
        li.innerText = msg;
        this.listEl.appendChild(li);
        this.listEl.scrollTo(0, this.listEl.scrollHeight);
    }
}
