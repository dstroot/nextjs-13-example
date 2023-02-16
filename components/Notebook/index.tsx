'use client';

import React, { useRef, useEffect } from 'react';
import { Runtime, Inspector } from '@observablehq/runtime';
import notebook from 'a99b331307f7eae7';

function Notebook() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const runtime = new Runtime();
    runtime.module(notebook, Inspector.into(ref.current));
    return () => runtime.dispose();
  }, []);

  return (
    <>
      <div ref={ref} />
      {/* <p>
        Credit: <a href='https://observablehq.com/d/a99b331307f7eae7'>My test site by Dan Stroot</a>
      </p> */}
    </>
  );
}

export default Notebook;
