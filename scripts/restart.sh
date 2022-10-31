#! bin/bash

responseMsg = usr/bin/wget "http://34.69.107.214/check-service";

if [[$responseMsg -eq "express"]]
then
    echo "Working ...";
else
    echo "Restarting ...";
    sudo pm2 restart 0 && sudo pm2 start /home/jigga_e10/kashmore_node/scripts/serve.sh;

fi