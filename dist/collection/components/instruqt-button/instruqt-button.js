import { Host, h } from "@stencil/core";
export class InstruqtButton {
    render() {
        return (h(Host, { key: '6fc2c65e4a8cc20384be88f03bdd9b1e3f36ea91' }, h("slot", { key: 'fcd61a309d87ee8e9f5314aeb591c4844d2c2ed9' })));
    }
    static get is() { return "instruqt-button"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["instruqt-button.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["instruqt-button.css"]
        };
    }
}
