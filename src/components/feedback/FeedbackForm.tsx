import { FC, FormEvent, useEffect, useState } from 'react';
import './FeedbackForm.scss';
import { FeedbackTextAlert } from './FeedbackTextAlert';
import { FeedbackInputAlert } from './FeedbackInputAlert';
import { useFeedbackInputsHandler } from './hooks/useFeedbackInputsHandler';

export const FeedbackForm: FC = () => {
  const [values, inputHandlers, setValues] = useFeedbackInputsHandler();

  const [showInputAlert, setShowInputAlert] = useState<boolean>(false);
  const [showTextAlert, setShowTextAlert] = useState<boolean>(false);

  useEffect(() => {
    setShowInputAlert(false);
  }, [values.name]);

  useEffect(() => {
    setShowTextAlert(false);
  }, [values.message]);

  const sendForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!values.name.trim().length) {
      setShowInputAlert(true);
    } else if (values.message.trim().length < 30) {
      setShowTextAlert(true);
    } else {
      console.log('Input text is: ', values.name.trim(), 'textarea text is: ', values.message.trim());
      setValues({
        name: '',
        message: '',
      });
    }
  };

  return (
    <form onSubmit={sendForm} action="/" className="FeedbackForm">
      <h1 className="form-title">Feedback</h1>

      <input className="input-name" name="name" value={values.name} type="text" placeholder="Your name"
             onChange={inputHandlers} />

      {showInputAlert ? <FeedbackInputAlert /> : null}

      <textarea className="textarea" name="message" value={values.message} placeholder="Your message"
                onChange={inputHandlers} />

      {showTextAlert ? <FeedbackTextAlert /> : null}

      <button className="form-send" type="submit">Send</button>
    </form>
  );
};
