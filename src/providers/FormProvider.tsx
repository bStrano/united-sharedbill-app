import React, {useContext} from 'react';
import {FieldValues, useForm, UseFormReturn} from 'react-hook-form';
import {classValidatorResolver} from '@hookform/resolvers/class-validator';

interface FormProviderPropsInterface {
  children: React.ReactNode;
  formClass: any;
}

export const useAppForm = () => {
  return useContext(FormContext);
};

interface FormContextInterface {
  form: UseFormReturn<FieldValues, any>;
  onSubmit(): void;
}

const FormContext = React.createContext({} as FormContextInterface);

export function FormProvider(props: FormProviderPropsInterface) {
  const resolver = classValidatorResolver(props.formClass);
  const form = useForm({resolver});

  const onSubmit = () => {
    console.log('ON SUBMIT');
    // You can pass an async function for asynchronous validation.
    form.handleSubmit((data) => console.log("data"), (errors) => console.log(errors))()
  };

  return (
    <FormContext.Provider value={{form, onSubmit}}>
      {props.children}
    </FormContext.Provider>
  );
}
