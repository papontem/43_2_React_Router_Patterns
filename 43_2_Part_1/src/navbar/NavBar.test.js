import React from 'react';
import NavBar from './NavBar';
import {render} from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

// basic tests
// smoke
it('renders without crashing', function() {
  render(
    <MemoryRouter>
      <NavBar />
    </MemoryRouter>
  );
});
// snapshot
it('matches snapshot', function() {
  const container = render(
    <MemoryRouter>
      <NavBar />
    </MemoryRouter>
  );
  expect(container.asFragment()).toMatchSnapshot();
});
// end basic tests

// full render
it('mounts without crashing', function() {
  const { getByText } = render(
    <MemoryRouter>
      <NavBar />
    </MemoryRouter>
  );

  const blogLink = getByText(/Blog/i);
  expect(blogLink).toBeInTheDocument();
});
