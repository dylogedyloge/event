import React, { useState, useEffect } from "react";
import { Container, Card, CardContent, TextField, Button, Typography, Grid, Box } from "@mui/material";

const EventRegistration = () => {
  const calculateTimeLeft = () => {
    const targetDate = new Date("2025-12-31T23:59:59").getTime(); // Updated to future date
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
    <Box sx={{ backgroundColor: "#065F5B", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", p: 2 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4} direction={{ xs: 'column-reverse', md: 'row' }} alignItems="center">
          {/* Event Details */}
          <Grid item xs={12} md={6}>
            <Typography variant="h4" fontWeight="bold" color="white" gutterBottom>
              یک بازی هیجان‌انگیز در سطح شهر!
            </Typography>
            <Typography variant="body1" color="white" paragraph>
              ما در آتریپا یک ماجراجویی واقعی برای شما داریم! تعداد زیادی کارت هدیه در نقاط مختلف شهر مخفی شده‌اند و شما می‌توانید با پیدا کردنشان، از آتریپا خرید کنید.
            </Typography>
            <Typography variant="h6" fontWeight="bold" color="#FDC500" gutterBottom>
              فرصت باقیمانده:
            </Typography>
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
          </Grid>

          {/* Registration Form */}
          <Grid item xs={12} md={6}>
            <Card sx={{ p: 3, borderRadius: 3 }}>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                ثبت نام رویداد
              </Typography>
              <Typography variant="body2" color="textSecondary" gutterBottom>
                لطفا درصورتی‌که کارت هدیه را پیدا کردید، اطلاعات مربوط به خود را وارد نمایید:
              </Typography>
              <TextField fullWidth margin="normal" label="نام" variant="outlined" />
              <TextField fullWidth margin="normal" label="نام خانوادگی" variant="outlined" />
              <TextField fullWidth margin="normal" label="شماره تماس" variant="outlined" />
              <TextField fullWidth margin="normal" label="شماره کارت هدیه" variant="outlined" />
              <Button fullWidth variant="contained" sx={{ mt: 2, backgroundColor: "#065F5B" }}>
                ثبت نام
              </Button>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default EventRegistration;