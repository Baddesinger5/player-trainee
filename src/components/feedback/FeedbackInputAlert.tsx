import { FC } from 'react';

export const FeedbackInputAlert: FC = () => {
  const styles = {
    marginTop: '10px',
    color: '#000000',
    fontSize: '12px'
  }

  return (
    <div className="textarea-alert" style={styles}>Name is required!</div>
  )
}
