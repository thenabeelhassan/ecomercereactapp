import React from 'react';
import macbookPro from './macbookPro.png'
import hpElitebook from './hp_elitebook.png'
import samsungNotebook from './samsung_notebook9.png'
import googlePixelbook from './googlePixelbook.png'
import './App.css';

function App() {
  return (
    <div className="App">
      <section id="header">
        <h1>
          Ecommerce App
        </h1>
      </section>
      <section id="body">
        <span id="heading">
          P r o d u c t s
        </span>
        <span id="bucket">
        <i className="fa fa-shopping-cart"></i>
        </span>
        <div id="shop00">
          <table>
            <tr>
              <td rowSpan="9" className="itemImg">
                <img src={macbookPro} alt="Macbook Pro 16-inch" />
              </td>
              <td className="itemInfo">
                <b>
                  Macbook Pro
                </b>
                <i className="fa fa-cart-plus" id="addcart"></i>
              </td>
              <td rowSpan="9" className="itemImg">
                <img src={hpElitebook} alt="HP EliteBook 840 G2" width="25%" />
              </td>
              <td className="itemInfo">
                <b>
                  HP EliteBook 840 G6
                </b>
                <i className="fa fa-cart-plus" id="addcart"></i>
              </td>
            </tr>
            <tr>
              <td>
                2.3GHz 8-core 9th-generation Intel Core i9 processor
              </td>
              <td>
                8th Generation Intel® Core™ i7 processor
              </td>
            </tr>
            <tr>
              <td>
                1TB SSD storage
              </td>
              <td>
                256 GB SATA-3 Solid State Drive
              </td>
            </tr>
            <tr>
              <td>
                16GB 2666MHz DDR4 memory
              </td>
              <td>
                16 GB Total System Memory (8 GB x 2)
              </td>
            </tr>
            <tr>
              <td>
                16-inch Retina display with True Tone
              </td>
              <td>
                14.0" diagonal LED-backlit FHD UWA slim with camera
              </td>
            </tr>
            <tr>
              <td>
                AMD Radeon Pro 5500M with 4GB of GDDR6 memory
              </td>
              <td>
                Intel® UHD Graphics 620
              </td>
            </tr>
            <tr>
              <td>
                Touch Bar and Touch ID
              </td>
              <td>
                HP Fingerprint Reader
              </td>
            </tr>
            <tr>
              <td>
                <a href="https://www.apple.com/macbook-pro-16/">
                  For more Details
                </a>
              </td>
              <td>
                <a href="https://support.hp.com/hk-en/document/c04552057">
                  For more Details
                </a>
              </td>
            </tr>
            <tr>
              <td>
                PRICE: <b> $2,799.00</b>
              </td>
              <td>
                PRICE: <b> $2,219.00</b>
              </td>
            </tr>
            <tr>
              <td>

              </td>
            </tr>
            <tr>
              <td rowSpan="9" className="itemImg">
                <img src={samsungNotebook} alt="Samsung Note book 9" />
              </td>
              <td className="itemInfo">
                <b>
                  Samsung Note book 9
                </b>
                <i className="fa fa-cart-plus" id="addcart"></i>
              </td>
              <td rowSpan="9" className="itemImg">
                <img src={googlePixelbook} alt="Google Pixelbook" />
              </td>
              <td className="itemInfo">
                <b>
                  Google Pixelbook
                </b>
                <i className="fa fa-cart-plus" id="addcart"></i>
              </td>
            </tr>
            <tr>
              <td>
                8th Gen Intel® Core™ i7 Mobile Processor
              </td>
              <td>
                7th Gen Intel® Core™ processor
              </td>
            </tr>
            <tr>
              <td>
                1TB SSD storage
              </td>
              <td>
                512GB NVMe
              </td>
            </tr>
            <tr>
              <td>
                16 GB LPDDR3 Memory
              </td>
              <td>
                16GB RAM
              </td>
            </tr>
            <tr>
              <td>
                15.0" FHD LED Display (Touch Screen Panel)
              </td>
              <td>
                12.3" 2400x1600 (235 ppi) Quad HD LCD
              </td>
            </tr>
            <tr>
              <td>
                NVIDIA® GeForce® MX150 Graphics with GDDR5 2 GB Graphic Memory
              </td>
              <td>
                Fast charging: up to 2 Hrs in 15 min
              </td>
            </tr>
            <tr>
              <td>
                S Pen
              </td>
              <td>
                Google Pixelbook Pen
              </td>
            </tr>
            <tr>
              <td>
                <a href="https://www.samsung.com/us/computing/windows-laptops/notebook-series-9/notebook-9-pen-15----nvidia---np950sbe-x01us/">
                  For more Details
                </a>
              </td>
              <td>
                <a href="https://store.google.com/us/product/google_pixelbook_specs?hl=en-US">
                  For more Details
                </a>
              </td>
            </tr>
            <tr>
              <td>
                PRICE: <b> $1,799.99 </b>
              </td>
              <td>
                PRICE: <b> $1,649 </b>
              </td>
            </tr>
          </table>
        </div>
        <div id="shop01">
        </div>
      </section>
      <section id="footer">
        <span>
          Contact US
        </span>
      </section>
    </div>
  );
}

export default App;
