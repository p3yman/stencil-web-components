import { Host, h } from "@stencil/core";
export class InstruqtSection {
    render() {
        return (h(Host, { key: 'b9503eed014e06748a93b56458f807ee383ec25c' }, h("slot", { key: 'bb7ea14db9a8bb20bc05fb151fd08cda129f264f' })));
    }
    static get is() { return "instruqt-section"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["instruqt-section.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["instruqt-section.css"]
        };
    }
}
