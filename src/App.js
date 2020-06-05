import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider } from '@ui-kitten/components';

import Navigation from './Navigation';

export default function App() {
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <Navigation />
    </ApplicationProvider>
  );
}
