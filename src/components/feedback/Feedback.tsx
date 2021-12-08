import { FC } from 'react';
import './Feedback.scss';
import { useToggle } from '../../hooks/useToggle';
import { FeedbackForm } from './FeedbackForm';

export const Feedback: FC = () => {
  const [open, toggle] = useToggle();

  return (
    <>
      <button
        className="Feedback"
        onClick={toggle}
      >{open ? 'Close' : 'Feedback'}</button>

      {open ? <FeedbackForm /> : null}
    </>
  );
};
