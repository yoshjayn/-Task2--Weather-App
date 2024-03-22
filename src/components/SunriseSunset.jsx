import WbSunnyIcon from '@mui/icons-material/WbSunny'; // Import WbSunnyIcon
import BedtimeIcon from '@mui/icons-material/Nightlight'; // Import BedtimeIcon (Nightlight icon)
import moment from 'moment'; // Import moment.js for time formatting
import Content from './common/Content';
import { useEffect, useState } from 'react';

const SunriseSunset = ({ data }) => {
  const [sunriseFormatted, setSunriseFormatted] = useState(null);
  const [sunsetFormatted, setSunsetFormatted] = useState(null);

  useEffect(() => {
    if (data && data.sys) {
      const sunriseTimestamp = data.sys.sunrise;
      const sunsetTimestamp = data.sys.sunset;

      // Format sunrise and sunset times in AM/PM format using moment.js
      const sunriseMoment = moment.unix(sunriseTimestamp);
      const sunsetMoment = moment.unix(sunsetTimestamp);

      setSunriseFormatted(sunriseMoment.format('h:mm A'));
      setSunsetFormatted(sunsetMoment.format('h:mm A'));
    }
  }, [data]); // Dependency array: update on data change

  return (
    <Content heading={"Sunrise & Sunset"}>
        <div className="flex flex-row gap-10"> 
      <div className="flex flex-row gap-5 justify-center items-center">
        <WbSunnyIcon style={{ fontSize: "40px" }} />
        <div className="flex flex-col gap-2 justify-center ">
          Sunrise
          <div className="index">{sunriseFormatted}</div>
        </div>
        </div>
      <div className="flex flex-row gap-5 justify-center items-center">
        <BedtimeIcon style={{ fontSize: "40px" }} />
        <div className="flex flex-col gap-2 justify-center ">
          Sunset
          <div className="index">{sunsetFormatted}</div>
        </div>
        </div>
      </div>
    </Content>
  );
};

export default SunriseSunset;
