import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import ProfileUserForm from "./userForm";
import {useUser} from "../../hooks/user";

export default function ProfileTabs() {
    const [user, setUser] = useUser();
    const [tabId, setTabId] = React.useState('1');

    const handleTabChange = (event, newValue) => {
        setTabId(newValue);
    };

    return (
        <Box sx={{ width: '100%', typography: 'body1' }}>
            <TabContext value={tabId}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList onChange={handleTabChange}>
                        <Tab label="Profile" value="1" />
                        <Tab label="Visibility" value="2" />
                        <Tab label="Settings" value="3" />
                    </TabList>
                </Box>
                <TabPanel value="1">
                    <ProfileUserForm user={user} />
                </TabPanel>
                <TabPanel value="2">Item Two</TabPanel>
                <TabPanel value="3">Item Three</TabPanel>
            </TabContext>
        </Box>
    );
}