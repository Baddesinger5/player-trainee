import { FC } from 'react';
import './Feedback.scss';
import { usePopupToggler } from '../../hooks/usePopupToggler';
import { FeedbackForm } from './FeedbackForm';

export const Feedback: FC = () => {
  const [toggle, onToggleHandler] = usePopupToggler();

  return (
    <>
      <button className="Feedback" onClick={onToggleHandler}>{toggle ? 'Close' : 'Feedback'}</button>

      {toggle ? <FeedbackForm /> : null}
    </>
  );
};
