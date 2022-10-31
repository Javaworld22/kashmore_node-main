#! bin/bash

servePM = sudo pm2 stop serve

if [ $servePM -ne 0 ];
then

else

fi

sudo npm uninstall -g pm2 && sudo -u jigga_e10 pm2 start scripts/serve.sh

sudo touch /var/spool/cron/jigga_e10# /usr/bin/crontab /var/spool/cron/jigga_e10

sudo echo "0 * * * * /home/jigga_e10/kashmore_node/scripts/restart.sh" >> /var/spool/cron/jigga_e10