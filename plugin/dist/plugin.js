const breakingPluginDemo = () => {
    return (incomingConfig) => {
        return {
            ...incomingConfig,
            admin: {
                ...incomingConfig.admin,
                components: {
                    ...(incomingConfig.admin?.components ?? {}),
                    afterNavLinks: [
                        ...(incomingConfig.admin?.components?.afterNavLinks ?? []),
                        {
                            path: 'breaking-plugin-demo/components#AfterNavLinks',
                        },
                    ],
                    views: {
                        ...(incomingConfig.admin?.components?.views ?? {}),
                        breakingPluginDemo: {
                            Component: {
                                path: 'breaking-plugin-demo/components#PluginPage',
                            },
                            path: '/breaking-plugin-demo',
                        },
                    },
                },
            },
        };
    };
};
export default breakingPluginDemo;
//# sourceMappingURL=plugin.js.map