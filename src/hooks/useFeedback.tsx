import {useCallback} from 'react';
import Toast from 'react-native-toast-message';

interface FeedbackInterface {
  title: string;
  message: string;
}
export function useFeedback() {
  const showSuccessFeedback = useCallback((props: FeedbackInterface) => {
    Toast.show({
      type: 'success',
      text1: props.title,
      text2: props.message,
    });
  }, []);

  const showErrorFeedback = useCallback((props: FeedbackInterface) => {
    Toast.show({
      type: 'error',
      text1: props.title,
      text2: props.message,
    });
  }, []);

  return {showSuccessFeedback, showErrorFeedback};
}
