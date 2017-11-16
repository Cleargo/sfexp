Hello, it's the first time to write a nodejs project. So here is the instructions to setup:

**Prerequisite**

You MUST install [nodejs](https://nodejs.org/) on your computer first. Please Google it before asking me how to download and install.

**Install and activate Express JS**
 1. Go to your destination folder, type the following command:
 ```
 cd <project_folder>
 npm install -g express-generator
 express <folder_name>
 cd <folder_name>
 npm install
 ```
 2. Add .gitignore file to exclude some core files:
 ```
 # IntelliJ project files
 .idea
 *.iml
 out
 gen

 # OS X
 .DS_Store*
 Icon?
 ._*

 # Windows
 Thumbs.db
 ehthumbs.db
 Desktop.ini

 # Linux
 .directory
 *~


 # npm
 node_modules
 package-lock.json
 *.log
 *.gz


 # Coveralls
 coverage

 # Benchmarking
 benchmarks/graphs
 ```
 3. Commit your folder to CVS to init your project.

**How to make your website run?**

Here I'll use Apache2 as example.

 1. Login into remote server using root permission. If you don't have, you can still `sudo -i` to gain root permission.
 2. Go to `/etc/apache2/sites-available/`
 3. Enable apache module `proxy` and `proxy_http`
```
a2enmod proxy
a2enmod proxy_http
```
 4. Modify file using `vim <config_file_name>.conf`
 5. Add the following section:
```
<VirtualHost *:80>

        ServerName <url>
        DocumentRoot <folder_position>

        <Directory <folder_position>>
                Options FollowSymLinks
                AllowOverride None
                Require all granted
        </Directory>

        <Directory /usr/lib/cgi-bin>
                Require all granted
        </Directory>


        ProxyRequests Off
        ProxyPreserveHost On
        ProxyVia Full
        <Proxy *>
                Require all granted
        </Proxy>
        <Location />
                ProxyPass http://127.0.0.1:3000/
                ProxyPassReverse http://1127.0.0.1:3000/
        </Location>

        LogLevel warn
        ErrorLog ${APACHE_LOG_DIR}/<site_name_as_you_like>-error.log
        CustomLog ${APACHE_LOG_DIR}/<site_name_as_you_like>-access.log combined

        AddHandler php5-fcgi .php
        Action php5-fcgi /cgi-bin/php5-fcgi
        Alias /cgi-bin/php5-fcgi /usr/lib/cgi-bin/php5-fcgi-cleargo
</VirtualHost>

```
 6. Restart server using `service apache2 restart`

**NOT YET!**

You still need to start the server. Usually you can start the server using `npm start`. But if you close the SSH command line, your website will be gone. So to keep it running, we can use crontab to help us.
 1. Edit CRON job using `crontab -e`
 2. Add the following command:
 ```
 * * * * * cd <your_folder>; npm start;
 ```
 3. Save your edit and enjoy your life!

**That's it!**

Enjoy your new website! If you found it insteresting, continue you road [here](http://expressjs.com/)