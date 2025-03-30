import React, { useState, useEffect } from "react";
import {
  Container,
  Card,
  CardContent,
  TextField,
  Button,
  Typography,
  Grid,
  Box,
} from "@mui/material";
import EventTimer from "./EventTimer";
const EventRegistration = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#065F5B",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        p: 2,
        direction: "rtl",
      }}
    >
      <Container maxWidth="lg">
        {/* Use display flex instead of Grid for more direct control */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            gap: 4,
          }}
        >
          {/* Event Details */}
          <Box sx={{ flex: 1, width: { xs: "100%", md: "50%" } }}>
            <Typography
              variant="h4"
              fontWeight="bold"
              color="white"
              gutterBottom
            >
              یک بازی هیجان‌انگیز در سطح شهر!
            </Typography>
            <Typography variant="body1" color="white" paragraph>
              ما در آتریپا یک ماجراجویی واقعی برای شما داریم! تعداد زیادی کارت
              هدیه در نقاط مختلف شهر مخفی شده‌اند و شما می‌توانید با پیدا
              کردنشان، از آتریپا خرید کنید.
            </Typography>
            <Typography
              variant="h6"
              fontWeight="bold"
              color="#FDC500"
              gutterBottom
            >
              فرصت باقیمانده:
            </Typography>
            <EventTimer />
          </Box>

          {/* Registration Form */}
          <Box sx={{ flex: 1, width: { xs: "100%", md: "50%" } }}>
            <Card sx={{ p: 3, borderRadius: 3 }}>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                ثبت نام رویداد
              </Typography>
              <Typography variant="body2" color="textSecondary" gutterBottom>
                لطفا درصورتی‌که کارت هدیه را پیدا کردید، اطلاعات مربوط به خود را
                وارد نمایید:
              </Typography>
              <TextField
                fullWidth
                margin="normal"
                label="نام"
                variant="outlined"
              />
              <TextField
                fullWidth
                margin="normal"
                label="نام خانوادگی"
                variant="outlined"
              />
              <TextField
                fullWidth
                margin="normal"
                label="شماره تماس"
                variant="outlined"
              />
              <TextField
                fullWidth
                margin="normal"
                label="شماره کارت هدیه"
                variant="outlined"
              />
              <Button
                fullWidth
                variant="contained"
                sx={{ mt: 2, backgroundColor: "#065F5B" }}
              >
                ثبت نام
              </Button>
            </Card>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default EventRegistration;
