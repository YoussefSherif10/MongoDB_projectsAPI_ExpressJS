# MongoDB_projectsAPI_expressJS

In this project, I developed a RESTful API for projects endpoint. that gives the client all the CRUD functionalities.
I used expressJS for routing the requests and Mongo database for storing the projects and retrieving them.

according to the single responsibility design principle, I constructed the project in different layers where each layer is responsible for just one task.

the app is the entry point of the project and it initializes the server. the config is to configure the host, the username, the password, and the database to be able to connect to the MongoDB server.

for the products, the DAO(Data Object Layer) is used to interface with the D.B. by making queries. it can also create a new Product Model. The controller layer is used to abstract the DAO, abstract the DAO, and Validate the incoming requests and it is used as callbacks (Route Handlers) to be called by the route Layer. The Route layer is used to integrate a URL that comes with a certain HTTP method to a handler.