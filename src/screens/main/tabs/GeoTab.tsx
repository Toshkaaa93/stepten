import { Block, Button, Tab } from 'framework7-react';
import React from 'react';
import { Geolocation } from '@capacitor/geolocation';
import {LocalNotifications} from '@capacitor/local-notifications'


export const GeoTab = () => {

    const printCurrentPosition = async () => {

        const coordinates = await Geolocation.getCurrentPosition();
        console.log('Current position:', coordinates);
      };


      const notifs = async () => {
        let options = await LocalNotifications.schedule({
          notifications: [
            {
              id: 1,
              title: "First",
              body: "First notification",
              schedule: {at: new Date(Date.now() + 1000 * 5)}
            },
            {
                id: 2,
                title: "Second",
                body: "Second notification",
                schedule: {at: new Date(Date.now() + 1000 * 6)}
              },
              {
                id: 3,
                title: "Third",
                body: "Third notification",
                schedule: {at: new Date(Date.now() + 1000 * 7)}
              },
              {
                id: 4,
                title: "Fourth",
                body: "Fourth notification",
                schedule: {at: new Date(Date.now() + 1000 * 8)}
              },
              {
                id: 5,
                title: "Fifth",
                body: "Fifth notification",
                schedule: {at: new Date(Date.now() + 1000 * 9)}
              }
          ],
        });
        console.log('scheduled notifications', options);
      };

    return (
        <Tab id="tab-4" className="page-content">
        <Block>
            <Button fill className='margin-top' onClick={printCurrentPosition}>Geolocation</Button>
            <Button fill className='margin-top' onClick={notifs}>Notification</Button>
        </Block>
        </Tab>
    );
};
