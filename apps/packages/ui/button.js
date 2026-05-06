export const Button = ({ children, onClick }) => (
  <button onClick={onClick} className="btn-styles">
    {children}
  </button>
);