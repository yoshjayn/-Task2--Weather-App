import Box from "./common/Box";

const TodayAt = () => {
  return <Box>
    <div className="label-1">Now</div>
    <div className="flex flex-row gap-8 justify-center items-center">
      <h1>19°c</h1> 
    <img src="assets/images/weather_icons/01d.png" alt="weather_icon"/>
    </div>
    <div className="label-2">Clear Sky</div>
    <hr className="my-5 opacity-50"></hr>
  </Box>
};
export default TodayAt;