![Status Stable](https://img.shields.io/badge/Status-Stable-blue)
[![MIT License](https://img.shields.io/badge/License-MIT%20License-brightgreen)](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs)

# Kitchen Story - Angular Application

Kitchen Story is a front-end application written in Angular which purpose is to let people shop
basic food items existent in the store's inventory.

## Table of Contents

- Kitchen Story
    * [Installation](#Installation)
    * [Usage](#usage)
    * [API Calls](#API)
    * [Credits](#credits)
- [🔗 Links](#---links)
    + [GitHub Repository](#github-repository)
    + [Support](#support)
    + [Authors](#authors)

## Installation

The application is a front-end demonstration of the Angular Framework that will need an IDE to run properly. Pull
the code from GitHub repository and run **npm install** to download all dependencies.

````````````````````````
- IDE (Eclipse or IntelliJ)
- Pull the code from GitHub repository
- Run npm install to download all dependencies
- Type ng serve -o and... voila!
````````````````````````

## Usage

You have a menu in the landing page that
helps you navigate through the process of searching and buying food items. Following is a list of the menus in the
application and its descriptions.

````````````````````````
 - Search: 
   Search through the list of food items in the inventory
 
 - Cart: 
   Where the selected items are kept until you pay for them
 	
 - Checkout: 
   Here you type your client information
 	
 - Admin Login: 
   Only administrators can update the inventory, and you login first
 	
 - Inventory: 
   After administrators login, the price and availability or items can be updated 

````````````````````````

<p align="center"><img src="./sl-kitchen-story.gif" /></p>

## API Calls

````````````````````````
The application uses https://mockapi.io/ API calls to manage the search, checkout and inventory.

 - GET list of Foods
   https://62e8570a249bb1284ead379a.mockapi.io/api/v1/foods
 
 - POST purchase
   https://62e8570a249bb1284ead379a.mockapi.io/api/v1/purchase
 
 - PUT change of admin password
   https://62e8570a249bb1284ead379a.mockapi.io/api/v1/users/:id
 
 - DELETE inventory
   https://62e8570a249bb1284ead379a.mockapi.io/api/v1/foods/:id
 

````````````````````````

## Future Features 🚀

````````````````````````
- Include spinners to inform users of data being requested
- Use MongoDB as a source of data
- Move to a cloud service
````````````````````````

## Contributions

If you would like to contribute to this project, you are very welcome! Fork the code and then submit a pull request with
your changes.
In case you need them, here are some guidelines: [Contributor Covenant](https://www.contributor-covenant.org/)

# 🔗 Links

### GitHub Repository

[https://github.com/giannifontanot/simplilearn-kitchen-story/](https://github.com/giannifontanot/simplilearn-kitchen-story/)

### Support

If you need help with this project, please write
to: [gianni.fontanot@gmail.com](https://mailto:gianni.fontanot@gmail.com)

### Authors

- [@giannifontanot](https://www.github.com/giannifontanot)
- [![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://giannifontanot.github.io/portfolio/)
- [![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/gianni-fontanot/)
