import { render, screen, fireEvent } from '@testing-library/react';
import Collapse from './';

describe('Test collapse', () => {
  test('Collapse opens', async () => {
    const { container } = render(<Collapse></Collapse>);

    const collapseClose = screen.getByTestId('coll');
    expect(collapseClose.outerHTML).toEqual(
      `<div class="collapse__title" data-testid="coll"><img src="arrow_close.png" alt="collapse close"></div>`
    );

    fireEvent.click(collapseClose);

    //console.log(screen.getByTestId('collContent'));
    expect(collapseClose.outerHTML).toEqual(
      `<div class="collapse__title" data-testid="coll"><img src="arrow_open.png" alt="collapse open"></div>`
    );
    fireEvent.click(collapseClose);
  });
});
