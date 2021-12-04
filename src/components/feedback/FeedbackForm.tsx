import { ChangeEvent, FC, FormEvent, useCallback, useState } from 'react';
import './FeedbackForm.scss';
import { FeedbackTextAlert } from './FeedbackTextAlert';
import { FeedbackInputAlert } from './FeedbackInputAlert';

export const FeedbackForm: FC = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const [textareaValue, setTextareaValue] = useState<string>('');

  const [showInputAlert, setShowInputAlert] = useState<boolean>(false);
  const [showTextAlert, setShowTextAlert] = useState<boolean>(false);

  const inputHandler = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    setShowInputAlert(false);
  }, [setInputValue]);

  const textareaHandler = useCallback((event: ChangeEvent<HTMLTextAreaElement>) => {
    setTextareaValue(event.target.value);
    setShowTextAlert(false);
  }, [setTextareaValue]);

  const sendForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!inputValue.trim().length) {
      setShowInputAlert(true);
    } else if (textareaValue.trim().length < 30) {
      setShowTextAlert(true);
    } else {
      console.log('Input text is: ', inputValue.trim(), 'textarea text is: ', textareaValue.trim());
      setInputValue('');
      setTextareaValue('');
    }
  };

  return (
    <form onSubmit={sendForm} action="/" className="FeedbackForm">
      <h1 className="form-title">Feedback</h1>

      <input className="input-name" value={inputValue} type="text" placeholder="Your name"
             onChange={inputHandler} />

      {showInputAlert ? <FeedbackInputAlert /> : null}

      <textarea className="textarea" value={textareaValue} placeholder="Your message"
                onChange={textareaHandler} />

      {showTextAlert ? <FeedbackTextAlert /> : null}

      <button className="form-send" type="submit">Send</button>
    </form>
  );
};
