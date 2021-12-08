import { ChangeEvent, Dispatch, SetStateAction, useCallback, useState } from 'react';
import { FeedbackFormData } from '../FeedbackInterfaces';

export function useFeedbackInputsHandler(): [FeedbackFormData, Dispatch<ChangeEvent<HTMLInputElement | HTMLTextAreaElement>>, Dispatch<SetStateAction<FeedbackFormData>>] {
  const [values, setValues] = useState<FeedbackFormData>({
    name: '',
    message: '',
  });

  const onInputChanges = useCallback((event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const inputNames = event.target.name;
    const inputValues = event.target.value;

    setValues({
      ...values,
      [inputNames]: inputValues,
    });
  }, [values, setValues]);

  return [values, onInputChanges, setValues];
}
