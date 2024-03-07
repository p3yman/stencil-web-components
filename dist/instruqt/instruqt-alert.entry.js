import { r as registerInstance, h, a as Host } from './index-0ca2659e.js';

const instruqtAlertCss = ":host{display:block}.alert{padding:15px;margin-bottom:20px;border:1px solid transparent;border-radius:5px}.alert.info{color:#0056b3;background-color:var(--alert-info-bg-color, #cce5ff);border-color:#b8daff}.alert.warning{color:#856404;background-color:var(--alert-warning-bg-color, #fff3cd);border-color:#ffeeba}.alert.error{color:#721c24;background-color:var(--alert-error-bg-color);border-color:#f5c6cb}.alert.success{color:#155724;background-color:var(--alert-success-bg-color, #d4edda);border-color:#c3e6cb}";

const InstruqtAlert = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, { key: '7d801830343fc6384da0da18afc4711f10fe6fa4' }, h("span", { key: 'b0b56aaeab12313965320f1c4e8a426af4669887', class: "alert error" }, h("slot", { key: '48c2a4b5f3941452eb3a969ba39c42e2b6343319' }))));
    }
};
InstruqtAlert.style = instruqtAlertCss;

export { InstruqtAlert as instruqt_alert };
