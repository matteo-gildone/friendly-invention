const Button = ({ children, ...props }) => {
  return (
    <button
      className="border border-gray-900 py-2 px-4 rounded-lg shadow-md"
      {...props}
    >
      {children}
    </button>
  );
};

export { Button };
