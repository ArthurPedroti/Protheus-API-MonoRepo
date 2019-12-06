# Protheus-API
A API served by SQL protheus database to make reports and KPIs. Using React.js and Node.js

# Script for update the app on Server

1º - Login with SSH<br/>
2º - cd Protheus-API<br/>
3º - git pull<br/>
4º - cd frontend<br/>
5º - npm run build<br/>
6º - pm2 restart all<br/>

# Server Setup

1º - Install Node</br>

```curl -sL https://deb.nodesource.com/setup_8.x -o nodesource_setup.sh```</br>

```sudo bash nodesource_setup.sh```
```sudo apt install nodejs```
```sudo apt install build-essential```
2º - Install PM2</br>
```sudo npm install pm2@latest -g```
3º - Setting PM2 on Start Up</br>
``pm2 startup systemd``

When you start the services, you can save the list for restart with:</br>
`pm2 save`
4º - Install Yarn
```curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -```</br>
```echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
```
`sudo apt update`
`sudo apt install --no-install-recommends yarn`