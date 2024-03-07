import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const instruqtButtonCss = ":host{display:block}";
const InstruqtButtonStyle0 = instruqtButtonCss;

const InstruqtButton$1 = /*@__PURE__*/ proxyCustomElement(class InstruqtButton extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
    }
    render() {
        return (h(Host, { key: '6fc2c65e4a8cc20384be88f03bdd9b1e3f36ea91' }, h("slot", { key: 'fcd61a309d87ee8e9f5314aeb591c4844d2c2ed9' })));
    }
    static get style() { return InstruqtButtonStyle0; }
}, [1, "instruqt-button"]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["instruqt-button"];
    components.forEach(tagName => { switch (tagName) {
        case "instruqt-button":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, InstruqtButton$1);
            }
            break;
    } });
}

const InstruqtButton = InstruqtButton$1;
const defineCustomElement = defineCustomElement$1;

export { InstruqtButton, defineCustomElement };
