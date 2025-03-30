import React from "react";
import { Container, Typography, Box } from "@mui/material";
import EventTimer from "./EventTimer";
import EventForm from "./EventForm";
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
            <EventForm />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default EventRegistration;
