import { render, screen, fireEvent } from '@testing-library/react';
import Rating from './';

test('If rental as 4 stars', () => {
  render(<Rating>4</Rating>);
  const etoiles = screen.getByTestId('etoile');
  expect(etoiles.outerHTML).toEqual(
    `<div class="star" data-testid="etoile"><svg fill="#e3e3e3" class="on">starry.svg</svg><svg fill="#e3e3e3" class="on">starry.svg</svg><svg fill="#e3e3e3" class="on">starry.svg</svg><svg fill="#e3e3e3" class="on">starry.svg</svg><svg fill="#e3e3e3" class="off">starry.svg</svg></div>`
  );
});
