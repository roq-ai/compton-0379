import * as yup from 'yup';

export const employeeValidationSchema = yup.object().shape({
  work_hours: yup.number().integer(),
  user_id: yup.string().nullable(),
  company_id: yup.string().nullable(),
});
