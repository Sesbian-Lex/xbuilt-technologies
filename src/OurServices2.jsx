// import './App.css'
import './OurServices2.css'
import LandingPageImg from './assets/landing-page-img.png'
import LandingPageIcon from './assets/landing-page-icon.png'
import FunnelDesign from './assets/funnel-design.png'
import FunnelDesignIcon from './assets/funnel-design-icon.png'
import CRMPipe from './assets/crm-pipelines.png'
import CRMPipeIcon from './assets/crm-pipelines-icon.png'
import WebDesign from './assets/web-design.png'
import WebDesignIcon from './assets/web-design-icon.png'
import VidEdit from './assets/vid-edit.png'
import VidEditIcon from './assets/vid-edit-icon.png'

function OurServices2(){
    
    return(
        <>
            <section className='section3_5'>       
                <div id='landingPage' className='service-explanation-wrapper'>
                    <div className='service-img-wrapper'>
                        <img src={LandingPageImg}/>
                    </div>
                    <div className='service-text-wrapper'>
                        <img src={LandingPageIcon}/>
                        <div>
                            <h2>
                                Landing Pages Design
                            </h2> 
                        </div>
                                                   

                        <h3>
                            Custom-built pages designed to attract, engage, and
                            convert casual visitors into high-quality leads
                        </h3>
                    </div>
                </div>

                <br/><br/><br/>

                <div id='funnelDesign' className='service-explanation-wrapper'>
                    <div className='service-img-wrapper'>
                        <img src={FunnelDesign}/>
                    </div>
                    <div className='service-text-wrapper'>
                        <img src={FunnelDesignIcon}/>
                        <div>
                            <h2>
                                Funnel Design & Automation
                            </h2>
                        </div>
                        
                        <h3>
                        Funnel design and automation that captures leads and
                        nurtures them with personalized, automated workflows
                        </h3>
                    </div>
                </div>

                <br/><br/><br/>

                <div id='crmPipe' className='service-explanation-wrapper'>
                    <div className='service-img-wrapper'>
                        <img src={CRMPipe}/>
                    </div>
                    <div className='service-text-wrapper'>
                        <img src={CRMPipeIcon}/>
                        <div>
                            <h2>
                                CRM & Pipelines
                            </h2>
                        </div>
                        
                        <h3>
                        Integrated CRM systems and sales pipelines that organize
                        leads, track opportunities, and keep your sales process
                        running smoothly.
                        </h3>
                    </div>
                </div>

                <br/><br/><br/>

                <div id='webDesign' className='service-explanation-wrapper'>
                    <div className='service-img-wrapper'>
                        <img src={WebDesign}/>
                    </div>
                    <div className='service-text-wrapper'>
                        <img src={WebDesignIcon}/>
                        <div>
                            <h2>
                                Website Design & Development
                            </h2>  
                        </div>
                        
                        <h3>
                        Custom-designed websites that captivate, build credibility,
                        and guide visitors to take meaningful action
                        </h3>
                    </div>
                    </div>

                            <br/><br/><br/>

                <div id='vidEdit' className='service-explanation-wrapper'>
                    <div className='service-img-wrapper'>
                        <img src={VidEdit}/>
                    </div>
                    <div className='service-text-wrapper'>
                        <img src={VidEditIcon}/>
                        <div>
                            <h2>
                                Video Editing
                            </h2>
                        </div>
                       
                        <h3>
                        Professional video editing that turns your content into
                        engaging, high-quality videos that captivate your audience
                        and strengthen your brand
                        </h3>
                    </div>

                </div>
            </section>
        
        </>
    )
}

export default OurServices2