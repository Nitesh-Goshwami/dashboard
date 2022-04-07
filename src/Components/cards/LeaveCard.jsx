import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardActionArea } from '@mui/material';
import LeaveList from '../Paper/LeaveList';

export default function LeaveListCard() {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardContent>
                    <LeaveList />
                </CardContent>
            </CardActionArea>
        </Card>
    );
}
