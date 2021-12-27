
export type VueNotifyConfig = {
    defaults?: NotificationConfig;
};


export type Position = 'top-left' | 'top-center' | 'top-right' | 'middle-left' | 'middle-center' | 'middle-right' | 'bottom-left' | 'bottom-center' | 'bottom-right';

export interface NotificationConfig {
    position?: Position;
    dismissButton?: boolean;
    dismissAfterMillis?: number;
    cssClasses?: string[];
    componentName?: string;

    data?: any;
};
export interface InternalNotificationConfig extends NotificationConfig {
    id: string;
};