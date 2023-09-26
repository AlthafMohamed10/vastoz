import React, { useEffect, useRef } from 'react'
import Link from 'next/link';
import { redirect } from 'next/dist/server/api-utils';
import { useRouter } from 'next/router';
import NavBar from '../../layout/NavBar/navbar';
// import {SideBySideMagnifier} from 'react-image-magnifiers'

const ViewProducts = () => {
    const ref = useRef(null);
    const router = useRouter()

    useEffect(() => {
        const element = ref.current;
        console.log(element);
    }, []);

    const click = () => {
        const element = ref.current;
        console.log(element);
        //     var main_prod_image = document.getElementById('main_product_image');
        //     // main_prod_image.src = element.src;
        // setName(main_prod_image);
    }

    // const addtocart = () => {
    //     console.log("AddtoCart");

    //     redirect('/NonCms/Cameras');

    //     // <Link href="/NonCms/Cameras" className="btn btn-primary">Cameras</Link>
    // }

    return (
        <div>
            <NavBar />
            <div className="container mt-5 mb-5">
                <div className="card">
                    <div className="row g-0">
                        <div className="col-md-6 border-end">
                            <div className="d-flex flex-column justify-content-center">
                                <div className="main_image">
                                    <img src="/assets/img/pages/cameras/camera-nikon-z-mount.jpg" id="main_product_image" width={350} />
                                    {/* <SideBySideMagnifier
                            imageSrc="/assets/img/pages/cameras/camera-nikon-z-mount.jpg"
                            imageAlt="Example"
                            largeImageSrc="/assets/img/pages/cameras/camera-nikon-1200.jpg" // Optional
                        /> */}
                                </div>
                                <div className="thumbnail_images">
                                    <ul id="thumbnail">
                                        <li><img ref={ref} onClick={click} src="/assets/img/pages/cameras/camera-nikon-z24.jpg" width={70} /></li>
                                        <li><img onClick={click} src="/assets/img/pages/cameras/camera-nikon-z-mount.jpg" width={70} /></li>
                                        <li><img onClick={click} src="/assets/img/pages/cameras/camera-nikon-z_8_nikorz_24-120mm_3.jpg" width={70} /></li>
                                        <li><img onClick={click} src="/assets/img/pages/cameras/camera-nikon-z_8_nikorz_24-120mm_8.jpg" width={70} /></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="p-3 right-side">
                                <div className="d-flex justify-content-between align-items-center">
                                    <h3>Nikon Z Mount</h3>
                                    <span className="heart"><i className="bi bi-heart" /></span>
                                </div>
                                <div className="mt-2 pr-3 content">
                                    <p className="fs-6 ">A legacy inspired by agility and performance. Relish in the autofocus (AF) performance, 9 types of subjects at a time. With the dedicated new airplane mode added to the AF detection menu, the Z 8’s powerful combination of subject detection and 3D-tracking allows you to easily capture fast, erratically moving subjects; while the wide-area AF offers 20 custom options to provide flexibility for any shooting situation. Experience excellent video features with multiple video formats of your choice to tell your visual narratives. Record to your heart’s content with up to 125 minutes of continuous recording in 4K UHD/60p, together with a variety of accessories to elevate your videography creations.</p>
                                </div>
                                <h3>$1999.99</h3>
                                <div className="ratings d-flex flex-row align-items-center mt-2" >
                                    <div className="d-flex flex-row">	<i className="bi bi-star-fill" />	<i className="bi bi-star-fill" />	<i className="bi bi-star-fill" />	<i className="bi bi-star-fill" />	<i className="bi bi-star" />	</div>
                                    <span>441 reviews</span>
                                </div>
                                <br></br>
                                <h2> Specifications</h2>
                                <div className="data item content" aria-labelledby="tab-label-specification" id="specification" data-role="content" role="tabpanel" aria-hidden="false" style={{}}>
                                    <div className="additional-attributes-wrapper table-wrapper">
                                        <table className="data table additional-attributes" id="product-structured-attribute-specs-table">
                                            <caption className="table-caption">Specifications</caption>
                                            <tbody>
                                                <tr>
                                                    <th className="col label group-label" colSpan={2} scope="row"><strong>Type</strong></th>
                                                </tr>
                                                <tr>
                                                    <th className="col label" scope="row">SKU</th>
                                                    <td className="col data" data-th="SKU">VOK060WN</td>
                                                </tr>
                                                <tr>
                                                    <th className="col label" scope="row">Type</th>
                                                    <td className="col data" data-th="Type">Digital camera with support for interchangeable lenses</td>
                                                </tr>
                                                <tr>
                                                    <th className="col label" scope="row">Lens Mount</th>
                                                    <td className="col data" data-th="Lens Mount">Nikon Z mount</td>
                                                </tr>
                                                <tr>
                                                    <th className="col label" scope="row">Picture Angle</th>
                                                    <td className="col data" data-th="Picture Angle">n/a</td>
                                                </tr>
                                                <tr>
                                                    <th className="col label group-label" colSpan={2} scope="row"><strong>Image Sensor</strong></th>
                                                </tr>
                                                <tr>
                                                    <th className="col label" scope="row">Sensor Size</th>
                                                    <td className="col data" data-th="Sensor Size">35.9 mm x 23.9 mm</td>
                                                </tr>
                                                <tr>
                                                    <th className="col label" scope="row">Image Sensor Type</th>
                                                    <td className="col data" data-th="Image Sensor Type">CMOS</td>
                                                </tr>
                                                <tr>
                                                    <th className="col label" scope="row">Total Pixels</th>
                                                    <td className="col data" data-th="Total Pixels">25.28 million</td>
                                                </tr>
                                                <tr>
                                                    <th className="col label" scope="row">Dust-Reduction System</th>
                                                    <td className="col data" data-th="Dust-Reduction System">Image Dust Off reference data (requires Capture NX-D); image sensor cleaning</td>
                                                </tr>
                                                <tr>
                                                    <th className="col label" scope="row">Nikon Creative Lighting System (CLS)</th>
                                                    <td className="col data" data-th="Nikon Creative Lighting System (CLS)">i-TTL flash control, radio-controlled Advanced Wireless Lighting, optical Advanced Wireless Lighting, modeling illumination, FV lock, Color Information Communication, Auto FP High-Speed Sync, unified flash control</td>
                                                </tr>
                                                <tr>
                                                    <th className="col label" scope="row">Flash Sync Terminal</th>
                                                    <td className="col data" data-th="Flash Sync Terminal">n/a</td>
                                                </tr>
                                                <tr>
                                                    <th className="col label group-label" colSpan={2} scope="row"><strong>White Balance</strong></th>
                                                </tr>
                                                <tr>
                                                    <th className="col label" scope="row">White Balance Bracketing</th>
                                                    <td className="col data" data-th="White Balance Bracketing">Yes</td>
                                                </tr>
                                                <tr>
                                                    <th className="col label" scope="row">Live View Scene Auto Selector</th>
                                                    <td className="col data" data-th="Live View Scene Auto Selector">n/a</td>
                                                </tr>
                                                <tr>
                                                    <th className="col label" scope="row">Live View Shooting</th>
                                                    <td className="col data" data-th="Live View Shooting">Photography Live View Mode
                                                        Movie Live View Mode
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th className="col label group-label" colSpan={2} scope="row"><strong>Movie</strong></th>
                                                </tr>
                                                <tr>
                                                    <th className="col label" scope="row">Time Code</th>
                                                    <td className="col data" data-th="Time Code">Yes
                                                        Drop frame
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th className="col label" scope="row">Movie Active D-Lighting</th>
                                                    <td className="col data" data-th="Movie Active D-Lighting">Can be selected from: Auto, Extra High, High,
                                                        Normal, Low, or Off
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th className="col label" scope="row">Movie Audio</th>
                                                    <td className="col data" data-th="Movie Audio">Built-in stereo or external microphone with attenuator option; sensitivity can be adjusted</td>
                                                </tr>
                                                <tr>
                                                    <th className="col label" scope="row">Movie Audio Recording Format</th>
                                                    <td className="col data" data-th="Movie Audio Recording Format">Linear PCM
                                                        AAC
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th className="col label" scope="row">Movie Video Compression</th>
                                                    <td className="col data" data-th="Movie Video Compression">H.264/MPEG-4 Advanced Video Coding</td>
                                                </tr>
                                                <tr>
                                                    <th className="col label" scope="row">Movie File Format</th>
                                                    <td className="col data" data-th="Movie File Format">MOV
                                                        MP4
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th className="col label" scope="row">Movie Maximum Recording Time</th>
                                                    <td className="col data" data-th="Movie Maximum Recording Time">29 minutes 59 seconds</td>
                                                </tr>
                                                <tr>
                                                    <th className="col label" scope="row">Movie Frame size (pixels) and frame rate</th>
                                                    <td className="col data" data-th="Movie Frame size (pixels) and frame rate">n/a</td>
                                                </tr>
                                                <tr>
                                                    <th className="col label" scope="row">AF for Movie</th>
                                                    <td className="col data" data-th="AF for Movie">AF Speed and AF Tracking Sensitivity can be adjusted</td>
                                                </tr>
                                                <tr>
                                                    <th className="col label group-label" colSpan={2} scope="row"><strong>Monitor</strong></th>
                                                </tr>
                                                <tr>
                                                    <th className="col label" scope="row">Monitor Size</th>
                                                    <td className="col data" data-th="Monitor Size">8-cm (3.2-in.) diagonal</td>
                                                </tr>
                                                <tr>
                                                    <th className="col label" scope="row">Monitor Resolution</th>
                                                    <td className="col data" data-th="Monitor Resolution">approx. 2100k-dot</td>
                                                </tr>
                                                <tr>
                                                    <th className="col label" scope="row">Monitor Type</th>
                                                    <td className="col data" data-th="Monitor Type">Tilting TFT
                                                        Touch-Sensitive LCD
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th className="col label" scope="row">Monitor Angle of View</th>
                                                    <td className="col data" data-th="Monitor Angle of View">170Â° viewing angle</td>
                                                </tr>
                                                <tr>
                                                    <th className="col label" scope="row">Monitor Adjustments</th>
                                                    <td className="col data" data-th="Monitor Adjustments">Color balance
                                                        11-level manual brightness controls
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th className="col label group-label" colSpan={2} scope="row"><strong>Playback</strong></th>
                                                </tr>
                                                <tr>
                                                    <th className="col label" scope="row">Voice Memo Function</th>
                                                    <td className="col data" data-th="Voice Memo Function">n/a</td>
                                                </tr>
                                                <tr>
                                                    <th className="col label" scope="row">GPS</th>
                                                    <td className="col data" data-th="GPS">Via the SnapBridge app</td>
                                                </tr>
                                                <tr>
                                                    <th className="col label" scope="row">Total Custom Settings</th>
                                                    <td className="col data" data-th="Total Custom Settings">54</td>
                                                </tr>
                                                <tr>
                                                    <th className="col label group-label" colSpan={2} scope="row"><strong>Menus</strong></th>
                                                </tr>
                                                <tr>
                                                    <th className="col label" scope="row">Supported Languages</th>
                                                    <td className="col data" data-th="Supported Languages">English
                                                        French
                                                        Portuguese (Brazil)
                                                        Spanish
                                                        The languages available vary with the country or region in which the camera was originally purchased.
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th className="col label" scope="row">Date, Time and Daylight Savings Time Settings</th>
                                                    <td className="col data" data-th="Date, Time and Daylight Savings Time Settings">Yes</td>
                                                </tr>
                                                <tr>
                                                    <th className="col label" scope="row">World Time Setting</th>
                                                    <td className="col data" data-th="World Time Setting">Yes</td>
                                                </tr>
                                                <tr>
                                                    <th className="col label group-label" colSpan={2} scope="row"><strong>Power</strong></th>
                                                </tr>
                                                <tr>
                                                    <th className="col label" scope="row">Battery Charger</th>
                                                    <td className="col data" data-th="Battery Charger">MH-25A Battery Charger</td>
                                                </tr>
                                                <tr>
                                                    <th className="col label group-label" colSpan={2} scope="row"><strong>Miscellaneous</strong></th>
                                                </tr>
                                                <tr>
                                                    <th className="col label" scope="row">Weight (g) (body only)*1</th>
                                                    <td className="col data" data-th="Weight (g) (body only)*1">Approx. 615g (21.7 oz.) camera body only</td>
                                                </tr>
                                                <tr>
                                                    <th className="col label" scope="row">Length x height x width (mm)
                                                        (body only)*
                                                    </th>
                                                    <td className="col data" data-th="Length x height x width (mm)
                                        (body only)*">134mm x 100.5mm x 69.5mm (5.3 in. x 4.0 in. x 2.8 in. )</td>
                                                </tr>
                                                <tr>
                                                    <th className="col label" scope="row">Tripod Socket</th>
                                                    <td className="col data" data-th="Tripod Socket">0.635 cm (1/4 in., ISO 1222)</td>
                                                </tr>
                                                <tr>
                                                    <th className="col label" scope="row">Animal Eye AF</th>
                                                    <td className="col data" data-th="Animal Eye AF">0</td>
                                                </tr>
                                                <tr>
                                                    <th className="col label" scope="row">4K UHD</th>
                                                    <td className="col data" data-th="4K UHD">Yes</td>
                                                </tr>
                                                <tr>
                                                    <th className="col label" scope="row">WiFi</th>
                                                    <td className="col data" data-th="WiFi">Yes</td>
                                                </tr>
                                                <tr>
                                                    <th className="col label" scope="row">Bluetooth</th>
                                                    <td className="col data" data-th="Bluetooth">Yes</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div className="mt-5">
                                    <span className="fw-bold">Color</span>
                                    <div className="colors">
                                        <ul id="marker">
                                            <li id="marker-1" />
                                            <li id="marker-2" />
                                            <li id="marker-3" />
                                            <li id="marker-4" />
                                            <li id="marker-5" />
                                        </ul>
                                    </div>
                                </div>
                                <div className="buttons d-flex flex-row mt-5 gap-3">
                                    <button className="btn btn-outline-dark">Buy Now</button>
                                    <button
                                        className="btn btn-primary"
                                        onClick={() => router.push('/NonCms/Cart')}
                                    >Add to Cart</button>	</div>
                                <div className="search-option">
                                    <i className="bx bx-search-alt-2 first-search" />
                                    <div className="inputs">	<input type="text" />	</div>
                                    <i className="bx bx-share-alt share" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewProducts
