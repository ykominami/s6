import React from 'react';
import { MantineProvider } from '@mantine/core';
import { render, screen } from '@testing-library/react';

import Popup from './Popup';

it('should load and display Popup', async () => {
  render(
    <MantineProvider>
      <Popup />
    </MantineProvider>,
  );

  expect(
    screen.getByText((content, element) => {
      return element !== null && element.tagName.toLowerCase() === 'h1' && content === 'Popup';
    }),
  ).toBeInTheDocument();
});
