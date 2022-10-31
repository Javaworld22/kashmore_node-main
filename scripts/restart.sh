#! bin/bash

responseMsg = usr/bin/wget "http://34.69.107.214/check-service";

if [[$responseMsg -eq "express"]]
then
    echo "Working ..."
else
    pm2 start ./scripts/serve.sh
    echo "Restarting ..."
fi