import Box from "../common/Box";
import Content from "../common/Content";
import VisibilityIcon from "@mui/icons-material/Visibility";
import AirIcon from "@mui/icons-material/Air";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import BedtimeIcon from "@mui/icons-material/Bedtime";
import ThermostatIcon from "@mui/icons-material/Thermostat";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import WavesIcon from "@mui/icons-material/Waves";

const Highlights = () => {
  return (
    <Box>
      Today's Highlights
      <div className="">
        <div className="flex flex-row gap-10 pb-5 justify-between items-center">
          <Content heading={"Air Quality Index"} info={"Good"}>
            <div className="flex flex-row gap-10 justify-center items-center">
              <AirIcon style={{ fontSize: "30px" }} />
              <div className="flex flex-col gap-3 justify-center items-center">
                PM25
                <div className="index">1.32</div>
              </div>
              <div className="flex flex-col gap-3 justify-center items-center">
                SO2
                <div className="index">1.32</div>
              </div>
              <div className="flex flex-col gap-3 justify-center items-center">
                NO2
                <div className="index">1.32</div>
              </div>
              <div className="flex flex-col gap-3 justify-center items-center">
                O3
                <div className="index">1.32</div>
              </div>
            </div>
          </Content>

          <Content heading={"Sunrise & Sunset"}>
            <div className="flex flex-row gap-10 justify-center items-center">
              <WbSunnyIcon style={{ fontSize: "30px" }} />
              <div className="flex flex-col gap-3 justify-center items-center">
                Sunrise
                <div className="index">1.32 AM</div>
              </div>
              <BedtimeIcon style={{ fontSize: "30px" }} />
              <div className="flex flex-col gap-3 justify-center items-center">
                Sunset
                <div className="index">1.32 PM</div>
              </div>
            </div>
          </Content>
        </div>
        <div className="flex flex-row pb-5 justify-between items-center">
          <Content heading={"Humidity"}>
            <div className="flex flex-row gap-12 items-center">
              <WaterDropIcon style={{ fontSize: "30px" }} />
              <div className="index">60%</div>
            </div>
          </Content>
          <Content heading={"Pressure"}>
            <div className="flex flex-row gap-12 items-center">
              <WavesIcon style={{ fontSize: "30px" }} />
              <div className="index">1100hPa</div>
            </div>
          </Content>
          <Content heading={"Visibility"}>
            <div className="flex flex-row gap-12 items-center">
              <VisibilityIcon style={{ fontSize: "30px" }} />
              <div className="index">10km</div>
            </div>
          </Content>
          <Content heading={"Feels Like"}>
            <div className="flex flex-row gap-12 items-center">
              <ThermostatIcon style={{ fontSize: "30px" }} />
              <div className="index">13ºc</div>
            </div>
          </Content>
        </div>
      </div>
    </Box>
  );
};
export default Highlights;
