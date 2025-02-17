# To run .js scripts on bone be sure to update request
npm install -g request
npm install -g bmp085
npm install -g winston

# From: http://phant.io/beaglebone/install/2014/07/03/beaglebone-black-install/

npm install -g phant
phant &
# Browse to http://14.139.34.32:8080/ and click "Create" and fill in the fields
# Save the keys as json.

# Load jquery and jsapi
wget https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js
wget https://www.google.com/jsapi

# Log some data
wget http://14.139.34.32:8080/input/$phant_PUBLIC?private_key=$ylDNWDNO7yFGDwORErVjCN84lmz\&amplitude=23.29\&timestamp=25.94

# Make html visible to default web server
dir=$PWD
cd /var/lib/cloud9
ln -s $dir .

echo "# My Stuff" >> /etc/crontab
echo "* * * * * root /root/exercises/phant/weather.js 2>&1 | logger" >> /etc/crontab 
# Look in /var/log/message for logger messages
