import { FC } from 'react';

export const FeedbackTextAlert: FC = () => {
  const styles = {
    marginBottom: '10px',
    color: '#000000',
    fontSize: '12px',
  };

  return (
    <div className="textarea-alert" style={styles}>Minimum 30 symbols!</div>
  );
};
