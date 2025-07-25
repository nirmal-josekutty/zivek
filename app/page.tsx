export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-teal-700 via-teal-500 to-teal-300 text-white">
      <div className="text-center px-6">
        <h1 className="text-6xl font-extrabold mb-4">ZIVEK</h1>
        <p className="text-3xl font-semibold animate-pulse mb-6">Coming Soon</p>
        <p className="text-lg opacity-80 mb-8">
          Your trusted home services, reimagined.
        </p>
        <a
          href="mailto:contact@zivek.in"
          className="px-6 py-3 bg-white text-teal-700 rounded-full font-medium hover:bg-gray-200 transition"
        >
          Contact Us
        </a>
      </div>
    </div>
  );
}
