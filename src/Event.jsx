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
            <Typography variant="body1" color="white">
              ما در آتریپا یک ماجراجویی واقعی برای شما تدارک دیدیم! تعداد زیادی
              کارت هدیه در نقاط مختلف شهر مخفی شده‌اند و شما می‌توانید با پیدا
              کردنشان، از آتریپا خرید کنید.
            </Typography>

            <Typography
              variant="h6"
              fontWeight="bold"
              color="#FFD400"
              gutterBottom
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mt: 4,
              }}
            >
              فرصت باقیمانده:
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <EventTimer />
            </Box>
          </Box>

          {/* Registration Form & Image */}
          <Box
            sx={{
              display: "flex",
              flexDirection: { md: "row" },
              alignItems: "center",
              flex: 1,

              width: { xs: "100%", md: "50%" },
            }}
          >
            {/* Registration Form */}
            <Box sx={{ flex: 1 }}>
              <EventForm />
            </Box>

            {/* Image */}
            <Box sx={{ flex: 1, display: "flex", justifyContent: "center" }}>
              <img
                src="/atripa-robot.png"
                alt="Event Registration"
                style={{ maxWidth: "100%" }}
              />
            </Box>
          </Box>
        </Box>
        <Typography
          variant="h6"
          color="white"
          fontWeight="bold"
          sx={{ mb: 1, mt: 3 }}
        >
          چطور شرکت کنید؟
        </Typography>
        <Typography variant="body1" color="white">
          - در سطح شهر به دنبال کارت های پول آتریپا بگردید
        </Typography>
        <Typography variant="body1" color="white">
          - کارت را پیدا کنید و کد مخصوصش را در سایت یا اپلیکیشن آتریپا ثبت
          کنید.
        </Typography>
        <Typography variant="body1" color="white">
          - معادل مبلغ کارت،اعتبار هدیه دریافت کنید و از سفر، اقامت یا هر خریدی
          که وست دارید،لذت ببرید!
        </Typography>

        <Typography
          variant="h6"
          fontWeight="bold"
          color="white"
          sx={{ mt: 2, mb: 1 }}
        >
          قوانین ورود به رویداد :
        </Typography>
        <Typography variant="body1" color="white">
          - کارت ها در مکان های عمومی و قابل دسترسی پنهان شده اند.
        </Typography>
        <Typography variant="body1" color="white">
          - هر کارت فقط یکبار قابل استفاده است،پس عجله کنید!
        </Typography>
        <Typography variant="body1" color="white">
          - سرنخ ها و راهنمایی ها در اینستاگرام آتریپا منتشر می شوند،پس پیج ما
          را دنبال کنید!
        </Typography>
      </Container>
    </Box>
  );
};

export default EventRegistration;
