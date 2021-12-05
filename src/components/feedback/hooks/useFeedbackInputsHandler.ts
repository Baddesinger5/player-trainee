import { ChangeEvent, Dispatch, SetStateAction, useCallback, useState } from 'react';
import { IFeedbackForm } from '../FeedbackInterfaces';

export function useFeedbackInputsHandler(): [IFeedbackForm, Dispatch<ChangeEvent<HTMLInputElement | HTMLTextAreaElement>>, Dispatch<SetStateAction<IFeedbackForm>>] {
  const [values, setValues] = useState<IFeedbackForm>({
    name: '',
    message: '',
  })

  const inputHandlers = useCallback((event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const inputNames = event.target.name;
    const inputValues = event.target.value;

    setValues({
      ...values,
      [inputNames]: inputValues
    })
  }, [values, setValues])

  return [values, inputHandlers, setValues]
}
