import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers"
import moment from "moment";
import momentAdapter from '@date-io/moment'
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { TextField } from '@mui/material'
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { useState } from "react";



const DateSelect = () => {

  const momentFns = new momentAdapter()
  const initialMoment = momentFns.date()

  const [value, setValue] = useState(initialMoment);

  const handleChange = (newValue: any) => {
    setValue(newValue);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <DesktopDatePicker
        label=""
        inputFormat="MM/DD/YYYY"
        value={value}
        onChange={handleChange}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>

  )

}

export default DateSelect