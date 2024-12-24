import React from 'react';
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Thông tin liên hệ */}
        <div className="footer-item">
          <h3>Thông tin liên hệ</h3>
          <p><strong>Địa chỉ:</strong> Km10 Đ. Nguyễn Trãi, P. Mộ Lao, Hà Đông, Hà Nội </p>
          <p><strong>Email:</strong> HungTran@gmail.com</p>
          <p><strong>Điện thoại:</strong> <a href="tel:+84388725638">+84 123456789</a></p>
        </div>
        
       {/* Kết nối với chúng tôi */}
<div className="footer-item">
  <h3>Kết nối với chúng tôi</h3>
  <div className="social-links">
    <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
        <path d="M22.5 0h-21c-.827 0-1.5.673-1.5 1.5v21c0 .827.673 1.5 1.5 1.5h11.25v-9.75h-3v-3.75h3v-2.75c0-3.172 2.069-4.75 4.755-4.75 1.404 0 2.72.105 3.195.152v3.423h-2.262c-1.77 0-2.262.835-2.262 2.091v2.618h4.5l-.59 3.75h-3.91v9.75h7.5c.827 0 1.5-.673 1.5-1.5v-21c0-.827-.673-1.5-1.5-1.5z"/>
      </svg>
    </a>
    <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
        <path d="M23.643 4.937c-.88.389-1.83.65-2.84.769 1.02-.61 1.81-1.574 2.18-2.72-.952.56-2.004.977-3.12 1.2a5.473 5.473 0 0 0-9.398 4.986c-4.527-.225-8.527-2.395-11.191-5.683-.467.8-.73 1.727-.73 2.712 0 1.873.954 3.52 2.4 4.49-.88-.027-1.71-.269-2.44-.669v.067c0 2.612 1.858 4.791 4.32 5.28-.451.124-.926.192-1.416.192-.346 0-.684-.033-1.014-.094.686 2.13 2.68 3.686 5.04 3.727a10.993 10.993 0 0 1-6.794 2.342c-.44 0-.879-.026-1.314-.079 2.46 1.574 5.384 2.49 8.476 2.49 10.176 0 15.75-8.456 15.75-15.75 0-.24 0-.476-.017-.71.789-.569 1.467-1.272 2.01-2.073z"/>
      </svg>
    </a>
    <a href="https://www.tiktok.com/" target="_blank" rel="noopener noreferrer">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" >
            <path d="M12 2.163c1.149 0 1.262 0 1.703.024 2.143.073 3.579 1.21 3.648 3.403.003.051.013.117.013.186v4.621h3.642v4.628h-3.642v12.21h-4.628v-12.21h-4.621v-4.628h4.621v-4.568c0-3.756 2.126-5.834 5.585-5.834z"/>
          </svg>
    </a>
    <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" >
            <path d="M12 2.163c1.149 0 1.262 0 1.703.024 2.143.073 3.579 1.21 3.648 3.403.003.051.013.117.013.186v4.621h3.642v4.628h-3.642v12.21h-4.628v-12.21h-4.621v-4.628h4.621v-4.568c0-3.756 2.126-5.834 5.585-5.834z"/>
          </svg>
    </a>
  </div>
</div>

        
        {/* Bản đồ */}
        <div className="footer-item">
          <h3>Bản đồ</h3>
          <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3725.1932417157573!2d105.76503987379576!3d20.98488958928672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313453006c33b95b%3A0x4ba251649fa3e52f!2zSOG7jWMgVmnhu4duIEPDtG5nIE5naOG7hyBCxrB1IENow61uaCBWaeG7hW4gVGjDtG5nIC0gUFRJVA!5e0!3m2!1svi!2s!4v1735020788053!5m2!1svi!2s"
          width="445" height="325" style={{ border: 0 }} allowFullScreen="" loading="lazy"
           title="Bản đồ khu vực">
          </iframe>

        </div>
      </div>

      <p style={{ textAlign: 'center', marginTop: '20px' }}>
        &copy;
      </p>
    </footer>
  );
};

export default Footer;
