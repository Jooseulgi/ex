import Page from "../common/page";

export default class Index extends Page {
    constructor() {
        super();
    }
}

document.addEventListener("DOMContentLoaded", function() {
    new Index();
});
