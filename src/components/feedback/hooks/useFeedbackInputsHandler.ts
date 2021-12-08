import { ChangeEvent, Dispatch, SetStateAction, useCallback, useState } from 'react';
import { FeedbackFormData } from '../FeedbackInterfaces';
import { FeedbackFormFieldName } from '../enums/FeedbackEnum';

export function useFeedbackInputsHandler(): [FeedbackFormData, Dispatch<ChangeEvent<HTMLInputElement | HTMLTextAreaElement>>, Dispatch<SetStateAction<FeedbackFormData>>] {
  const [values, setValues] = useState<FeedbackFormData>({
    [FeedbackFormFieldName.Name]: '',
    [FeedbackFormFieldName.Message]: '',
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
