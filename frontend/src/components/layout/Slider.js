import React, { useState } from "react";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import "./Slider.css";

const Sliderr = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const banners = [
    "https://cdn.cellphones.com.vn/media/ltsoft/promotion/loa-691-301-max.png",
    "https://cdn.cellphones.com.vn/media/ltsoft/promotion/1380-600-max.png",
    "https://cdn.cellphones.com.vn/media/ltsoft/promotion/ip11-tg-690-300-max.png",
    "https://cdn.cellphones.com.vn/media/ltsoft/promotion/dd690x300_XR.png",
    "https://cdn.cellphones.com.vn/media/ltsoft/promotion/se-aw-690-300-max.png",
  ];

  const thumbnails = [
    "TRỢ GIÁ MÙA DỊCH <br />Ưu đãi vô địch",
    "NOTE 20 ULTRA 5G<br />Hotsale giảm sập sàn",
    "XR CHÍNH HÃNG<br />Giá mới cực tốt",
    "APPLE WATCH SE<br />Mua đi chờ chi",
    "ĐẠI TIỆC ÂM THANH<br />Loa sale bung nóc",
  ];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % banners.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + banners.length) % banners.length);
  };

  return (
    <section id="carousel">
      <div className="carousel">
        {/* Main slider */}
        <div className="carousel-left">
          <div className="carousel-images">
            <div
              className="carousel-track"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {banners.map((src, index) => (
                <div className="carousel-image" key={index}>
                  <img src={src} alt={`Banner ${index + 1}`} />
                </div>
              ))}
            </div>
          </div>
          {/* Navigation arrows */}
          <div className="arrows">
            <button onClick={handlePrev}>
              <LeftOutlined />
            </button>
            <button onClick={handleNext}>
              <RightOutlined />
            </button>
          </div>
          {/* Thumbnail slider */}
          <div className="carousel-thumbnails">
            {thumbnails.map((text, index) => (
              <div
                key={index}
                className={`thumbnail ${
                  index === currentIndex ? "active" : ""
                }`}
                onClick={() => setCurrentIndex(index)}
              >
                <div dangerouslySetInnerHTML={{ __html: text }} />
              </div>
            ))}
          </div>
        </div>
        {/* Right-side banners */}
        <div className="carousel-right">
          <div>
            <img
              src="https://cdn.cellphones.com.vn/media/ltsoft/promotion/RB_S21.png"
              alt="Right 1"
            />
          </div>
          <div>
            <img
              src="https://cdn.cellphones.com.vn/media/ltsoft/promotion/iPhone_12_690x300_copyssspng.png"
              alt="Right 2"
            />
          </div>
          <div>
            <img
              src="https://cdn.cellphones.com.vn/media/ltsoft/promotion/11lite-690-300-max.png"
              alt="Right 3"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sliderr;
