import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardActionArea } from '@mui/material';
import ActivePeople from '../Paper/ActivePeople';

export default function ActivePeopleCard() {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardContent>
                    <ActivePeople />
                </CardContent>
            </CardActionArea>
        </Card>
    );
}
