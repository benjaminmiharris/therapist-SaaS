import { Helmet } from 'react-helmet-async';

import { BlogView } from 'src/sections/blog/view';

// ----------------------------------------------------------------------

export default function MeetingsPage() {
  return (
    <>
      <Helmet>
        <title> Meetings </title>
      </Helmet>

      <BlogView />
    </>
  );
}
