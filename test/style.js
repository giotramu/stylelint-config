import {css} from 'https://unpkg.com/emotion@latest/dist/emotion.esm.js';

const linkColor = 'black';
const activeColor = 'tomato';

export const header = css`
  display: flex;
  border: 1px solid #000;
  border-radius: 4px;
  padding: 32px;
  background-color: #fff;
  font-size: 24px;

  > a {
    &:link {
      color: ${linkColor};
    }

    &:hover {
      color: ${activeColor};
    }
  }
`;
