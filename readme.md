# Project REST-Rant

REST-Rant is an app where users can review restaurants.

| Method        | Path              | Purpose          |
| ------------- | -------------     | -------------    |
| GET           |  /                | Home Page        |
| GET           |  /place           | Places Index page|
| POST          |  /place           | Create new place |
| GET           |  /places/new      | Form page for creating new place|
| GET           |  /place/:id       | Details about a particular place|
| PUT           |  /places/:id      | Update a particular place|
| GET           |  /places/:id/edit | Form page for editing an existing place|
| DELETE        |  /places/:id      | Delete a rant (comment) about a particular place|
| POST          |  /places/:id/rant | Create a rant (comment) about a particular place|
| DELETE        |  /places/:id/rant/:rantld| Delete a rant (comment) about a particular place|
| GET           |  *                | 404 page (matches any route not defined above)|