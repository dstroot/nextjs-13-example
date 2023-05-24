// The not-found file is used to render UI when the notFound function
// is thrown within a route segment. Along with serving a custom UI,
// Next.js will also return a 404 HTTP status code.

export default function NotFound() {
  return (
    <>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
    </>
  );
}
