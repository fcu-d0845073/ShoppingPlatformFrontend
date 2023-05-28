import * as React from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from 'react';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Container from '@mui/material/Container';
import Button from './BasicButtons'
import domestic from './Images/domestic.JPG'
import education from './Images/education.JPG'
import foreign from './Images/foreign.JPG'
import japan from './Images/japan.JPG'
import love from './Images/love.JPG'
import terrible from './Images/terrible.JPG'
import yt from './Images/yt.JPG'

export default function CommodityPage() {

    const navigate = useNavigate();
    const location = useLocation();
    const [commodity, setCommodity] = useState([]);
    const [image, setImage] = useState("");
    var data;
    var example;

    useEffect(() => {
        var url;
        if (location.state.id === 1) {
            var classfication;
            if (location.state.value.localeCompare("None") === 0 ) {
                classfication = "";
            } else if (location.state.value.localeCompare("Education") === 0 ) {
                classfication = "Book";
            } else if (location.state.value.localeCompare("Love") === 0 ) {
                classfication = "Book";
            } else if (location.state.value.localeCompare("Terrible") === 0 ) {
                classfication = "Book";
            } else if (location.state.value.localeCompare("Yt") === 0 ) {
                classfication = "Book";
            } else if (location.state.value.localeCompare("Domestic") === 0 ) {
                classfication = "Cd";
            } else if (location.state.value.localeCompare("Foreign") === 0 ) {
                classfication = "Cd";
            } else if (location.state.value.localeCompare("Japan") === 0 ) {
                classfication = "Cd";
            }
            url = "http://localhost:8080/Commodity/SearchCommodity?name=&classfication=" + classfication + "&attribute=" + location.state.value;
        } else if (location.state.id === 2){
            url = "http://localhost:8080/Commodity/SearchCommodity?name=" + location.state.value + "&classfication=&attribute=";
        }
        fetch(url)
        .then(res => res.json())
        .then(result => {
            setCommodity(result);
        })
    })

    return(
        <div>
            <Container fixed style={{marginTop:'10px'}} onClick={() =>{
                navigate("/ShoppingCart", {
                    state: {
                        obj : commodity,
                        value : 2,
                    },
                });
            }}>
                <Card style={{ backgroundColor: 'rgba(255,255,255,0.9)' }}>
                <CardActionArea>
                    <CardContent>
                    <Typography variant="body2">
                    <Paper elevation={3}>
                    {commodity.map(commodity => (
                        <div>
                            <Paper elevation={6} style={{margin:"10px", padding:"15px", textAlign:"left"}} key={commodity.id}>
                            {commodity.attribute === "Domestic" && <div><img style={{ alignItems: 'flex-end' }} src={domestic} width={200} height={200} alt=""></img></div>}
                            {commodity.attribute === "Education" && <div><img src={education} width={200} height={200} alt=""></img></div>}
                            {commodity.attribute === "Foreign" && <div><img src={foreign} width={200} height={200} alt=""></img></div>}
                            {commodity.attribute === "Japan" && <div><img src={japan} width={200} height={200} alt=""></img></div>}
                            {commodity.attribute === "Love" && <div><img src={love} width={200} height={200} alt=""></img></div>}
                            {commodity.attribute === "Terrible" && <div><img src={terrible} width={200} height={200} alt=""></img></div>}
                            {commodity.attribute === "Yt" && <div><img src={yt} width={200} height={200} alt=""></img></div>}
                            Id:{commodity.id}<br/>
                            Attribute:{commodity.attribute}<br/>
                            Classfication:{commodity.classfication}<br/>
                            Name:{commodity.name}<br/>
                            Price:{commodity.price}
                            Quantity:{commodity.quantity}
                            </Paper>
                        </div>
                    ))}
                    </Paper>
                    </Typography>
                    </CardContent>
                </CardActionArea>
                </Card>
            </Container>
            <button onClick={() => navigate(-1)}>回上一頁</button>
        </div>
    );
}

