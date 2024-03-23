import DatePicker from 'react-datepicker';
import { useField, useFormikContext } from 'formik';
import './styles.css';

const Calendar = () => {
  const { setFieldValue } = useFormikContext();
  const [field] = useField('date');

  return (
    <DatePicker
      {...field}
      minDate={new Date()}
      name="date"
      calendarStartDay={1}
      dateFormat="EEEE, d"
      selected={field.value}
      onChange={val => {
        setFieldValue(field.name, val);
      }}
      placeholderText="Booking date"
      autoComplete="off"
    />
  );
};

export default Calendar;
