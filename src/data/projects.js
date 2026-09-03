const projects = [
  {
    id: "aquaware",
    title: "AquaAware",
    category: "IoT · Machine Learning · Web",
    shortDescription:
      "A context-aware water quality monitoring system combining machine learning prediction with rule-based assessment.",

    image: "/images/projects/aquaware.png",

    technologies: [
      "Python",
      "Random Forest",
      "FastAPI",
      "PostgreSQL",
      "React",
    ],

    featured: true,

    overview:
      "AquaAware is a context-aware water quality monitoring system designed to help determine water suitability by combining machine learning predictions with rule-based assessment.",

    problem:
      "Water quality assessment can be difficult when users need to consider multiple parameters at the same time. A monitoring system needs to provide not only raw measurements, but also an understandable interpretation of whether the water is suitable.",

    solution:
      "AquaAware combines a machine learning model with a context-aware rule engine. The system processes water quality parameters, generates a prediction, and combines the result with predefined rules to provide a contextual assessment.",

    features: [
      "Water quality monitoring",
      "Machine learning prediction",
      "Rule-based assessment",
      "Real-time dashboard",
      "Context-aware recommendation",
    ],

    contribution:
      "The team contributed to system architecture, machine learning integration, backend development, database design, and dashboard implementation.",

    screenshots: [
      "/images/projects/aquaware.png",
      "/images/projects/aquaware-2.png",
      "/images/projects/aquaware-3.png",
    ],

    github: "https://github.com/trinova/aquaware",
    demo: "#",
  },

  {
    id: "smartplant-monitoring",
    title: "SmartPlant Monitoring",
    category: "IoT · Web Development",

    shortDescription:
      "An IoT-based plant monitoring and automatic watering system designed to monitor environmental conditions in real time.",

    image: "/images/projects/smartplant.png",

    technologies: [
      "ESP8266",
      "PHP",
      "MySQL",
      "JavaScript",
      "DHT11",
    ],

    featured: true,

    overview:
      "SmartPlant Monitoring is an IoT-based system that monitors plant conditions and supports automatic watering based on soil moisture levels.",

    problem:
      "Plant owners may have difficulty monitoring soil moisture and environmental conditions consistently, especially when plants require regular watering.",

    solution:
      "The system collects soil moisture, temperature, and humidity data through sensors connected to an ESP8266. The device processes the readings and controls the watering system based on predefined conditions.",

    features: [
      "Soil moisture monitoring",
      "Temperature monitoring",
      "Humidity monitoring",
      "Automatic watering",
      "Manual and automatic modes",
      "Web-based monitoring",
    ],

    contribution:
      "The team worked on IoT hardware integration, embedded programming, backend communication, database storage, and web dashboard development.",

    screenshots: [
      "/images/projects/smartplant.png",
      "/images/projects/smartplant-2.png",
      "/images/projects/smartplant-3.png",
    ],

    github: "https://github.com/trinova/smartplant",
    demo: "#",
  },

  {
    id: "mengobrolmengobati",
    title: "MengobrolMengobati",
    category: "Web Development · UI/UX",

    shortDescription:
      "A digital platform designed to provide accessible mental health support through an intuitive web experience.",

    image: "/images/projects/mengobrolmengobati.png",

    technologies: [
      "Laravel",
      "Vite",
      "Bootstrap",
      "CSS",
      "MySQL",
    ],

    featured: true,

    overview:
      "MengobrolMengobati is a web-based platform designed to make access to mental health support more approachable through a structured digital experience.",

    problem:
      "Users may find it difficult to discover appropriate mental health support and access related services through a clear digital interface.",

    solution:
      "The platform organizes information, user interactions, profiles, and booking workflows into an accessible web application.",

    features: [
      "User registration and authentication",
      "Psychologist information",
      "Profile management",
      "Booking functionality",
      "Administrative management",
      "Responsive interface",
    ],

    contribution:
      "The team contributed to interface design, frontend implementation, backend development, database integration, and system workflow design.",

    screenshots: [
      "/images/projects/mengobrolmengobati.png",
      "/images/projects/mengobrolmengobati-2.png",
      "/images/projects/mengobrolmengobati-3.png",
    ],

    github: "https://github.com/trinova/mengobrolmengobati",
    demo: "#",
  },
  
]

export default projects