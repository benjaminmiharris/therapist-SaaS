import { Helmet } from 'react-helmet-async';

import { MeetingsView } from 'src/sections/meetings/view';

// ----------------------------------------------------------------------

export default function MeetingsPage() {
  return (
    <>
      <Helmet>
        <title> Meetings </title>
      </Helmet>

      <MeetingsView />
    </>
  );
}
