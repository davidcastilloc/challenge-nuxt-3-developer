# Challenge Nuxt 3 Frontend Developer

**Objective**: Evaluate the technical skills of a frontend developer by building a Nuxt 3 application from scratch with specific features.

Duration: 4-6 hours

## ℹ️ Context

You've just started to work with Company Inc., an Italian restaurant franchise that wants to have a presence on the Internet and bring some customers to their large network of restaurants by creating a viral marketing campaign.

They want you to build a Server-Side Rendering (SSR) Single Page Application using Nuxt 3. The main feature of the campaign is a Pasta Carbonara meal calculator. They have a "secret" formula with all the required ingredients, and users should be able to introduce the quantity they own. Then, it will give the number of meals they can cook at home. Once the calculator gives the number of meals, the site will navigate to a new page with the "secret" formula exposed, and the exact quantities of each ingredient to use.

The boss also wants to include a Quote of the Day on every Store shown in the list of the Our Stores section. The API for the Quote is available at: https://api-ninjas.com/api/quotes. Note that the API has a usage limit, so you should implement an efficient solution if the site reaches too many visits.

## 📋 STEP 1: Setup and Basic Structure

- Initialize a Nuxt 3 project.
- Set up the basic structure with components, pages, and styles.

## 🍽️ STEP 2: Meal Calculator

- Create a form where the user can input the quantities of ingredients they have.
- Calculate the number of meals based on the "secret" formula provided.
- Redirect the user to a new page showing the number of meals and the exact quantities of each ingredient to use.

```js
const secretIngredients = {
  pasta: 500,
  bacon: 200,
  eggs: 1,
  milk: 200,
  butter: 500,
  oil: 100
};
```

## 🏬 STEP 3: Stores List and Quote of the Day

- Create a page to list the stores using the file `stores.json`
- Fetch and display the Quote of the Day from the API on the stores page and the result page.
- Add a search input to filter the stores by name.
- Make the stores list responsive, displaying 4 columns on desktop and 1 column on mobile.

## 🎨 STEP 4: Styling and Design

Here we would like to see your artistic touch and design skills. Make sure the application is pleasant to look at and easy to use.

- Apply styles to the application using SCSS and BEM.
- Implement a design structure using Flexbox or CSS Grid.
- Ensure the application is responsive and looks good on both mobile and desktop devices.

## 🚀 STEP 5: Optimization and Performance

In this step, we are interested in seeing how you handle the performance of the application. We want the application to run quickly and efficiently.

- Implement caching for the Quote of the Day API to avoid hitting the usage limit.
- Implement techniques to improve the application's performance, such as lazy loading for components and image optimization.
- Document the optimization techniques used.

## 🧪 STEP 6: Quality Assurance

- Ensure cross-browser compatibility (except Internet Explorer) and responsiveness on the most used devices.
- Write unit tests for key components using Jest or Vitest.

## 📚 STEP 7: Documentation

Finally, we want to see your skills in documenting your work. Documentation is key to any successful project.

* Provide brief documentation on how to set up and run the application.
* Include a section describing the technical and design decisions made during development.

## 🌟 Optional Extras

- End-to-End Test: Add an end-to-end test for the main user flow (meal calculation and store search) using Cypress.
- Light and Dark Mode: Implement Light and Dark mode toggle and persist the user’s preference.

## 📦 Deliverables:

* Submit the code in a Git repository (e.g., GitHub) with clear instructions on how to set it up and run it.
* Provide a `README` file explaining how to run the tests and any other relevant details.

## 📄 Tasks structure

### Critical Tasks:

- Setup and Basic Structure
- Meal Calculator
- Stores List and Quote of the Day

### Secondary Tasks:

- Styling and Design
- Optimization and Performance
- Quality assurance

### Optional Tasks:

- End-to-End Testing
- Light and Dark Mode
