import { FC, FormEvent, useEffect, useState } from 'react';
import './FeedbackForm.scss';
import { FeedbackTextAlert } from './FeedbackTextAlert';
import { FeedbackInputAlert } from './FeedbackInputAlert';
import { useFeedbackInputsHandler } from './hooks/useFeedbackInputsHandler';
import { FeedbackFormFieldName } from './enums/FeedbackEnum';

export const FeedbackForm: FC = () => {
  const [values, onInputChanges, setValues] = useFeedbackInputsHandler();

  const [inputAlert, setInputAlert] = useState<boolean>(false);
  const [textAlert, setTextAlert] = useState<boolean>(false);

  useEffect(() => {
    setInputAlert(false);
  }, [values.name]);

  useEffect(() => {
    setTextAlert(false);
  }, [values.message]);

  const sendForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!values.name.trim().length) {
      setInputAlert(true);
    } else if (values.message.trim().length < 30) {
      setTextAlert(true);
    } else {
      console.log('Input text is: ', values.name.trim(), 'textarea text is: ', values.message.trim());
      setValues({
        name: '',
        message: '',
      });
    }
  };

  return (
    <form
      onSubmit={sendForm}
      action="/"
      className="FeedbackForm"
    >
      <h1 className="form-title">Feedback</h1>

      <input
        className="input-name"
        name={FeedbackFormFieldName.Name}
        value={values.name}
        type="text"
        placeholder="Your name"
        onChange={onInputChanges}
      />

      {inputAlert ? <FeedbackInputAlert /> : null}

      <textarea
        className="textarea"
        name={FeedbackFormFieldName.Message}
        value={values.message}
        placeholder="Your message"
        onChange={onInputChanges}
      />

      {textAlert ? <FeedbackTextAlert /> : null}

      <button
        className="form-send"
        type="submit"
      >Send
      </button>
    </form>
  );
};
