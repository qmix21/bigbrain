# WHMCS Base

*Created: 2019-01-21*

*By: Johnathan Tiong (jt@hostopia.com.au)*

- - - -

A base docker-compose script and files to start a local installation of WHMCS on your machine. Dockerfile is configured to closely match production servers as much as possible.


## Installation

#### Code installation

* You _MUST_ follow all the instructions here: https://confluence.hostopia.com.au/pages/viewpage.action?pageId=64521324
* Edit `./docker/.env` with the correct brand you want
* Run `./init.sh` to remove the git repo stuff from the folder **REMEMBER TO DO THIS STEP**
* Get the billing repo you want into the `www` folder (recommended method is `git clone [reponame] www` inside the root folder of this project)

#### DB Preparation

* Copy the `./configuration/.env.yaml` file from the staging dev server of your chosen billing repo
* Edit the `./configuration/.env.yaml` file with the right DB details:

```
database:
  host: core_db
  name: dpbilling
  username: dpbilling
  password: your-password-from-the-database-project
  charset: utf8
```

* Get a DB dump for the brand billing that you're using ([found here](https://confluence.hostopia.com.au/display/DT/Getting+Dev+Billing+DB+Dumps))
* Update the tblconfiguration table (**Must** use raw SQL Query e.g.: `UPDATE tblconfiguration SET value='http://dp.whmcs.local' WHERE setting='SystemURL';`)
* create a `www/templates_c` directory and `chmod -R 777` it!
* run `./start.sh`
* visit your URL (e.g. http://dp.whmcs.local)

### Making Changes

Please note, making changes to anything in the `docker` folder will require a rebuild of the containers. Run the `./rebuild.sh` script to rebuild your container so that it reflects your changes correctly

### Troubleshooting

You shouldn't run into any problems - but see anyone in the development team if you do!

- - - -

## Contributing

Simply make an edit and commit as needed to this repo
