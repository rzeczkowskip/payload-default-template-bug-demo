# Payload Default Template Bug Demo

Custom views and components, that are configured through imported plugin, doesn't receive context from the root providers.
This causes an error when we want to create a custom page that's wrapped in the `DefaultTemplate`.

## Problems observed in the demo

1. AfterNavLinks: the link doesn't work. The href is there and opening in new tab works, but clicking on it does nothing
2. CustomWiew: `Error: Cannot destructure property 'l' of 'd' as it is undefined.`. This is caused by `useWindowInfo`
   somewhere in `DefaultTemplate` (probably nav-related).

None of this happens, when the plugin's code is next to the payload's. There is local-plugin-demo that shows this.
