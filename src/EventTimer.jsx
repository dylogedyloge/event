import React, { useEffect, useState } from "react";
import { Typography, Box } from "@mui/material";

const convertToPersianNumbers = (num) => {
  const persianDigits = "۰۱۲۳۴۵۶۷۸۹";
  return num.toString().replace(/\d/g, (d) => persianDigits[d]);
};

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
    <Box sx={{ backgroundColor: "white", p: 2, borderRadius: 2, textAlign: "center" }}>
      {Object.keys(timeLeft).length > 0 ? (
        <Box display="flex" gap={2} justifyContent="center">
          {Object.keys(timeLeft).map((key) => (
            <Box key={key} sx={{ textAlign: "center" }}>
              {/* Number inside orange box */}
              <Box
                sx={{
                  backgroundColor: "#F57C00",
                  color: "white",
                  p: 1.5,
                  borderRadius: 1,
                  minWidth: "50px",
                }}
              >
                <Typography variant="h6" fontWeight="bold">
                  {convertToPersianNumbers(timeLeft[key])}
                </Typography>
              </Box>
              {/* Label below the number */}
              <Typography variant="body2" color="black" sx={{ mt: 0.5 }}>
                {key}
              </Typography>
            </Box>
          ))}
        </Box>
      ) : (
        <Typography variant="h6" color="black">
          زمان رویداد به پایان رسیده است!
        </Typography>
      )}
    </Box>
  );
};

export default EventTimer;
