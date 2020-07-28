import { withKnobs, text } from '@storybook/addon-knobs';

import Main from '.';

export default {
  title: 'Main',
  component: Main,
  decorators: [withKnobs],
};

export const Basic = () => (
  <Main
    title={text('title', 'NextJs Skeleton')}
    description={text(
      'description',
      'NextJs, Typescript, ReactJs e Styled Components'
    )}
  />
);
