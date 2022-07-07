const CalculatorData = [
  {
    serviceCategory: "Web Design & Development",
    subServices: [
      {
        service: "Website Design",
        options: [
          {
            //Pages
            name: "Pages",
            multiple: false,
            options: [
              {
                name: "Level 1",
                tag: "Perfect for bite-size experiences",
                info: "1-5 pages",
                desc: "",
                prices: [
                  {
                    price: 75,
                    criteria: "With Content",
                    pricingType: "Per Page",
                  },
                  {
                    price: 100,
                    criteria: "Without Content",
                    pricingType: "Per Page",
                  },
                ],
              },
              {
                name: "Level 2",
                tag: "Perfect for growing businesses",
                info: "6-10 pages",
                desc: "",
                prices: [
                  {
                    price: 60,
                    criteria: "With Content",
                    pricingType: "Per Page",
                  },
                  {
                    price: 85,
                    criteria: "Without Content",
                    pricingType: "Per Page",
                  },
                ],
              },
              {
                name: "Level 3",
                tag: "Great for informative experiences",
                info: "10-20 pages",
                desc: "",
                prices: [
                  {
                    price: 50,
                    criteria: "With Content",
                    pricingType: "Per Page",
                  },
                  {
                    price: 75,
                    criteria: "Without Content",
                    pricingType: "Per Page",
                  },
                ],
              },
              {
                name: "Level 4",
                tag: "",
                info: "20+ pages",
                desc: "",
                prices: [
                  {
                    price: null,
                    criteria: "",
                    pricingType: "Enquiry Only",
                  },
                ],
              },
            ],
          },
          {
            //E-Commerce
            name: "E-Commerce",
            multiple: false,
            options: [
              {
                name: "Level 1",
                tag: "",
                info: "Up to 50",
                desc: "",
                prices: [
                  {
                    price: 250,
                    criteria: "Setup Fee",
                    pricingType: "",
                    extra: {
                      price: 10,
                      criteria: "Product Setup",
                      pricingType: "Per Product",
                    },
                  },
                ],
              },
              {
                name: "Level 2",
                tag: "",
                info: "50-150",
                desc: "",
                prices: [
                  {
                    price: 250,
                    criteria: "Setup Fee",
                    pricingType: "",
                    extra: {
                      price: 9,
                      criteria: "Product Setup",
                      pricingType: "Per Product",
                    },
                  },
                ],
              },
              {
                name: "Level 3",
                tag: "",
                info: "150-500",
                desc: "",
                prices: [
                  {
                    price: 250,
                    criteria: "Setup Fee",
                    pricingType: "",
                    extra: {
                      price: 7.5,
                      criteria: "Product Setup",
                      pricingType: "Per Product",
                    },
                  },
                ],
              },
              {
                name: "Level 4",
                tag: "",
                info: "500+",
                desc: "",
                prices: [
                  {
                    price: null,
                    criteria: "",
                    pricingType: "Enquiry Only",
                  },
                ],
              },
            ],
          },
          {
            //Forms
            name: "Forms",
            multiple: true,
            options: [
              {
                name: "Level 1",
                tag: "",
                info: "",
                desc: "Collect key information such as name, email, contact number, passwords and dropdown options.",
                prices: [
                  {
                    price: 50,
                    criteria: "",
                    pricingType: "",
                  },
                ],
              },
              {
                name: "Level 2",
                tag: "",
                info: "",
                desc: "Collect more advanced information such as file uploads, colours, dates and times.",
                prices: [
                  {
                    price: 125,
                    criteria: "",
                    pricingType: "",
                  },
                ],
              },
              {
                name: "Level 3",
                tag: "",
                info: "",
                desc: "Take bookings online with a customised form, which collects name, number and relevant booking info.",
                prices: [
                  {
                    price: 200,
                    criteria: "",
                    pricingType: "",
                  },
                ],
              },
            ],
          },
        ],
      },
      { service: "Express Website" },
      { service: "Custom Quicklinks Page" },
      { service: "E-Commerce Design" },
      { service: "Landing Page Design" },
      { service: "Social Media Shop" },
    ],
  },
  {
    serviceCategory: "Visual Identity & Brand Design",
    subServices: [
      { service: "Brand Guidelines" },
      { service: "Visual Refocus" },
      { service: "Visual Identity Design" },
      { service: "Logo Design" },
      { service: "Stationary Design" },
      { service: "Creative Design" },
    ],
  },
  {
    serviceCategory: "Social Strategy & Content Design",
    subServices: [
      { service: "Social Media Management" },
      { service: "Content Strategy" },
      { service: "Email Marketing" },
      { service: "Social Media Advertising" },
      { service: "Content Creation" },
      { service: "Google Advertisements" },
    ],
  },
];

export function GetCalcData() {
  return CalculatorData;
}
