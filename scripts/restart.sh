#! bin/bash

responseMsg=$(pm2 id serve);

if [[$responseMsg -ne "[]"]]
then
    echo "Working ...";
else
    echo "Restarting ...";
    sudo -u jigga_e10 pm2 restart /home/jigga_e10/kashmore_node/scripts/serve.sh;

fi