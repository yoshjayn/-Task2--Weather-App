import Box from "../common/Box";
import Content from "../common/Content";
import VisibilityIcon from "@mui/icons-material/Visibility";
import AirIcon from "@mui/icons-material/Air";
import ThermostatIcon from "@mui/icons-material/Thermostat";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import WavesIcon from "@mui/icons-material/Waves";
import SunriseSunset from "../SunriseSunset";
// import SunriseSunset from './SunriseSunset'; // Adjust the path if needed



const Highlights = ({data}) => {

const roundedMaxTemp = Math.round(data?.main?.temp_max);
const roundedMinTemp = Math.round(data?.main?.temp_min);
  return (
    <Box>
      Today's Highlights
      <div className="pt-10">
        <div className="flex flex-row gap-10 pb-12 justify-between items-center">
          <SunriseSunset data={data} /> {/* Render SunriseSunset with data */}
      
          <Content heading={"Wind & Temp"} >
            <div className="flex flex-row gap-10 justify-center items-center">
              <AirIcon style={{ fontSize: "30px" }} />
              <div className="flex flex-col gap-3 justify-center items-center">
                Direction
                <div className="index">{data?.wind?.deg}°</div>
              </div>
              <div className="flex flex-col gap-3 justify-center items-center">
                Speed
                <div className="index">{data?.wind?.speed}m/s</div>
              </div>
              <div className="flex flex-col gap-3 justify-center items-center">
                Max
                <div className="index">{roundedMaxTemp}°</div>
              </div>
              <div className="flex flex-col gap-3 justify-center items-center">
                Min
                <div className="index">{roundedMinTemp}°</div>
              </div>
            </div>
          </Content>

        </div>
        <div className="flex flex-row pb-5 justify-between items-center">
          <Content heading={"Humidity (0-100)"}>
            <div className="flex flex-row gap-12 items-center">
              <WaterDropIcon style={{ fontSize: "30px" }} />
              <div className="index">{data?.main?.humidity}</div>
            </div>
          </Content>
          <Content heading={"Pressure (in hPa)"}>
            <div className="flex flex-row gap-12 items-center">
              <WavesIcon style={{ fontSize: "30px" }} />
              <div className="index">{data?.main?.pressure}</div>
            </div>
          </Content>
          <Content heading={"Visibility (in meters)"}>
            <div className="flex flex-row gap-12 items-center">
              <VisibilityIcon style={{ fontSize: "30px" }} />
              <div className="index">{data?.visibility}</div>
            </div>
          </Content>
          <Content heading={"Feels Like (in Kelvin)"}>
            <div className="flex flex-row gap-12 items-center">
              <ThermostatIcon style={{ fontSize: "30px" }} />
              <div className="index">{data?.main?.feels_like}</div>
            </div>
          </Content>
        </div>
      </div>
    </Box>
  );
};
export default Highlights;
