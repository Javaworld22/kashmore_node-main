#! bin/bash

sudo pm2 stop scripts/serve.sh && sudo pm2 start scripts/serve.sh

sudo touch /var/spool/cron/jigga_e10# /usr/bin/crontab /var/spool/cron/jigga_e10

sudo echo "0 * * * * /home/jigga_e10/kashmore_node/scripts/restart.sh" >> /var/spool/cron/jigga_e10