import { FC } from 'react';

const styles = {
  marginTop: '10px',
  color: '#000000',
  fontSize: '12px',
};

export const FeedbackInputAlert: FC = () => {
  return (
    <div
      className="textarea-alert"
      style={styles}
    >Name is required!</div>
  );
};
