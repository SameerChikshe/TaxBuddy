import HeroSec from "./components/Pages/HeroSec/HeroSec";
import "./styles.scss";
import GoogleFontLoader from "react-google-font-loader";
import logos from "./medias/brand-logos.svg";
import image1 from "./medias/1.svg";
import image2 from "./medias/2.svg";
import image3 from "./medias/3.svg";
import StatsSec from "./components/Pages/StatsSec/StatsSec";
import Money_Saved from "./components/UI_elements/Money_Saved/Money_Saved";
import { motion } from "framer-motion";
import TaxbuddyServices from "./components/Pages/TaxbuddyServices/TaxbuddyServices";
import { Testimonial } from "./src_sameer/Testimonial";
import { CallToAction } from "./src_sameer/CallToAction";
import Footer from "./src_sameer/Footer";

export default function App() {
  const BrandLogos = () => (
    <div className="brand_logo">
      <img src={logos}></img>
      <div className="matrix_left"></div>
      <div className="matrix_right"></div>
    </div>
  );

  return (
    <div className="main">
      <GoogleFontLoader
        fonts={[
          {
            font: "Signika",
            weights: [300, 400, 500, 600],
          },
          {
            font: "DM Sans",
            weights: [100, 200, 300, 400, 500, 600, 700],
          },
        ]}
        subsets={["cyrillic-ext", "greek"]}
      />
      <HeroSec />
      <BrandLogos />
      <motion.div
      initial={{ opacity: 0}}
      whileInView={{ opacity: 1}}
      transition={{ type: "normal", duration: 2 }}
      viewport={{ once: true }}
      className="stats_save_container">
        <StatsSec />
        <Money_Saved />
        <div className="images_main_container">
          <div className="images_container">
            <motion.img
              initial={{ opacity: 0, y: 300 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ type: "normal", duration: 1 }}
              viewport={{ once: true }}
              className="image1"
              src={image1}
            />
            <motion.img
              initial={{ opacity: 0, y: 300 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ type: "normal", duration: 1 }}
              viewport={{ once: true }}
              className="image3"
              src={image3}
            />
            <motion.img
              initial={{ opacity: 0, y: 300 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ type: "normal", duration: 1}}
              viewport={{ once: true }}
              className="image2"
              src={image2}
            />
          </div>
        </div>
      </motion.div>
      <TaxbuddyServices/>
      <Testimonial/>
      <CallToAction />
      <Footer />
    </div>
  );
}
