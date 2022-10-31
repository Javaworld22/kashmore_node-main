#! bin/bash

touch /var/spool/cron/jigga.e10# /usr/bin/crontab /var/spool/cron/jigga.e10

echo "0 * * * * /home/jigga.e10/kashmore_node/scripts/restart.sh" >> /var/spool/cron/jigga.e10