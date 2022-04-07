import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import RoomPreferencesIcon from '@mui/icons-material/RoomPreferences';
import HomeIcon from '@mui/icons-material/Home';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import ForumIcon from '@mui/icons-material/Forum';
import DataObjectIcon from '@mui/icons-material/DataObject';
import TopicIcon from '@mui/icons-material/Topic';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import LeaveListCard from './cards/LeaveCard';
import ActivePeopleCard from './cards/ActiveCard';
import AttendanceButton from './Buttons/AttendanceBUtton';

const drawerWidth = 240;

function Home(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Toolbar style={{ background: "#3A3845" }}>
                <img style={{ width: "100px", height: "30px", margin: "auto" }}
                    src="https://learn.masaischool.com/img/logo_big.png/" alt="logo" />
            </Toolbar>
            <Divider />
            <List>
                {['Home', 'Document', 'Apply Leave', 'IA Data'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>
                            {index === 0 ? <HomeIcon /> : index === 1 ? <TopicIcon /> : index === 2 ? <RoomPreferencesIcon /> : <DataObjectIcon />}
                        </ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {['All Discussions', 'Problems'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>
                            {index % 2 === 0 ? <ForumIcon /> : <ReportProblemIcon />}
                        </ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar sx={{
                    display: 'flex',
                    background: "#3A3845",
                    justifyContent: "space-between"
                }}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography noWrap component="span">
                        IA Dashboard
                    </Typography>
                    <Typography component={'span'} variant={'body2'} >
                        <AttendanceButton />
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box style={{ position: "absolute", right: 0 }}>
                <Toolbar />
                <Typography component={'span'} variant={'body2'}>
                    <LeaveListCard /><br />
                </Typography>
                <Typography component={'span'} variant={'body2'}>
                    <ActivePeopleCard />
                </Typography>
            </Box>
        </Box>
    );
}

Home.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Home;
