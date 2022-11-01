// useDocumentTitle.js
import { useEffect } from 'react';

function useTitle(title) {
  useEffect(() => {
    document.title = `Kasa | ${title}`;
  });
}

export default useTitle;
