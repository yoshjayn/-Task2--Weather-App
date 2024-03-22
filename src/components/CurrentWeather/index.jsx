import Box from "../common/Box";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LocationOnIcon from '@mui/icons-material/LocationOn';

var currentDate = new Date();

// Get the current date and time
// var currentDateTime = currentDate.toLocaleString();
// Get the formatted date using toLocaleDateString()
var formattedDate = currentDate.toLocaleDateString('en-US', { 
  weekday: 'long', 
  day: 'numeric', 
  month: 'long' 
});

const CurrentWeather = ({data}) => {
  debugger;
  // console.log("data=",data)
  const roundedTemp = Math.round(data?.main?.temp);
  const iconName = data?.weather[0]?.icon;
  const imagePath = `assets/images/weather_icons/${iconName}.png`;
 
 return <Box>
    <div className="label-1">Now</div>
    <div className="flex flex-row gap-8 justify-center items-center">
      <h1>{roundedTemp}°c</h1> 
      <img src={imagePath} alt="weather_icon" width="50" height="50" />
    </div>
    <div className="label-2">{data?.weather[0]?.description}</div>
    <hr className="my-5 opacity-50"></hr>
    <div className="flex flex-row gap-3"><CalendarMonthIcon/><div className="label-2" >{formattedDate}</div></div> 
    <div className="flex flex-row gap-3 mt-1"><LocationOnIcon/><div className="label-2" >{data?.name}, {data?.sys?.country}</div></div> 
  </Box>
};
export default CurrentWeather;