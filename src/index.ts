

import { App } from 'vue';

import { VueNotifyConfig } from './types';

// Modal Components
import NotificationGroup from './components/NotificationGroup.vue';
import Notification from './components/Notification.vue';
// Layout Components
import Plaintext from './components/layouts/Plaintext.vue';

let appRef: App | undefined = undefined;

export default {
    install: (app: App, options: VueNotifyConfig): any => {
        if (!appRef) {
            appRef = app;
            app.config.globalProperties.$mwNotify = new VueNotify(options);

            // Modal Components
            app.component('mw-vn-notification-group', NotificationGroup);
            app.component('mw-vn-notification', Notification);
            // Layout Components
            app.component('mw-vn-plaintext', Plaintext);
        }
    }
}

class VueNotify {

    private config: VueNotifyConfig;

    constructor(config: VueNotifyConfig) {
        this.config = config;
    }
}

export function useVueNotify(): VueNotify {
    if (!appRef) {
        throw "VueNotify plugin was not initialized";
    } else {
        return appRef.config.globalProperties.$mwNotify;
    }
}