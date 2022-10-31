#! bin/bash

responseMsg = usr/bin/wget "http://34.69.107.214/check-service";

if [[$responseMsg -eq "express"]]
then
    echo "Working ..."
else
    pm2 restart /home/jigga_e10/kashmore_node/scripts/serve.sh;
    echo "Restarting ..."
fi