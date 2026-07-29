export default function PlayCover({ className = "" }: { className?: string }) {
  return (
    <div className={`flex h-full w-full items-center justify-center bg-black ${className}`}>
      <svg viewBox="0 0 100 100" className="h-1/4 w-1/4" fill="white">
        <polygon points="28,18 28,82 80,50" />
      </svg>
    </div>
  );
}
