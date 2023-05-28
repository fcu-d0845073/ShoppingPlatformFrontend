import * as React from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from 'react';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Container from '@mui/material/Container';
import domestic from './Images/domestic.JPG'
import education from './Images/education.JPG'
import foreign from './Images/foreign.JPG'
import japan from './Images/japan.JPG'
import love from './Images/love.JPG'
import terrible from './Images/terrible.JPG'
import yt from './Images/yt.JPG'

export default function CommodityRecord(){

    const navigate = useNavigate();
    const location = useLocation();
    const [commodity, setCommodity] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        var url = "http://localhost:8080/CommodityRecord/SearchCommodityRecord?account=d0845073"
        fetch(url)
        .then(res => res.json())
        .then(result => {
            console.log(result);
            setCommodity(result);
        })
    })

    function refund() {
        const refundType = [commodity[0].id]
        var url = "http://localhost:8080/CommodityRecord/Refund?account=d0845073&id=" + commodity[0].id;
        fetch(url, {
            method:"POST",
            headers:{"Content-Type":"application.json"},
            body:JSON.stringify(refundType)
        }).then(res => res.json())
          .then(result => {
            if (result === true) {
                navigate("/#");
            } else {
                setErrorMessage("With some error!");
            }
          })
    }

    return(
        <div>
            {commodity && 
                <Container fixed style={{marginTop:'10px'}} onClick={() =>{
                    refund();
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
                </Container>}
            <button onClick={() => navigate(-1)}>回上一頁</button>
        </div>
    )
}