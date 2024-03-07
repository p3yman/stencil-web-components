import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const instruqtAlertCss = ":host{display:block}.alert{padding:15px;margin-bottom:20px;border:1px solid transparent;border-radius:5px}.alert.info{color:#0056b3;background-color:var(--alert-info-bg-color, #cce5ff);border-color:#b8daff}.alert.warning{color:#856404;background-color:var(--alert-warning-bg-color, #fff3cd);border-color:#ffeeba}.alert.error{color:#721c24;background-color:var(--alert-error-bg-color);border-color:#f5c6cb}.alert.success{color:#155724;background-color:var(--alert-success-bg-color, #d4edda);border-color:#c3e6cb}";
const InstruqtAlertStyle0 = instruqtAlertCss;

const InstruqtAlert$1 = /*@__PURE__*/ proxyCustomElement(class InstruqtAlert extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
    }
    render() {
        return (h(Host, { key: '166e997f3220e56357ea60b5be069e2445035b3a' }, h("span", { key: 'cade4ce424ae64c4b4e57e6793ad2098ba25f8b8', class: "alert error" }, h("slot", { key: '08f88f4f14faa9ca03f3a1073d16e333128514fd' }))));
    }
    static get style() { return InstruqtAlertStyle0; }
}, [1, "instruqt-alert"]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["instruqt-alert"];
    components.forEach(tagName => { switch (tagName) {
        case "instruqt-alert":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, InstruqtAlert$1);
            }
            break;
    } });
}

const InstruqtAlert = InstruqtAlert$1;
const defineCustomElement = defineCustomElement$1;

export { InstruqtAlert, defineCustomElement };
