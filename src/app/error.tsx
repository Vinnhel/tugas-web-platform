'use client';
export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-red-500 text-xl">Terjadi Kesalahan!</h2>
      <button onClick={reset} className="mt-4 px-4 py-2 bg-red-500 text-white rounded">Coba Lagi</button>
    </div>
  );
}