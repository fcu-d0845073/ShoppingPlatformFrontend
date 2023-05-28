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

export default function ShoppingCart(){

    const navigate = useNavigate();
    const location = useLocation();
    const [commodity, setCommodity] = useState([]);

    useEffect(() =>{
        if (location.state.value === 1) {
            if (!localStorage.getItem('Commodity') === null)
                setCommodity(JSON.parse(localStorage.getItem('Commodity')));
            else
                setCommodity("");
        } else if (location.state.value === 2) {
            setCommodity(location.state.obj);
            var commodityString = JSON.stringify(location.state.obj);
            localStorage.setItem('Commodity', commodityString);
        }
    })

    function removeCommodity() {
        console.log("remove");
        localStorage.removeItem('Commodity');
        setCommodity("");
        navigate("/#");
    }

    return(
        <div>
            {commodity && 
                <Container fixed style={{marginTop:'10px'}} onClick = {() =>{
                    removeCommodity();
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
                                Price:{commodity.price}<br/>
                                Quantity:{commodity.quantity}<br/>
                                </Paper> 
                            </div>
                        ))}
                        </Paper>
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    </Card>
                </Container>}
            <button onClick={() => navigate("/CheckBill", {
                state : {
                    obj : commodity
                },
            })}>結帳</button><br/>
            <button onClick={() => navigate("/#")}>回首頁</button>
        </div>
    )
}