import { r as registerInstance, h, H as Host } from './index-8e5c4f45.js';

const instruqtAlertCss = ":host{display:block}.alert{padding:15px;margin-bottom:20px;border:1px solid transparent;border-radius:5px}.alert.info{color:#0056b3;background-color:var(--alert-info-bg-color, #cce5ff);border-color:#b8daff}.alert.warning{color:#856404;background-color:var(--alert-warning-bg-color, #fff3cd);border-color:#ffeeba}.alert.error{color:#721c24;background-color:var(--alert-error-bg-color);border-color:#f5c6cb}.alert.success{color:#155724;background-color:var(--alert-success-bg-color, #d4edda);border-color:#c3e6cb}";
const InstruqtAlertStyle0 = instruqtAlertCss;

const InstruqtAlert = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, { key: '166e997f3220e56357ea60b5be069e2445035b3a' }, h("span", { key: 'cade4ce424ae64c4b4e57e6793ad2098ba25f8b8', class: "alert error" }, h("slot", { key: '08f88f4f14faa9ca03f3a1073d16e333128514fd' }))));
    }
};
InstruqtAlert.style = InstruqtAlertStyle0;

export { InstruqtAlert as instruqt_alert };
