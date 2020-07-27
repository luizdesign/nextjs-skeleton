import { screen, render } from '@testing-library/react';

import Main from '.';

describe('<Main />', () => {
  it('Should render the heading', () => {
    const { container } = render(<Main />);

    expect(
      screen.getByRole('heading', {
        name: /NextJs Skeleton/,
      })
    ).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
