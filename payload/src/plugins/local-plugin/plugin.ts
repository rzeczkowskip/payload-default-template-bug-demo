import { type Plugin } from 'payload'

const localPluginDemo = (): Plugin => {
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
              path: '@/plugins/local-plugin/components/AfterNavLinks',
            },
          ],
          views: {
            ...(incomingConfig.admin?.components?.views ?? {}),
            localPluginDemo: {
              Component: {
                path: '@/plugins/local-plugin/components/PluginPage',
              },
              path: '/local-plugin-demo',
            },
          },
        },
      },
    }
  }
}

export default localPluginDemo
