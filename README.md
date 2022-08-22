
# Introduction

This is a Vue 3 library for showing notifications to the user. There are a few built-in notification styles, but you can easily style your own if you need some custom looks.

# Installation

Download from NPM:

```bash
# Yarn
yarn add mw-vue-notify

# NPM
npm install mw-vue-notify
```

Add to your Vue instance:

```javascript
import MWVueNotify from 'mw-vue-notify';
app.use(MWVueNotify, {}); // Can provide config to change default behavior - see below.
```

Add this tag to your top-level Vue component. This is where all of your notification elements will be mounted into the DOM.
```html
<mw-vn-notification-display></mw-vn-notification-display>
```

# Usage

To show a new notification:

```javascript
import { useVueNotify } from 'mw-vue-notify';

const mwVueNotify = useVueNotify();

mwVueNotify.showNotification({
    cssClasses: ['mw-vn-warning'],
    data: { message: "Task failed successfully!" },
});
```

If you need a non-built-in way to delete a notification (for example, dismissing notifications when the user navigates to a different page), `showNotification()` returns an ID. Pass this ID into `deleteNotification()` to delete the notification:

```javascript
let notificationId = mwVueNotify.showNotification(...);

// ...something gets triggered...

mwVueNotify.deleteNotification(notificationId)
```

# Configuration

Any subset of configuration options can be provided to either:

* The library when it's configured (modifies the default behavior across the whole application)
    ```javascript
    // Library configuration
    // (default values shown)
    import MWVueNotify from 'mw-vue-notify';
    app.use(MWVueNotify, {
        defaults: {
            position: 'bottom-right',
            dismissButton: true,
            dismissAfterMillis: 0,
            cssClasses: [],
            componentName: 'mw-vn-plaintext',
            data: {}, // Doesn't make sense to provide this option here, but listed for completeness.
        }
    });
    ```

* An individual notification when it's shown
    ```javascript
    // Per-notification configuration
    // (non-specified values default to the library configuration)
    mwVueNotify.showNotification({
        cssClasses: ['mw-vn-info'],
        dismissButton: false,
        dismissAfterMillis: 0,
        data: { message: "Did you know - you can display a notification that can't be closed? Fascinating." },
    });
    ```

## Available Configuration Options

```javascript
{
    // The screen position for your notification
    //   'top-left',    'top-center',    'top-right'
    //   'middle-left', 'middle-center', 'middle-right'
    //   'bottom-left', 'bottom-center', 'bottom-right'
    position: 'bottom-right',

    // Whether to show a small "X" to close the notification
    dismissButton: true,

    // Auto-close the notification after this many milliseconds.
    // 0 = disables the feature
    dismissAfterMillis: 0,

    // Additional css classes to apply. Default styling is gray/black.
    // Built-in classes include:
    //   'mw-vn-failure' = Red notifications
    //   'mw-vn-warning' = Yellow notifications
    //   'mw-vn-success' = Green notifications
    //   'mw-vn-info'    = Blue notifications
    cssClasses: [],

    // The layout for the notification's contents. Can use a custom component registered with
    // Vue, or one of our built-in components:
    //   'mw-vn-plaintext'         = One or more paragraphs of text.
    //   'mw-vn-message-with-list' = One paragraph, followed by an unordered list of items.
    componentName: 'mw-vn-plaintext',

    // The data shown in your notification. Depending on your chosen layout (`componentName`),
    // this will contain different keys and values.
    data: {},
}
```

# Layouts

A layout is a Vue component that defines how to display the notification's content. We provide some basic built-in layouts, but you can also create your own by making a custom vue component.

## Built-in

### `mw-vn-plaintext`

This is the default layout. Its `data` configuration takes a single parameter `message` which can either be a string or an array of strings. Each provided string is displayed in a paragraph tag.

```javascript
// Single message
mwVueNotify.showNotification({
    componentName: 'mw-vn-plaintext', // This is the default value, so can be omitted.
    data: { message: "I am a single message. Fear me!" },
});

// Multiple messages
mwVueNotify.showNotification({
    componentName: 'mw-vn-plaintext', // This is the default value, so can be omitted.
    data: { message: [
        "I have two paragraphs worth of messages.",
        "Everyone knows the second paragraph is where all the good stuff is.",
    ]},
});
```

### `mw-vn-message-with-list`

This layout displays a paragraph followed by an unordered list of items. Its `data` configuration takes two parameters:

* `message` (Optional) = The paragraph to display.
* `items` = An array of strings. Each element is an item in the unordered list.

```javascript
// A message with a list of items.
mwVueNotify.showNotification({
    componentName: 'mw-vn-message-with-list',
    data: {
        message: "Tasks completed successfully:",
        items: [
            "Corrupted all data",
            "Removed all partitions",
            "Saved backu#$%4*(____",
        ]
    },
    cssClasses: [ 'mw-vn-success' ],
});

// No message - just a list of items.
mwVueNotify.showNotification({
    componentName: 'mw-vn-message-with-list',
    data: {
        items: [
            "Password must contain at least one letter",
            "Password must contain at least one number",
            "Password must contain exactly 37 characters",
            "Password must contain between two and four shapes",
            "Password cannot be used by any other user",
        ]
    },
    cssClasses: [ 'mw-vn-failure' ],
});
```

## Custom

To create your own layout, create and register a new global Vue component. The `data` options should match your component's properties, so define properties on your component for each key of your desired `data` object.

I recommend using the built-in layouts as reference: (`./src/components/layouts/*`)
