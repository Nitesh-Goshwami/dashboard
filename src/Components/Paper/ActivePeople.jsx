import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function ActivePeople() {
    const activedata = [{ name: "Nitesh Goshwami", icon: <AccountCircleIcon />, mail: "nitesh@gmail.com" },
    { name: "Souvik dutta", icon: <AccountCircleIcon />, mail: "souvik@gmail.com" },
    { name: "Rounak Mazumdar", icon: <AccountCircleIcon />, mail: "rounak@gmail.com" },
    { name: "Shivang Shukla", icon: <AccountCircleIcon />, mail: "shivang@gmail.com" },
    { name: "Pulkit Tyagi", icon: <AccountCircleIcon />, mail: "pulkit@gmail.com" },
    { name: "Shariq Ansari", icon: <AccountCircleIcon />, mail: "shariq@gmail.com" },
    { name: "Neeraj Malwal", icon: <AccountCircleIcon />, mail: "neeraj@gmail.com" },
    ]
  return (
    <List
      sx={{
        width: '100%',
        maxWidth: 360,
        bgcolor: 'background.paper',
        position: 'relative',
        overflow: 'auto',
        maxHeight: 300,
        '& ul': { padding: 0 },
      }}
      subheader={<li />}
    >
      {[0].map((sectionId) => (
        <li key={`section-${sectionId}`}>
          <ul>
            <ListSubheader sx = {{fontSize:"16px",color:"black"}}>{`Active People`}</ListSubheader>
            {activedata.map((item) => (
              <ListItem key={`item-${sectionId}-${item}`}>
                <ListItemText primary={<>
              <div style = {{display:"flex", margin:"10px", color:"#006778"}}>
                <div>
                  <span>{item.icon}</span> &emsp;
                </div>
                <div>
                  <span>{item.name}</span><br />
                  <small>{item.mail}</small>
                </div>

              </div>
            </>} />
              </ListItem>
            ))}
          </ul>
        </li>
      ))}
    </List>
  );
}
