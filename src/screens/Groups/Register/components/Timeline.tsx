import React from 'react';
import {View} from 'react-native';
import StepIndicator from 'react-native-step-indicator';
import {useAppTheme} from '../../../../../App';
import {FormattedMessage} from 'react-intl';
import {MESSAGES} from '@constants/messages-ids';

interface ITimelineProps {}

function Timeline(props: ITimelineProps) {
  const theme = useAppTheme();
  const labels = [
    <FormattedMessage id={MESSAGES.ids.LABEL_GROUP_CREATE} />,
    <FormattedMessage id={MESSAGES.ids.LABEL_INVITE_FRIENDS} />,
  ];
  const customStyles = {
    stepIndicatorSize: 30,
    currentStepIndicatorSize: 30,
    separatorStrokeWidth: 2,
    currentStepStrokeWidth: 3,
    stepStrokeCurrentColor: theme.colors.primary,
    stepStrokeWidth: 3,
    stepStrokeFinishedColor: theme.colors.primary,
    stepStrokeUnFinishedColor: theme.colors.card,
    separatorFinishedColor: theme.colors.primary,
    separatorUnFinishedColor: theme.colors.card,
    stepIndicatorFinishedColor: theme.colors.primary,
    stepIndicatorUnFinishedColor: theme.colors.card,
    stepIndicatorCurrentColor: theme.colors.background,
    stepIndicatorLabelFontSize: 13,
    currentStepIndicatorLabelFontSize: 13,
    stepIndicatorLabelCurrentColor: theme.colors.primary,
    stepIndicatorLabelFinishedColor: theme.colors.primary,
    stepIndicatorLabelUnFinishedColor: theme.colors.primary,
    labelColor: theme.colors.primary,
    labelSize: 13,
    currentStepLabelColor: theme.colors.primary,
  };

  return (
    <>
      <StepIndicator
        stepCount={labels.length}
        customStyles={customStyles}
        currentPosition={0}
        labels={labels}
      />
    </>
  );
}

export default Timeline;
