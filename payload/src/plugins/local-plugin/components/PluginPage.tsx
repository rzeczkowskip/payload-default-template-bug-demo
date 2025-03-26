import { DefaultTemplate } from '@payloadcms/next/templates'
import { Gutter, RenderTitle } from '@payloadcms/ui'
import { notFound } from 'next/navigation'
import { type AdminViewServerProps } from 'payload'

type PluginPageProps = AdminViewServerProps

const PluginPage = ({ initPageResult, params, searchParams }: PluginPageProps) => {
  if (!initPageResult.permissions.canAccessAdmin) {
    return notFound()
  }

  return (
    <DefaultTemplate
      i18n={initPageResult?.req.i18n}
      locale={initPageResult?.locale}
      params={params}
      payload={initPageResult?.req.payload}
      permissions={initPageResult?.permissions}
      searchParams={searchParams}
      user={initPageResult?.req.user ?? undefined}
      visibleEntities={initPageResult.visibleEntities}
    >
      <Gutter>
        <RenderTitle title="Local Plugin Demo" />
        Hi from plugin!
      </Gutter>
    </DefaultTemplate>
  )
}

export default PluginPage
