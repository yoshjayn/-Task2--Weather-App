import Box from "../common/Box";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LocationOnIcon from '@mui/icons-material/LocationOn';
const CurrentWeather = () => {
  return <Box>
    <div className="label-1">Now</div>
    <div className="flex flex-row gap-8 justify-center items-center">
      <h1>19°c</h1> 
    <img src="../assets/images/weather_icons/01d.png"/>
    </div>
    <div className="label-2">Clear Sky</div>
    <hr className="my-5 opacity-50"></hr>
    <div className="flex flex-row gap-3"><CalendarMonthIcon/><div className="label-2" >Tuesday 11, Mar</div></div> 
    <div className="flex flex-row gap-3 mt-1"><LocationOnIcon/><div className="label-2" >Varanasi, India</div></div> 
  </Box>
};
export default CurrentWeather;