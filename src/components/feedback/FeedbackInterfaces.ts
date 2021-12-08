import { FeedbackFormFieldName } from './enums/FeedbackEnum';

export type FeedbackFormData = {
  [key in FeedbackFormFieldName]: string
}
