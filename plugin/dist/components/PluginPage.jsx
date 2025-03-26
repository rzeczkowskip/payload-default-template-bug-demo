import { DefaultTemplate } from '@payloadcms/next/templates';
import { Gutter, RenderTitle } from '@payloadcms/ui';
import { notFound } from 'next/navigation.js';
import React from 'react';
const PluginPage = ({ initPageResult, params, searchParams, }) => {
    if (!initPageResult.permissions.canAccessAdmin) {
        return notFound();
    }
    return (<DefaultTemplate i18n={initPageResult?.req.i18n} locale={initPageResult?.locale} params={params} payload={initPageResult?.req.payload} permissions={initPageResult?.permissions} searchParams={searchParams} user={initPageResult?.req.user ?? undefined} visibleEntities={initPageResult.visibleEntities}>
      <Gutter>
        <RenderTitle title="Breaking Plugin Demo"/>
        Hi from plugin!
      </Gutter>
    </DefaultTemplate>);
};
export default PluginPage;
//# sourceMappingURL=PluginPage.jsx.map