export function Footer() {
  return (
    <footer
      className="bg-black/50 py-8"
      role="contentinfo"
      aria-label="Site footer"
    >
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="text-gray-300 text-sm mb-4 md:mb-0">
          © {new Date().getFullYear()} Next Step. כל הזכויות שמורות.
        </div>
        <nav
          aria-label="Contact information"
          className="flex items-center justify-center"
        >
          <div className="flex space-x-6">
            <a
              href="mailto:yournextstepbyyanir@gmail.com"
              aria-label="שלח לנו מייל"
              className="text-gray-300 hover:text-purple-400 transition focus:outline-none focus:ring-2 focus:ring-purple-400 rounded-md p-1"
              title="שלח לנו מייל - yournextstepbyyanir@gmail.com"
            >
              <span className="sr-only">
                Email - yournextstepbyyanir@gmail.com
              </span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
            </a>
            <a
              href="tel:0504080604"
              aria-label="התקשר אלינו"
              className="text-gray-300 hover:text-purple-400 transition focus:outline-none focus:ring-2 focus:ring-purple-400 rounded-md p-1"
              title="התקשר אלינו - 0504080604"
            >
              <span className="sr-only">Phone - 0504080604</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/company/%D7%94%D7%A6%D7%A2%D7%93-%D7%94%D7%91%D7%90-%D7%A7%D7%97-%D7%90%D7%AA-%D7%94%D7%A6%D7%A2%D7%93-%D7%94%D7%91%D7%90-%D7%9C%D7%A2%D7%91%D7%A8-%D7%A2%D7%95%D7%9C%D7%9D-%D7%94%D7%94%D7%99%D7%98%D7%A7"
              aria-label="עקבו אחרינו בלינקדאין"
              className="text-gray-300 hover:text-purple-400 transition focus:outline-none focus:ring-2 focus:ring-purple-400 rounded-md p-1"
              title="הפרופיל שלנו בלינקדאין"
              rel="noopener noreferrer"
            >
              <span className="sr-only">LinkedIn profile</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
          </div>
        </nav>
      </div>
    </footer>
  );
}
