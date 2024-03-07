import { r as registerInstance, h, a as Host } from './index-2e35793f.js';

const instruqtAlertCss = ":host{display:block}.alert{padding:15px;margin-bottom:20px;border:1px solid transparent;border-radius:5px;background-color:var(--bg-color)}.alert.info{color:#0056b3;background-color:var(--alert-info-bg-color, #cce5ff);border-color:#b8daff}.alert.warning{color:#856404;background-color:var(--alert-warning-bg-color, #fff3cd);border-color:#ffeeba}.alert.error{color:#721c24;background-color:var(--alert-error-bg-color);border-color:#f5c6cb}.alert.success{color:#155724;background-color:var(--alert-success-bg-color, #d4edda);border-color:#c3e6cb}";

const InstruqtAlert = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, { key: '0bc339e2569c8af4fd4a47b022a460c72595f9c5' }, h("span", { key: 'd1172eb06ab1bcb19b4a2b986ae2fc55f1643869', class: "alert" }, h("slot", { key: 'ab57f362239c866a1e0fad41d3041b9c9edc3114' }))));
    }
};
InstruqtAlert.style = instruqtAlertCss;

export { InstruqtAlert as instruqt_alert };
