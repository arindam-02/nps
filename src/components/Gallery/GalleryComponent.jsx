import React from "react";
import LightGallery from "lightgallery/react";
import "./style.css";

// LightGallery styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-autoplay.css";

// Plugins
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import lgAutoplay from "lightgallery/plugins/autoplay";

const images = [
  { id: 1, src: "/assets/images/_gallery_images/1.jpeg", alt: "Image 1" },
  { id: 2, src: "/assets/images/_gallery_images/2.jpeg", alt: "Image 2" },
  { id: 3, src: "/assets/images/_gallery_images/3.jpeg", alt: "Image 3" },
  { id: 4, src: "/assets/images/_gallery_images/4.jpeg", alt: "Image 4" },
  { id: 5, src: "/assets/images/_gallery_images/5.jpeg", alt: "Image 5" },
  { id: 6, src: "/assets/images/_gallery_images/6.jpeg", alt: "Image 6" },
  { id: 7, src: "/assets/images/_gallery_images/7.jpeg", alt: "Image 7" },
  { id: 8, src: "/assets/images/_gallery_images/8.jpeg", alt: "Image 8" },
  {
    id: 9,
    src: "/assets/images/_gallery_images/9.jpeg",
    alt: "Height Cheking in School",
  },
  { id: 10, src: "/assets/images/_gallery_images/10.jpeg", alt: "Image 10" },
  {
    id: 11,
    src: "/assets/images/_gallery_images/11.jpeg",
    alt: "Puja in School",
  },
  {
    id: 12,
    src: "/assets/images/_gallery_images/12.jpeg",
    alt: "School Reception",
  },
  {
    id: 13,
    src: "/assets/images/_gallery_images/15.jpeg",
    alt: "Saraswati Puja 2026",
  },
];

const GalleryComponent = () => {
  return (
    <div className="gallery-wrapper">
      <LightGallery speed={500} plugins={[lgThumbnail, lgZoom, lgAutoplay]}>
        {images.map((img) => (
          <a key={img.id} href={img.src} className="gallery-item">
            <img src={img.src} alt={img.alt} loading="lazy" />
          </a>
        ))}
      </LightGallery>
    </div>
  );
};

export default GalleryComponent;
