import React from "react";
import { Card, CardMedia, CardContent, Typography, Box } from "@mui/material";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import WhatshotIcon from "@mui/icons-material/Whatshot";

function infoBox({ info }) {
  const INIT_URL =
    "https://images.unsplash.com/photo-1601134467661-3d775b999c8b?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";

  const HOT_URL =
    "https://images.unsplash.com/photo-1601134467661-3d775b999c8b?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
  const COLD_URL =
    "https://images.unsplash.com/photo-1524594081293-190a2fe0baae?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
  const RAIN_URL =
    "https://images.unsplash.com/photo-1519692933481-e162a57d6721?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cmFpbnxlbnwwfHwwfHx8MA%3D%3D";

  return (
    <div className="infoBox">
      <h1>Weather Info:</h1>
      <Box display="flex" justifyContent="center" mt={4}>
        <Card sx={{ maxWidth: 400, textAlign: "center" }}>
          <CardMedia
            component="img"
            height="200"
            image={
              info.humidity > 80
                ? RAIN_URL
                : info.temp > 15
                ? HOT_URL
                : COLD_URL
            }
            alt="Weather"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.humidity > 80 ? (
                <ThunderstormIcon />
              ) : info.temp > 15 ? (
                <WhatshotIcon />
              ) : (
                <AcUnitIcon />
              )} &nbsp; 
              {info.city}
            </Typography>

            <Typography variant="body2" color="text.secondary">
              <b>Feel Likes:</b> {info.feelLikes}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <b>Humidity:</b> {info.humidity}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <b>Temperature:</b> {info.temp}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <b>Temp Max:</b> {info.tempMax}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <b>Temp Min:</b> {info.tempMin}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <b>Weather:</b> {info.weather}
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </div>
  );
}

export default infoBox;
