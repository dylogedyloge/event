import React from "react";
import { Container, Typography, Box } from "@mui/material";
import EventTimer from "./EventTimer";
import EventForm from "./EventForm";
const EventRegistration = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#006363",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        p: 0,
        m: 0, // Explicitly set margin to 0
        width: "100%", // Ensure full width
        direction: "rtl",
        overflow: "hidden", // Prevent any overflow issues
        pb:2
      }}
    >
      <Container
        maxWidth={false} // Use false instead of "lg" to remove width constraints
        disableGutters
        sx={{
          p: 0,
          m: 0,
          width: "100%",
          maxWidth: "100%", // Override any max-width
          pr: 2, // Apply negative margin to counteract any remaining padding
        }}
      >
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
              variant="h3"
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
              overflow: "hidden",
            }}
          >
            {/* Registration Form */}
            <Box
              sx={{
                flex: 1,
                paddingLeft: 0, // In RTL, padding-left controls the right visual side
                marginLeft: 0,
              }}
            >
              <EventForm />
            </Box>

            {/* Image - Use negative margin considering RTL */}
            <Box
              sx={{
                flex: 1,
                display: { xs: "none", md: "flex" },
                justifyContent: "center",
                mr: -10, // In RTL, margin-right pulls the image closer from the left visual side
              }}
            >
              <img
                src="/atripa-robot.png"
                alt="Event Registration"
                style={{
                  maxWidth: "100%",
                  display: "block",
                }}
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
