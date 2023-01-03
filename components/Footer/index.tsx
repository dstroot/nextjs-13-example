export const Footer = () => {
  return (
    <footer className="bg-gray-800 dark:bg-gray-50">
      <div className="container px-4 py-12 mx-auto lg:flex lg:items-center lg:justify-between">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-100 dark:text-gray-900 sm:text-4xl">
          <span className="block">Ready to dive in?</span>
          <span className="block text-purple-600">
            Explore Tailwind CSS today.
          </span>
        </h2>
        <div className="mt-8 lex lg:mt-0 lg:flex-shrink-0">
          <div className="inline-flex rounded-md shadow">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://tailwindcss.com/"
              className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-white bg-purple-700 border border-transparent rounded-md hover:bg-purple-400"
            >
              Get started
            </a>
          </div>
          <div className="inline-flex ml-3 rounded-md shadow">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://tailwindcss.com/"
              className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-indigo-600 bg-white border border-transparent rounded-md hover:bg-indigo-50"
            >
              Learn more
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
