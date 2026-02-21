export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full text-center">
        <h1 className="text-3xl font-bold text-indigo-800 mb-4">
          📱 ContactVault
        </h1>
        <p className="text-gray-700 mb-6">
          Never lose your contacts again.<br />
          Backup safely for just <span className="font-bold text-green-600">₦100/month</span>
        </p>
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-3 rounded text-left mb-6">
          <p className="text-sm text-yellow-800">
            ✅ Your contacts stay private<br />
            ✅ One-click restore to any phone<br />
            ✅ Cancel anytime
          </p>
        </div>
        <a 
          href="/register" 
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg text-lg transition duration-200"
        >
          Get Started →
        </a>
      </div>
      <p className="text-gray-500 mt-6 text-sm">
        Built with ❤️ for Nigerians
      </p>
    </main>
  );
}
