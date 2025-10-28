import { useRouteError, useNavigate } from 'react-router-dom';

export const ErrorBoundary = () => {
  const error = useRouteError();
  const navigate = useNavigate();

  return (
    <div className="error-boundary">
      <h2>⚠️ Something Went Wrong</h2>
      <p>{error.message || 'Unknown error occurred'}</p>
      <div className="error-actions">
        <button onClick={() => navigate(-1)}>Go Back</button>
        <button onClick={() => navigate('/')}>Home</button>
      </div>
    </div>
  );
};