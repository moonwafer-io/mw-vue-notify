

import { App, reactive } from 'vue';
import { v4 as uuidv4 } from 'uuid';

import { InternalNotificationConfig, NotificationConfig, VueNotifyConfig } from './types';

// Modal Components
import NotificationDisplay from './components/NotificationDisplay.vue';
import NotificationGroup from './components/NotificationGroup.vue';
import Notification from './components/Notification.vue';
// Layout Components
import Plaintext from './components/layouts/Plaintext.vue';
import { positionToIndex } from './utilities';

let appRef: App | undefined = undefined;

export default {
    install: (app: App, options: VueNotifyConfig): any => {
        if (!appRef) {
            appRef = app;
            app.config.globalProperties.$mwNotify = new VueNotify(options);

            // Modal Components
            app.component('mw-vn-notification-display', NotificationDisplay);
            app.component('mw-vn-notification-group', NotificationGroup);
            app.component('mw-vn-notification', Notification);
            // Layout Components
            app.component('mw-vn-plaintext', Plaintext);
        }
    }
}

const DEFAULT_CONFIG: NotificationConfig = {
    position: 'bottom-right',
    dismissButton: true,
    dismissAfterMillis: 0,
    cssClasses: [],
};

class VueNotify {

    private config: VueNotifyConfig;

    // First array index determines position, the second index determines order.
    private notifications: InternalNotificationConfig[][];

    constructor(config: VueNotifyConfig) {
        this.config = config;

        // Set default configs for any not overridden
        if (!this.config.defaults) {
            this.config.defaults = DEFAULT_CONFIG;
        } else {
            this.config.defaults = { ...DEFAULT_CONFIG, ...this.config.defaults };
        }

        // Initialize each of the 9 positions
        this.notifications = reactive([]);
        for (let x = 0; x < 9; x++) {
            this.notifications[x] = [];
        }
    }

    getNotificationGroups(): InternalNotificationConfig[][] {
        return this.notifications;
    }

    showNotification(config: NotificationConfig): string {
        let resolvedConfig: InternalNotificationConfig = { id: uuidv4(), ...this.config.defaults, ...config };
        this.notifications[positionToIndex(resolvedConfig.position!)].push(resolvedConfig);
        return resolvedConfig.id;
    }
}

export function useVueNotify(): VueNotify {
    if (!appRef) {
        throw "VueNotify plugin was not initialized";
    } else {
        return appRef.config.globalProperties.$mwNotify;
    }
}