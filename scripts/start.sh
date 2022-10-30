#! bin/bash

touch /var/spool/cron/jigga.e10# /usr/bin/crontab /var/spool/cron/jigga.e10

echo "0 * * * * /home/jigga.e10/kashmore_node/scripts/start.sh" >> /var/spool/cron/jigga.e10

responseMsg = wget http://localhost:3000/check-service

if [[$responseMsg -eq "express"]]
then
    echo "Working ..."
else
    pm2 start ./scripts/serve.sh
    echo "Restarting ..."
fi