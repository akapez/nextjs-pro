export default function Button({ label }: { label: string }) {
  return (
    <button className="bg-blue-800 px-5 py-2 text-2xl text-white">
      {label}
    </button>
  );
}
