import { Host, h } from "@stencil/core";
export class InstruqtAlert {
    render() {
        return (h(Host, { key: '166e997f3220e56357ea60b5be069e2445035b3a' }, h("span", { key: 'cade4ce424ae64c4b4e57e6793ad2098ba25f8b8', class: "alert error" }, h("slot", { key: '08f88f4f14faa9ca03f3a1073d16e333128514fd' }))));
    }
    static get is() { return "instruqt-alert"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["instruqt-alert.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["instruqt-alert.css"]
        };
    }
}
