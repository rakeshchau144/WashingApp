import * as React from 'react';
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import noida from '../../../style/noida.jpg';
import red_fort from '../../../style/redfort..jpg';
import jaipur from '../../../style/JAIPUR.jpg';
import kashi from '../../../style/kashi-viswanath-temple-varanasi.webp';
import mumbai from '../../../style/mumbai.jpg';
import bengaluru from '../../../style/bengaluru.jpg';
import './serviceplace.css'; // Import your CSS file for additional styling


export default function GradientCover() {
    return (
        <>
            <div className="service_place">
                <div className="serviceHeading">
                    <h4>Best Car Washing at Popular Destinations</h4>
                </div>
                <div className="service_main">
                    <div className="row">
                        <div className="col">
                            <Card className="card">
                                <CardCover>
                                    <img
                                        src={noida}
                                        loading="lazy"
                                        alt=""
                                    />
                                </CardCover>
                                <CardContent className="card-content">
                                    <Typography
                                        startDecorator={<LocationOnRoundedIcon />}
                                        textColor="White"
                                        fontWeight={400}
                                        bgcolor={'black'}
                                        marginBottom={-2}
                                    >
                                        Noida
                                    </Typography>
                                </CardContent>
                            </Card>
                            
                        </div>
                        <div className="col">
                            <Card className="card">
                                <CardCover>
                                    <img
                                        src={kashi}
                                        loading="lazy"
                                        alt=""
                                    />
                                </CardCover>
                                <CardContent className="card-content">
                                    <Typography
                                        startDecorator={<LocationOnRoundedIcon />}
                                        textColor="White"
                                        fontWeight={400}
                                        bgcolor={'black'}
                                        marginBottom={-2}
                                    >
                                        Kashi
                                    </Typography>
                                </CardContent>
                            </Card>
                            
                        </div>
                        <div className="col">
                            <Card className="card">
                                <CardCover>
                                    <img
                                        src={jaipur}
                                        loading="lazy"
                                        alt=""
                                    />
                                </CardCover>
                                <CardContent className="card-content">
                                    <Typography
                                        startDecorator={<LocationOnRoundedIcon />}
                                        textColor="White"
                                        fontWeight={400}
                                        bgcolor={'black'}
                                        marginBottom={-2}
                                    >
                                        Jaipur
                                    </Typography>
                                </CardContent>
                            </Card>
                        </div>
                        <div className="col">
                            <Card className="card">
                                <CardCover>
                                    <img
                                        src={bengaluru}
                                        loading="lazy"
                                        alt=""
                                    />
                                </CardCover>
                                <CardContent className="card-content">
                                    <Typography
                                        startDecorator={<LocationOnRoundedIcon />}
                                        textColor="White"
                                        fontWeight={400}
                                        bgcolor={'black'}
                                        marginBottom={-2}
                                    >
                                        Bengaluru
                                    </Typography>
                                </CardContent>
                            </Card>
                            
                        </div>
                        <div className="col">
                            <Card className="card">
                                <CardCover>
                                    <img
                                        src={mumbai}
                                        loading="lazy"
                                        alt=""
                                    />
                                </CardCover>
                                <CardContent className="card-content">
                                    <Typography
                                        startDecorator={<LocationOnRoundedIcon />}
                                        textColor="White"
                                        fontWeight={400}
                                        bgcolor={'black'}
                                        marginBottom={-2}
                                    >
                                        Mumbai
                                    </Typography>
                                </CardContent>
                            </Card>
                            
                        </div>
                        <div className="col">
                            <Card className="card">
                                <CardCover>
                                    <img
                                        src={red_fort}
                                        loading="lazy"
                                        alt=""
                                    />
                                </CardCover>
                                <CardContent className="card-content">
                                    <Typography
                                        startDecorator={<LocationOnRoundedIcon />}
                                        textColor="White"
                                        fontWeight={400}
                                        bgcolor={'black'}
                                        marginBottom={-2}
                                    >
                                        Delhi
                                    </Typography>
                                </CardContent>
                            </Card>
                            
                        </div>
                        {/* Repeat the same structure for other cards */}
                    </div>
                </div>
            </div>
        </>
    );
}
