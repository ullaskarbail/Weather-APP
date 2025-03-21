import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./InfoBox.css";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
export default function InfoBox({ info = {} }) { 
  const INIT_URL =
    "https://images.unsplash.com/photo-1680352267694-a7fd4c33d4e1?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGR1c3R5JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
  const HOT_URL="https://images.unsplash.com/photo-1524594081293-190a2fe0baae?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
  const COLD_URL="https://images.unsplash.com/photo-1612208695882-02f2322b7fee?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Q29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
  const Rain_URL="https://plus.unsplash.com/premium_photo-1674684223407-13e383e1f0e6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D";
  return (
    <div className="InfoBox">
      <div className="cardContainer">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia sx={{ height: 140 }}
           image={info.humidity>70?Rain_URL:info.temp>15?HOT_URL:COLD_URL}
            title="Weather Image" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info?.city || "Unknown City"} {info.humidity>70?<ThunderstormIcon/>:info.temp>15?<WbSunnyIcon/>:<AcUnitIcon/>}
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              <p>Temperature = {info?.temp ?? "N/A"}&deg;C</p>
              <p>Humidity = {info?.humidity ?? "N/A"}</p>
              <p>Min Temp = {info?.tempMin ?? "N/A"}&deg;C</p>
              <p>Max Temp = {info?.tempMax ?? "N/A"}&deg;C</p>
              <p>
                The weather can be described as <i>{info?.weather ?? "N/A"}</i> and
                feels like {info?.feelslike ?? "N/A"}&deg;C.
              </p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
