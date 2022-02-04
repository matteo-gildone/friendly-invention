const Button = ({ children, primary, ...props }) => {
  const styles = primary ? "text-neutral-50 bg-gray-900" : "";
  return (
    <button
      className={`border border-gray-900 py-2 px-4 rounded-lg shadow-md ${styles}`}
      {...props}
    >
      {children}
    </button>
  );
};

export { Button };
