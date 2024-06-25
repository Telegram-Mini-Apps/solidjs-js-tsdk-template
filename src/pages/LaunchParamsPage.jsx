import { DisplayData } from '@/components/DisplayData/DisplayData.jsx';
import { Link } from '@/components/Link/Link.jsx';
import { Page } from '@/components/Page/Page.jsx';
import { getWebApp } from '@/utils/getWebApp.js';

export function LaunchParamsPage() {
  const webApp = getWebApp();

  return (
    <Page
      title="Launch Params"
      disclaimer={(
        <>
          This page displays application
          {' '}
          <Link href="https://docs.telegram-mini-apps.com/platform/launch-parameters">
            launch parameters
          </Link>
          .
        </>
      )}
    >
      <DisplayData
        rows={[
          { title: 'tgWebAppPlatform', value: webApp.platform },
          { title: 'tgWebAppVersion', value: webApp.version },
          { title: 'tgWebAppStartParam', value: webApp.initDataUnsafe.start_param },
          { title: 'tgWebAppData', value: <Link href="/init-data">View</Link> },
          { title: 'tgWebAppThemeParams', value: <Link href="/theme-params">View</Link> },
        ]}
      />
    </Page>
  );
}
