
function Button({ children, variant = "primary", onClick, ...props }) {
  const base = "px-4 py-2 rounded font-semibold";
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
  };

  return (
    <button
      onClick={onClick}
      className={`${base} ${variants[variant]}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
