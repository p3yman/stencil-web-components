import { InstruqtAlert } from './instruqt-alert.js';
import { InstruqtButton } from './instruqt-button.js';
import { InstruqtSection } from './instruqt-section.js';
export { getAssetPath, setAssetPath, setNonce, setPlatformOptions } from '@stencil/core/internal/client';

const defineCustomElements = (opts) => {
    if (typeof customElements !== 'undefined') {
        [
            InstruqtAlert,
            InstruqtButton,
            InstruqtSection,
        ].forEach(cmp => {
            if (!customElements.get(cmp.is)) {
                customElements.define(cmp.is, cmp, opts);
            }
        });
    }
};

export { defineCustomElements };
