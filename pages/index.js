import BidModal from "@/components/elements/BidModal"
import Layout from "@/components/layout/Layout"
import dynamic from 'next/dynamic'
import Link from "next/link"
import Action8 from "@/components/sections/Action8"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Element } from 'react-scroll';
import FlatTitle2 from "@/components/sections/FlatTitle2"
import { Swiper, SwiperSlide } from "swiper/react"
  

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    loop: false,
    slidesPerView: 1,
    observer: true,
    observeParents: true,
    spaceBetween: 12,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false
    },
    breakpoints: {
        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        }
    }
}
const CounterUp = dynamic(() => import('@/components/elements/CounterUp'), {
    ssr: false,
})

import { useState } from "react"
export default function Home() {

    const [isBidModal, setBidModal] = useState(false)
    const handleBidModal = () => setBidModal(!isBidModal)

    const [isActive, setIsActive] = useState({
        status: false,
        key: "",
    })

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }
    return (
        <>

            <Layout headerStyle={1} footerStyle={1} pageCls="about-us-page">

                <div>
                    <div className="page-title about-us relative">
                        <div className="themesflat-container">
                            <div className="row">
                                <div className="col-12 pages-title">
                                    <div className="content">
                                        <h1 data-wow-delay="0s" className="wow fadeInUp">Invierte En El Futuro Inmobiliario</h1>
                                        <h3 data-wow-delay="0.1s" className="wow fadeInUp">Aplicacamos herramientas blockchain</h3>
                                        <h3 data-wow-delay="0.1s" className="wow fadeInUp">para impulsar el rendimiento en el sector inmobiliario.</h3>
                                        <div style={{ margin: '30px' }}></div>

                                        <div data-wow-delay="0.2s" className="wow fadeInUp flat-button flex justify-center">
                                            <Link href="#" className="tf-button style-1 h50 w190">¡Empieza Ahora! <i className="icon-arrow-up-right2" /></Link>
                                        </div>
                                    </div>
                                    <div className="icon-background">
                                        <img className="absolute item1" src="/assets/images/item-background/item11.png" alt="" />
                                        <img className="absolute item2" src="/assets/images/item-background/item10.png" alt="" />
                                        <img className="absolute item3" src="/assets/images/item-background/item12.png" alt="" />
                                        <img className="absolute item4" src="/assets/images/item-background/item13.png" alt="" />
                                    </div>
                                    <div className="relative">
                                        <Swiper {...swiperOptions} className="swiper-container carousel3-type2">
                                            <div className="swiper-wrapper">
                                                <SwiperSlide>
                                                    <div className="tf-card-box style-7">
                                                        <div className="card-media">
                                                            <Link href="">
                                                                <img src="/assets/images/realestate4.jpeg" alt="" />
                                                            </Link>
                                                        </div>
                                                        <div className="card-info">
                                                                <p>El crecimiento de los Fideicomisos de Inversión en Bienes Raíces 
                                                                    (REITs) durante la década de 1990 fue sin precedentes y probablemente 
                                                                    posicionó la clase de activos de manera permanente en el panorama de 
                                                                    inversiones más amplio. Según la 
                                                                    Asociación Nacional de Fideicomisos de Inversión en Bienes Raíces 
                                                                    (NAREIT), en 1990 había 119 REITs con una capitalización de mercado 
                                                                    total de $8.7 mil millones.</p>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className="tf-card-box style-7">
                                                        <div className="card-media">
                                                            <Link href="#">
                                                                <img src="/assets/images/realestate7.jpeg" alt="" />
                                                            </Link>
                                                        </div>
                                                        <div className="card-info">
                                                        <p>El valor de los activos inmobiliarios a nivel global aumentó un 5% en 2020 
                                                            hasta alcanzar los 326,5 billones de dólares (unos 280 billones de euros), 
                                                            lo que convierte al inmobiliario en la fuente de riqueza mundial más relevante, 
                                                            con más valor que todas las acciones y los títulos de deuda combinados.</p>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className="tf-card-box style-7">
                                                        <div className="card-media">
                                                            <Link href="#">
                                                                <img src="/assets/images/realestate.jpeg" alt="" />
                                                            </Link>
                                                        </div>
                                                        <div className="card-info">
                                                        <p style={{ fontSize: '12px' }}>El mercado inmobiliario, históricamente vinculado a la economía, ha 
                                                            experimentado transformaciones significativas. Aunque los activos 
                                                            inmobiliarios globales valen US$ 326,5 billones, el acceso a este mercado 
                                                            ha sido limitado por el alto costo de inversión. Sin embargo, nuevas 
                                                            tecnologías, como la tokenización, han surgido para cambiar esta dinámica. 
                                                            Al fraccionar el valor de la propiedad, la tokenización permite la 
                                                            participación de inversores principiantes con menos capital, democratizando 
                                                            el acceso al sector y creando nuevas oportunidades de inversión.</p>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                            </div>
                                        </Swiper>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tf-section-2 counter">
                        <div className="themesflat-container">
                            <div className="row">
                                <div className="col-12">
                                    <div className="counter__body-1">
                                        <div className="counter-1">
                                            <div className="number-counter">
                                                <span className="number" data-speed={3000} data-to={200} data-inviewport="yes"><CounterUp count={200} time={1} /></span>B+
                                            </div>
                                            <h6 className="title">Velor Antes de la crisis financiera 2008</h6>
                                        </div>
                                        <div className="space">
                                            <svg width={80} height={19} viewBox="0 0 80 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect opacity="0.2" x="0.75" y="9.25" width="29.5" height="0.5" stroke="white" strokeWidth="0.5" strokeDasharray="4 2" />
                                                <circle opacity="0.2" cx={40} cy="9.5" r={9} stroke="white" />
                                                <circle opacity="0.2" cx={40} cy="9.5" r="4.5" fill="white" />
                                                <rect opacity="0.2" x="49.75" y="9.25" width="29.5" height="0.5" stroke="white" strokeWidth="0.5" strokeDasharray="4 2" />
                                            </svg>
                                        </div>
                                        <div className="counter-1">
                                            <div className="number-counter">
                                                <span className="number" data-speed={3000} data-to={300} data-inviewport="yes"><CounterUp count={300} time={1} /></span>B+
                                            </div>
                                            <h6 className="title">Después de 2009 el valor del mercado inmobiliario</h6>
                                        </div>
                                        <div className="space">
                                            <svg width={80} height={19} viewBox="0 0 80 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect opacity="0.2" x="0.75" y="9.25" width="29.5" height="0.5" stroke="white" strokeWidth="0.5" strokeDasharray="4 2" />
                                                <circle opacity="0.2" cx={40} cy="9.5" r={9} stroke="white" />
                                                <circle opacity="0.2" cx={40} cy="9.5" r="4.5" fill="white" />
                                                <rect opacity="0.2" x="49.75" y="9.25" width="29.5" height="0.5" stroke="white" strokeWidth="0.5" strokeDasharray="4 2" />
                                            </svg>
                                        </div>
                                        <div className="counter-1">
                                            <div className="number-counter">
                                                <span className="number" data-speed={200} data-to={2000} data-inviewport="yes"><CounterUp count={2} time={1} /></span>010
                                            </div>
                                            <h6 className="title">Adopción de tecnologías; AI, AR, Blockchain</h6>
                                        </div>
                                        <div className="space">
                                            <svg width={80} height={19} viewBox="0 0 80 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect opacity="0.2" x="0.75" y="9.25" width="29.5" height="0.5" stroke="white" strokeWidth="0.5" strokeDasharray="4 2" />
                                                <circle opacity="0.2" cx={40} cy="9.5" r={9} stroke="white" />
                                                <circle opacity="0.2" cx={40} cy="9.5" r="4.5" fill="white" />
                                                <rect opacity="0.2" x="49.75" y="9.25" width="29.5" height="0.5" stroke="white" strokeWidth="0.5" strokeDasharray="4 2" />
                                            </svg>
                                        </div>
                                        <div className="counter-1">
                                            <div className="number-counter">
                                                <span className="number" data-speed={3000} data-to={87} data-inviewport="yes"><CounterUp count={87} time={1} /></span>%
                                            </div>
                                            <h6 className="title">De todos los tokens de valor provienen del sector inmobiliario</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
{/* aztecaz */}

{/* Experiencia */}
<div style={{ margin: '100px' }}></div>
                <div className="themesflat-container w-full">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="">
                                <h2 data-wow-delay="0s" className="wow fadeInUp">Utilizamos nuestra vasta experiencia, datos exclusivos y 
                                tecnología de punta para generar retornos superiores</h2>
                                <div style={{ margin: '10px' }}></div>
                                <p style={{ fontSize: '18px' }} data-wow-delay="0.1s" className="wow fadeInUp">Vamos más allá de las inversiones convencionales y 
                                reconociendo que, con el tiempo, la inflación puede afectar el valor de propiedad.</p>
                                <div style={{ margin: '10px' }}></div>
                                <div data-wow-delay="0.2s">
                                    <button>$5T Oportunidad en viviendas unifamiliares</button>
                                    <div style={{ margin: '10px' }}></div>
                                    <button>14 millones de hogares unifamiliares en alquiler</button>
                                    <div style={{ margin: '10px' }}></div>
                                    <button>10 millones de propietarios de viviendas unifamiliares</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            <div style={{ margin: '100px' }}></div>
{/* end Experiencia */}
                    <Element name="aztecaz">
                    <div className="tf-section-2 widget-box-icon">
                        <div className="themesflat-container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="heading-section-1">
                                        <h2 className="tf-title pb-40">¿Por qué ahora?</h2>
                                    </div>
                                </div>
                                <div data-wow-delay="0s" className="wow fadeInUp col-md-4">
                                    <div className="box-icon-item">
                                        <img src="/assets/images/Graph1.webp" alt="" />
                                        <div className="title"><Link href="#">Crecimiento ≥ Inlfación</Link></div>
                                        <p style={{ fontSize: '16px' }}>Históricamente, el crecimiento de los precios de las viviendas 
                                        y los alquileres ha superado la tasa de inflación.</p>
                                    </div>
                                </div>
                                <div data-wow-delay="0.1s" className="wow fadeInUp col-md-4">
                                    <div className="box-icon-item">
                                        <img src="/assets/images/Graph2.webp" alt="" />
                                        <div className="title"><Link href="#">ROI en Aumento</Link></div>
                                        <p style={{ fontSize: '16px' }}>Desde 2016, los rendimientos de las viviendas 
                                         en alquiler han superado a la mayoría de los sectores inmobiliarios.</p>
                                    </div>
                                </div>
                                <div data-wow-delay="0.2s" className="wow fadeInUp col-md-4">
                                    <div className="box-icon-item">
                                        <img src="/assets/images/graph3.webp" alt="" />
                                        <div className="title"><Link href="#">Desbalance de Inventario</Link></div>
                                        <p style={{ fontSize: '16px' }}>La oferta de viviendas unifamiliares ha estado insuficientemente abastecida durante 
                                            más de una década</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </Element>
{/* end aztecaz */}

{/* team */}
                    <Element name="team">
                    <div className="widget-our-team">
                        <div className="themesflat-container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="heading-section-1">
                                        <h2 className="tf-title pb-40">Conoce a nuestro super Team</h2>
                                    </div>
                                </div>
                                <div data-wow-delay="0s" className="wow fadeInUp col-md-3 col-6">
                                    <div className="our-team-item pb-38 text-center">
                                        <img src="/assets/images/avatar/team-01.png" alt="" />
                                        <div className="name"><Link href="#">Sue Del Toro</Link></div>
                                        <div className="info">CEO, Director</div>
                                        <div className="widget-social">
                                            <ul className="flex justify-center">
                                                <li><Link href="#" className="icon-facebook" /></li>
                                                <li><Link href="#" className="icon-twitter" /></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div data-wow-delay="0.1s" className="wow fadeInUp col-md-3 col-6">
                                    <div className="our-team-item pb-38 text-center">
                                        <img src="/assets/images/avatar/team-02.png" alt="" />
                                        <div className="name"><Link href="#">Celina Del Toro</Link></div>
                                        <div className="info">Rental Manager</div>
                                        <div className="widget-social">
                                            <ul className="flex justify-center">
                                                <li><Link href="#" className="icon-facebook" /></li>
                                                <li><Link href="#" className="icon-twitter" /></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div data-wow-delay="0.2s" className="wow fadeInUp col-md-3 col-6">
                                    <div className="our-team-item pb-38 text-center">
                                        <img src="/assets/images/avatar/team-03.png" alt="" />
                                        <div className="name"><Link href="#">Erwin Mayoral</Link></div>
                                        <div className="info">Real Estate Expert</div>
                                        <div className="widget-social">
                                            <ul className="flex justify-center">
                                                <li><Link href="#" className="icon-facebook" /></li>
                                                <li><Link href="#" className="icon-twitter" /></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div data-wow-delay="0.3s" className="wow fadeInUp col-md-3 col-6">
                                    <div className="our-team-item pb-38 text-center">
                                        <img src="/assets/images/avatar/team-04.png" alt="" />
                                        <div className="name"><Link href="#">Bruce Wayne</Link></div>
                                        <div className="info">Cave Owner</div>
                                        <div className="widget-social">
                                            <ul className="flex justify-center">
                                                <li><Link href="#" className="icon-facebook" /></li>
                                                <li><Link href="#" className="icon-twitter" /></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                </div>
                            <div className="row">
                                <div className="col-12">
                                    <Link href="/market-wallet" className="tf-button style-1 h50 w190 m-auto">Empieza ya!<i className="icon-arrow-up-right2" /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    </Element>
{/* end team */}

{/* faq */}
                    <Element name="faq">
                    <div className="tf-section-2 wrap-accordion pt-80">
                        <div className="themesflat-container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="heading-section-1">
                                        <h2 className="tf-title pb-40">Preguntas Frecuentes</h2>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="flat-accordion">
                                        <div data-wow-delay="0s" className="wow fadeInUp flat-toggle">
                                            <h6 className={isActive.key == 1 ? "toggle-title active" : "toggle-title"} onClick={() => handleToggle(1)}>1. Why are NFTs becoming popular?</h6>
                                            <div className="toggle-content" style={{ display: `${isActive.key == 1 ? "block" : "none"}` }}>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
                                            </div>
                                        </div>
                                        <div data-wow-delay="0s" className="wow fadeInUp flat-toggle">
                                            <h6 className={isActive.key == 2 ? "toggle-title active" : "toggle-title"} onClick={() => handleToggle(2)}>2. How do I keep my NFTs safe?</h6>
                                            <div className="toggle-content" style={{ display: `${isActive.key == 2 ? "block" : "none"}` }}>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
                                            </div>
                                        </div>
                                        <div data-wow-delay="0s" className="wow fadeInUp flat-toggle">
                                            <h6 className={isActive.key == 3 ? "toggle-title active" : "toggle-title"} onClick={() => handleToggle(3)}>3. What is blockchain?</h6>
                                            <div className="toggle-content" style={{ display: `${isActive.key == 3 ? "block" : "none"}` }}>
                                                <p>Blockchain is a shared, immutable ledger that facilitates the process of recording transactions and tracking assets in a business network. An asset can be tangible (a house, car, cash, land) or intangible (intellectual property, patents, copyrights, branding). Virtually anything of value can be tracked and traded on a blockchain network, reducing risk and cutting costs for all involved</p>
                                            </div>
                                        </div>
                                        <div data-wow-delay="0s" className="wow fadeInUp flat-toggle">
                                            <h6 className={isActive.key == 4 ? "toggle-title active" : "toggle-title"} onClick={() => handleToggle(4)}>4. What is an NFT?</h6>
                                            <div className="toggle-content" style={{ display: `${isActive.key == 4 ? "block" : "none"}` }}>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
                                            </div>
                                        </div>
                                        <div data-wow-delay="0s" className="wow fadeInUp flat-toggle">
                                            <h6 className={isActive.key == 5 ? "toggle-title active" : "toggle-title"} onClick={() => handleToggle(5)}>5. How do I set up my Ledger?</h6>
                                            <div className="toggle-content" style={{ display: `${isActive.key == 5 ? "block" : "none"}` }}>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="flat-accordion2">
                                        <div data-wow-delay="0s" className="wow fadeInUp flat-toggle2">
                                            <h6 className={isActive.key == 6 ? "toggle-title active" : "toggle-title"} onClick={() => handleToggle(6)}>6. Why are NFTs becoming popular?</h6>
                                            <div className="toggle-content" style={{ display: `${isActive.key == 6 ? "block" : "none"}` }}>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
                                            </div>
                                        </div>
                                        <div data-wow-delay="0s" className="wow fadeInUp flat-toggle2">
                                            <h6 className={isActive.key == 7 ? "toggle-title active" : "toggle-title"} onClick={() => handleToggle(7)}>7. How do I keep my NFTs safe?</h6>
                                            <div className="toggle-content" style={{ display: `${isActive.key == 7 ? "block" : "none"}` }}>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
                                            </div>
                                        </div>
                                        <div data-wow-delay="0s" className="wow fadeInUp flat-toggle2">
                                            <h6 className={isActive.key == 8 ? "toggle-title active" : "toggle-title"} onClick={() => handleToggle(8)}>8. What is blockchain?</h6>
                                            <div className="toggle-content" style={{ display: `${isActive.key == 8 ? "block" : "none"}` }}>
                                                <p>Blockchain is a shared, immutable ledger that facilitates the process of recording transactions and tracking assets in a business network. An asset can be tangible (a house, car, cash, land) or intangible (intellectual property, patents, copyrights, branding). Virtually anything of value can be tracked and traded on a blockchain network, reducing risk and cutting costs for all involved</p>
                                            </div>
                                        </div>
                                        <div data-wow-delay="0s" className="wow fadeInUp flat-toggle2">
                                            <h6 className={isActive.key == 9 ? "toggle-title active" : "toggle-title"} onClick={() => handleToggle(9)}>9. What is an NFT?</h6>
                                            <div className="toggle-content" style={{ display: `${isActive.key == 9 ? "block" : "none"}` }}>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
                                            </div>
                                        </div>
                                        <div data-wow-delay="0s" className="wow fadeInUp flat-toggle2">
                                            <h6 className={isActive.key == 10 ? "toggle-title active" : "toggle-title"} onClick={() => handleToggle(10)}>10. How do I set up my Ledger?</h6>
                                            <div className="toggle-content" style={{ display: `${isActive.key == 10 ? "block" : "none"}` }}>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="content">
                                        <div className="text">¿Aún te quedan dudas?</div>
                                        <p>Si no encuentras lo que buscas, entonces <Link href="#" className="tf-color">chatea alguien del equipo</Link></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </Element>
{/* end faq */}

                        </div>        
                        <Action8 />
                <BidModal handleBidModal={handleBidModal} isBidModal={isBidModal} />

{/* contact */}
<div>
                    
                    
                    <div className="tf-section-2 widget-box-icon">
                        <div className="themesflat-container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="heading-section-1">
                                        <h2 className="tf-title pb-20">Sientete como en casa</h2>
                                        <p className="pb-40">Conéctate con el futuro. Contáctanos ahora y descubre cómo la 
                                        innovación tecnológica redefine tu experiencia inmobiliaria. ¡Bienvenido al mañana hoy!</p>
                                    </div>
                                </div>
                                <div data-wow-delay="0s" className="wow fadeInUp col-md-4">
                                    <div className="box-icon-item">
                                        <img src="/assets/images/box-icon/address.png" alt="" />
                                        <div className="title"><Link href="#">Ubicación</Link></div>
                                        <p>Bahía de Banderas, Bucerías, Nayarit.</p>
                                    </div>
                                </div>
                                <div data-wow-delay="0.1s" className="wow fadeInUp col-md-4">
                                    <div className="box-icon-item">
                                        <img src="/assets/images/box-icon/email.png" alt="" />
                                        <div className="title"><Link href="#">Email</Link></div>
                                        <p>support@aztecaz.com
                                        ayuda@aztecaz.com
                                        </p>
                                    </div>
                                </div>
                                <div data-wow-delay="0.2s" className="wow fadeInUp col-md-4">
                                    <div className="box-icon-item">
                                        <img src="/assets/images/box-icon/phone.png" alt="" />
                                        <div className="title"><Link href="#">Teléfonos</Link></div>
                                        <p>+(52) 322-102-3028 <br />
                                            +(52) 322-131-8300</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tf-section-2 widget-box-icon">
                        <div className="themesflat-container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="heading-section-1">
                                        <h2 className="tf-title pb-20">No seas un extraño</h2>
                                        <p className="pb-40">¿Tienes alguna pregunta? ¿Necesitas ayuda? No dudes en escribirnos. Estamos aquí para asistirte.</p>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <form id="commentform" className="comment-form">
                                        <div className="flex gap30">
                                            <fieldset className="name">
                                                <input className="style-1" type="text" id="name" placeholder="Tu nombre*" name="name" tabIndex={2} aria-required="true" required />
                                            </fieldset>
                                            <fieldset className="email">
                                                <input className="style-1" type="email" id="email" placeholder="Email*" name="email" tabIndex={2} aria-required="true" required />
                                            </fieldset>
                                            <fieldset className="subject">
                                                <input className="style-1" type="text" id="subject" placeholder="Tema" name="subject" tabIndex={2} aria-required="true" required />
                                            </fieldset>
                                        </div>
                                        <fieldset className="message">
                                            <textarea className="style-1" id="message" name="message" rows={4} placeholder="Tu mensaje*" tabIndex={4} aria-required="true" required />
                                        </fieldset>
                                        <div className="btn-submit">
                                            <button className="tf-button style-1" type="submit">Enviar mensaje <i className="icon-arrow-up-right2" /></button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
{/* end contact*/}

            </Layout>
        </>
    )
}
