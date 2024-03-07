import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const instruqtSectionCss = ":host{display:block}";
const InstruqtSectionStyle0 = instruqtSectionCss;

const InstruqtSection$1 = /*@__PURE__*/ proxyCustomElement(class InstruqtSection extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
    }
    render() {
        return (h(Host, { key: 'b9503eed014e06748a93b56458f807ee383ec25c' }, h("slot", { key: 'bb7ea14db9a8bb20bc05fb151fd08cda129f264f' })));
    }
    static get style() { return InstruqtSectionStyle0; }
}, [1, "instruqt-section"]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["instruqt-section"];
    components.forEach(tagName => { switch (tagName) {
        case "instruqt-section":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, InstruqtSection$1);
            }
            break;
    } });
}

const InstruqtSection = InstruqtSection$1;
const defineCustomElement = defineCustomElement$1;

export { InstruqtSection, defineCustomElement };
