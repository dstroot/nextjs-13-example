'use client';

// import { useEffect } from "react";

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  // // Log the error to an error reporting service
  // useEffect(() => {
  //   console.error(error);
  // }, [error]);

  return (
    <div>
      <p>{error.message}</p>
      <button onClick={() => reset()}>Reset error boundary</button>
    </div>
  );
}
