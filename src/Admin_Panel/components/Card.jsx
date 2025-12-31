export default function Card({ children, className = "" }) {
  return (
    <div className={`bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ${className}`}>
      {children}
    </div>
  );
}
