import { FC } from 'react';

const styles = {
  marginBottom: '10px',
  color: '#000000',
  fontSize: '12px',
};

export const FeedbackTextAlert: FC = () => {
  return (
    <div
      className="textarea-alert"
      style={styles}
    >Minimum 30 symbols!</div>
  );
};
