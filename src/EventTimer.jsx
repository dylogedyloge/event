import React from 'react'
import { useEffect,useState } from 'react'
import {  Typography,  Box } from "@mui/material";

const EventTimer = () => {
    const calculateTimeLeft = () => {
        const targetDate = new Date("2025-05-15T19:00:00").getTime();
        const now = new Date().getTime();
        const difference = targetDate - now;
    
        let timeLeft = {};
        if (difference > 0) {
          timeLeft = {
            روز: Math.floor(difference / (1000 * 60 * 60 * 24)),
            ساعت: Math.floor((difference / (1000 * 60 * 60)) % 24),
            دقیقه: Math.floor((difference / 1000 / 60) % 60),
            ثانیه: Math.floor((difference / 1000) % 60),
          };
        }
        return timeLeft;
      };
    
      const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
    
      useEffect(() => {
        const timer = setInterval(() => {
          setTimeLeft(calculateTimeLeft());
        }, 1000);
        return () => clearInterval(timer);
      }, []);
  return (
    <div>
    {Object.keys(timeLeft).length > 0 ? (
        <Box display="flex" gap={1}>
          {Object.keys(timeLeft).map((key) => (
            <Box
              key={key}
              sx={{ backgroundColor: "#FDC500", color: "black", p: 1.5, borderRadius: 1, textAlign: "center" }}
            >
              <Typography variant="h6" fontWeight="bold">
                {timeLeft[key]}
              </Typography>
              <Typography variant="body2">{key}</Typography>
            </Box>
          ))}
        </Box>
      ) : (
        <Typography variant="h6" color="white">
          زمان رویداد به پایان رسیده است!
        </Typography>
      )}
      </div>
  )
}

export default EventTimer