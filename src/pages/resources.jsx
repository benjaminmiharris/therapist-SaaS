import { Helmet } from 'react-helmet-async';

import { ResourcesView } from 'src/sections/resources/view';

// ----------------------------------------------------------------------

export default function ResourcesPage() {
  return (
    <>
      <Helmet>
        <title> Resources </title>
      </Helmet>

      <ResourcesView />
    </>
  );
}
