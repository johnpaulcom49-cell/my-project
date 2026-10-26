
export default function Buttons({ children, size = "md", onClick, type = "button" }) {
  const sizes = {
    xs: "px-2.5 py-1.5 text-xs",
    sm: "px-3.5 py-2 text-sm",
    md: "px-4 py-2.5 text-sm",
    lg: "px-5 py-3 text-base",
    xl: "px-6 py-3.5 text-lg",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${sizes[size]} text-white font-semibold rounded-md cursor-pointer bg-zinc-800 hover:bg-zinc-900 border border-zinc-800 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-700`}
    >
      {children}
    </button>
  );
}
