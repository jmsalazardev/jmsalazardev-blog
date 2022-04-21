const baseUrl = 'https://jmsalazar.dev';
const helpers = require('./helpers');

const manifest = {
  output: "public",
  name: "JMSalazarDev",
  short_name: "JMSalazarDev",
  start_url: "/",
  background_color: "#272b30",
  theme_color: "#12181b",
  display: "standalone",
  orientation: "portrait",
  description: "Un blog de un desarrollador de software",
  icon: "assets/favicon.png",
  icons: [...helpers.appleIcons(), ...helpers.maskableIcons()]
};

module.exports = {
  buildTime: new Date(),
  name: "JMSalazarDev",
  url: baseUrl,
  authorName: "José Miguel Salazar",
  authorUrl: "https://twitter.com/JMSalazarDev",
  description: "Un blog de un desarrollador de software.",
  favicon: `${baseUrl}/favicon.ico`,
  google: {
    gtag: "G-KH7TX6T3E9"
  },
  manifest
};