import React from "react";
import { Container, Typography, Box } from "@mui/material";
import EventTimer from "./EventTimer";
import EventForm from "./EventForm"; // Assuming EventForm is also responsive

const EventRegistration = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#006363",
        minHeight: "100vh", // Ensure it takes at least the full viewport height
        width: "100%",    // Ensure it takes the full width
        display: "flex",
        // Center vertically only if content is shorter than viewport height
        // On small screens content might exceed viewport, align-items: flex-start might be better
        // alignItems: 'center', // Let's try starting from top on small screens
        alignItems: { xs: 'flex-start', md: 'center' }, // Start from top on XS, center on MD+
        justifyContent: 'center', // Center horizontally
        p: 0,
        m: 0,
        direction: "rtl",
        // overflowX: "hidden", // Hide horizontal overflow specifically
        // Use 'auto' for vertical scroll if content exceeds viewport height
        overflowY: 'auto',
        // Add some padding at the bottom, make it responsive
        pb: { xs: 3, md: 4 },
      }}
    >
      {/* Use Container for responsive padding inside the green box */}
      <Container
        maxWidth="lg" // Use a standard maxWidth like 'lg' or 'xl' for better control, or keep false if really needed edge-to-edge
        disableGutters // Keep gutters disabled if using custom padding
        sx={{
          // Apply responsive horizontal padding directly to the container
          px: { xs: 2, sm: 3, md: 4 },
          // Remove margin/padding inherited if any
          m: 0,
          width: "100%", // Ensure container takes full width within its maxWidth constraint
          // pt: { xs: 3, md: 0 }, // Add padding top on small screens if alignItems is 'flex-start'
          // No need for pr: 2, handle padding with px
        }}
      >
        {/* Main content flex container */}
        <Box
          sx={{
            display: "flex",
            // Stack vertically on xs/sm, row on md and up
            flexDirection: { xs: "column", md: "row" },
            // Center items vertically when in a row, default (stretch) in column
            alignItems: { xs: 'stretch', md: 'center' },
            // Responsive gap between the two main columns/sections
            gap: { xs: 4, md: 5, lg: 6 },
            width: '100%', // Ensure this box takes full width of container
            mt: { xs: 4, md: 0 } // Add margin top on small screens since we align items to top
          }}
        >
          {/* === Event Details Section === */}
          <Box sx={{
              // Take full width when stacked (xs), half width when row (md)
              width: { xs: "100%", md: "50%" },
              // Add order to potentially place it below form on xs if needed (optional)
              // order: { xs: 2, md: 1 }
              textAlign: { xs: 'center', md: 'right' } // Center text on small screens, right-align on larger
             }}
          >
            <Typography
              // Responsive variant for the main heading
              variant={ { xs: 'h4', sm: 'h3' } }
              fontWeight="bold"
              color="white"
              gutterBottom
            >
              یک بازی هیجان‌انگیز در سطح شهر!
            </Typography>
            <Typography variant="body1" color="white" sx={{ mb: { xs: 3, md: 0 } }}> {/* Add bottom margin on xs */}
              ما در آتریپا یک ماجراجویی واقعی برای شما تدارک دیدیم! تعداد زیادی
              کارت هدیه در نقاط مختلف شهر مخفی شده‌اند و شما می‌توانید با پیدا
              کردنشان، از آتریپا خرید کنید.
            </Typography>

            {/* Timer Section - Center content */}
            <Box sx={{ mt: { xs: 3, md: 4 } }}> {/* Responsive margin top */}
                 <Typography
                    // Responsive variant for sub-headings
                    variant={ { xs: 'h6', md: 'h5' } }
                    fontWeight="bold"
                    color="#FFD400"
                    gutterBottom
                    // Center the text itself
                    // sx={{ textAlign: 'center' }} // Centering parent box is enough
                 >
                    فرصت باقیمانده:
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center", // Keep timer centered
                    mt: 1 // Add a little space below the label
                  }}
                >
                  <EventTimer />
                </Box>
            </Box>
          </Box>

          {/* === Registration Form & Image Section === */}
          <Box
            sx={{
              // Take full width when stacked (xs), half width when row (md)
              width: { xs: "100%", md: "50%" },
              display: "flex",
              // Stack form and image vertically on xs, keep side-by-side on md+
              flexDirection: { xs: "column", md: "row" },
              alignItems: "center", // Center items vertically in the row layout (md+)
              // order: { xs: 1, md: 2 } // Potentially place form above details on xs
              // overflow: "hidden", // Maybe not needed here if image is handled well
              gap: { xs: 2, md: 0 } // Add small gap when stacked vertically
            }}
          >
            {/* Registration Form Container */}
            <Box
              sx={{
                width: { xs: '100%', md: 'auto'}, // Full width on xs, auto (flex determines) on md
                flex: { md: 1 }, // Allow form to take space on md+
                // Reset padding/margin possibly set in EventForm for RTL if needed
                pl: { md: 0 },
                ml: { md: 0 }
              }}
            >
              {/* Ensure EventForm itself is responsive */}
              <EventForm />
            </Box>

            {/* Image Container */}
            <Box
              sx={{
                width: { xs: '80%', sm: '60%', md: 'auto' }, // Control width on small screens, auto on md
                maxWidth: { xs: '300px', md: 'none'}, // Max width on small screens
                flex: { md: 1 }, // Allow image container to take space on md+
                display: "flex",
                justifyContent: "center", // Center image horizontally always
                // Responsive negative margin ONLY on md+ screens
                // Adjust value as needed, -10 might be too much
                mr: { xs: 0, md: -8, lg: -10 }, // No negative margin on xs/sm
                mt: { xs: 3, md: 0} // Add margin top on small screens to separate from form
              }}
            >
              <img
                src="/atripa-robot.png"
                alt="Event Registration"
                style={{
                  maxWidth: "100%", // Image scales within its container
                  height: "auto", // Maintain aspect ratio
                  display: "block",
                }}
              />
            </Box>
          </Box>
        </Box>

        {/* === Additional Info Sections === */}
        {/* Make sure this content is appropriately spaced */}
        <Box sx={{ mt: { xs: 4, md: 6 }, textAlign: { xs: 'center', md: 'right' } }}>
            <Typography
                variant={ { xs: 'h6', md: 'h5' } }
                color="white"
                fontWeight="bold"
                sx={{ mb: 1 }}
            >
                چطور شرکت کنید؟
            </Typography>
            {/* Use list items or adjust spacing for clarity */}
            <Typography variant="body1" color="white" sx={{ mb: 0.5 }}>
                - در سطح شهر به دنبال کارت های پول آتریپا بگردید
            </Typography>
            <Typography variant="body1" color="white" sx={{ mb: 0.5 }}>
                - کارت را پیدا کنید و کد مخصوصش را در سایت یا اپلیکیشن آتریپا ثبت
                کنید.
            </Typography>
            <Typography variant="body1" color="white">
                - معادل مبلغ کارت،اعتبار هدیه دریافت کنید و از سفر، اقامت یا هر خریدی
                که وست دارید،لذت ببرید!
            </Typography>

            <Typography
                variant={ { xs: 'h6', md: 'h5' } }
                fontWeight="bold"
                color="white"
                sx={{ mt: { xs: 3, md: 4 } , mb: 1 }}
            >
                قوانین ورود به رویداد :
            </Typography>
            <Typography variant="body1" color="white" sx={{ mb: 0.5 }}>
                - کارت ها در مکان های عمومی و قابل دسترسی پنهان شده اند.
            </Typography>
            <Typography variant="body1" color="white" sx={{ mb: 0.5 }}>
                - هر کارت فقط یکبار قابل استفاده است،پس عجله کنید!
            </Typography>
            <Typography variant="body1" color="white">
                - سرنخ ها و راهنمایی ها در اینستاگرام آتریپا منتشر می شوند،پس پیج ما
                را دنبال کنید!
            </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default EventRegistration;