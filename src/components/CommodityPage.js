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

export default function CommodityPage() {

    const navigate = useNavigate();
    const location = useLocation();
    const [commodity, setCommodity] = useState([]);
    const [img, setImg] = useState();

    useEffect(() => {
        var url;
        if (location.state.id === 1) {
            
            url = "http://localhost:8080/Commodity/SearchCommodity?name=&classfication=" + "Book" + "&attribute=" + location.state.value;

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
            <Container fixed style={{marginTop:'10px'}}>
                <Card style={{ backgroundColor: 'rgba(255,255,255,0.9)' }}>
                <CardActionArea>
                    <CardContent>
                    <Typography variant="body2">
                    <Paper elevation={3}>
                    {commodity.map(commodity => (
                        <Paper elevation={6} style={{margin:"10px", padding:"15px", textAlign:"left"}} key={commodity.id}>
                        Id:{commodity.id}<br/>
                        Attribute:{commodity.attribute}<br/>
                        Classfication:{commodity.classfication}<br/>
                        Name:{commodity.name}<br/>
                        Price:{commodity.price}<br/>
                        Quantity:{commodity.quantity}<br/>
                        </Paper>
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

