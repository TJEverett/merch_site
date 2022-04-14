# Merch Shop

#### _Run a fictional Book shop, 04/14/2022_

#### By _**Tristen Everett**_

## Description

This project was to gain practice in building full CRUD functionality within a React page, while meeting criteria of user stories. In this project, I built a page that loads a merchandise store that is designed to sell books. It allows an "employee" to add a book into the shop's inventory with a starting price and stock; it will then show up in the store side of the page and allow a "customer" to look into a specific book's details and buy a copy if they want. The [user stories](#basic-user-stories) that were used are included below, along with a [diagram](#diagram) of the React components.
This project was later updated as practice in adding and using Redux to act as a global store that uses reducers to allow code to update the store.

### Basic User Stories

* Create, Read, Update and Delete items in the store. Items should have fields for name, description, and quantity (along with any other fields you wish to add).
* Increase or decrease the quantity of an item in the store. For instance, if a user clicks "Buy", the quantity will decrease by one. If a user clicks "Restock", it will increment by a specified number.
* When the quantity of an item is reduced to 0, the item should say "Out of Stock". A user should not be able to reduce the quantity of an item below 0.

### Diagram

* [MerchSite PDF](./MerchSite.pdf)

## Setup/Installation Requirements

1. Clone this Repo
2. Run `npm install` from within the root directory of the cloned project
3. Run `npm start` from within the root directory of the cloned project
4. The webpage should start automatically in your default browser. If it doesn't go to http://localhost:3000 in your preferred browser

## Technologies Used

* [Create React App](https://github.com/facebook/create-react-app)
* Redux
* React-Redux

### Technologies Changed

* Changed to a older package.json built by Create React App to allow installation of React-Redux version that was required by lessons
* Added Redux

### License

This software is licensed under the MIT license

Copyright (c) 2022 **_Tristen Everett_**