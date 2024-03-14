// import Box from "../common/Box";
import Tile from "../common/Tile";

const Highlights = () => {
return (
<div className="p-[30px] Box">
    Today's Highlights
    <div className="">
    <div className="flex flex-row gap-12 pb-5 justify-between items-center">
    <Tile>
        <div className="flex flex-row gap-12 pb-5 justify-center items-center container">
        Air Quality Index
        <span>Good</span>
        </div>
        <div className="flex flex-row gap-3 justify-center items-center">
        <img src="../assets/images/weather_icons/01n.png" alt="air_icon" />
        <div className="flex flex-col gap-3 justify-center items-center">
            PM25
            <div classname="index">1.32</div>
        </div>
        <div className="flex flex-col gap-3 justify-center items-center">
            SO2
            <div classname="index">1.32</div>
        </div>
        <div className="flex flex-col gap-3 justify-center items-center">
            NO2
            <div classname="index">1.32</div>
        </div>
        <div className="flex flex-col gap-3 justify-center items-center">
            O3
            <div classname="index">1.32</div>
        </div>
        </div>
    </Tile>
    <Tile>
        <div>Sunrise & Sunset</div>
        <div className="flex flex-row gap-3 justify-center items-center">
        <img src="../assets/images/weather_icons/01n.png" alt="Rise" />
        <div className="flex flex-col gap-3 justify-center items-center">
            Sunrise
            <div classname="index">1.32 AM</div>
        </div>
        <img src="../assets/images/weather_icons/01n.png" alt="Set" />
        <div className="flex flex-col gap-3 justify-center items-center">
            Sunset
            <div classname="index">1.32 PM</div>
        </div>
        </div>
    </Tile>
    </div>
    <div className="flex flex-row gap-12 pb-5 justify-center items-center">
    <Tile>
        Humidity
        <div className="flex flex-row gap-12 items-center">
        <img src="../assets/images/weather_icons/01n.png" alt="" />
        <div classname="index">60%</div>
        </div>
    </Tile>
    <Tile>
        Pressure
        <div className="flex flex-row gap-12 items-center">
        <img src="../assets/images/weather_icons/01n.png" alt="" />
        <div classname="index">60%</div>
        </div>
    </Tile>
    <Tile>
        Visibility
        <div className="flex flex-row gap-12 items-center">
        <img src="../assets/images/weather_icons/01n.png" alt="" />
        <div classname="index">60%</div>
        </div>
    </Tile>
    <Tile>
        Feels Like
        <div className="flex flex-row gap-12 items-center">
        <img src="../assets/images/weather_icons/01n.png" alt="" />
        <div classname="index">60%</div>
        </div>
    </Tile>
    </div>
    </div>
</div>
);
};
export default Highlights;
