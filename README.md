# DCMS APIs
Content management system for the fests of College of Engineering, Trivandrum

# Getting Started
1. Clone the repository ```https://github.com/mozillacampusclubcet/dcms_node.git```
2. Install npm
3. Run ```npm install```
4. Once the install is completed, rename the ```config.example.js``` to ```config.js``` and 
    - change the name of the database to _cet_
    - insert your mysql username and password in their respective fields. 
5. Generate a new private key from firebase console and rename it to ```dcms-admin.js``` and place the file in the project's root. Follow the instrcutions [here](https://firebase.google.com/docs/admin/setup).
6. run ```npm start```
7. create a database named _cet_ using mysql
8. Try using sudo privileges in case of any error.

# Documentation
- run ```gulp doc``` and an apidoc folder will be created.
- Documentation for the project can be found in apidocs/index.html
