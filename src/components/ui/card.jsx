// src/components/ui/card.jsx
export const Card = ({ children, className }) => {
  return (
    <div
      className={`bg-white shadow-lg rounded-lg p-4 border border-gray-200 ${className}`}
    >
      {children}
    </div>
  );
};
