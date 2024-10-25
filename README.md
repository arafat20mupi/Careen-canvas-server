# Careen-canvas-server


## Server Side Live Link 

```

https://careen-canvas-server.vercel.app


```


```
admin email : arafat1@gmail.com

admin pass : Arafat@

```

# Schema And Api Methods


## User

```

<!-- Register Route -->
post("/api/users/register", register)

<!-- Login Route -->
post("/api/users/login", login)

<!-- Get All Users Route -->
get("/api/users")

<!-- Delete User Route -->
delete("/api/users/:uid")

<!-- Change User Role Route -->
put("/api/users/role")

```

 ### From Data
 
 ````
 POST  /api/formdata

GET  /api/formdata/:userId


````

### Jobs asBlog

```
GET /api/getJobsByFlitterSearch

POST /api/createJobs

PUT api/updateJobs/:id

DELETE /api/deleteJobs/:id

````
###  PaymentGetway byStripe

````
POST /api/createPaymentIntent

POST /api/payments

```

###  GiGs

```
POST   /api/gigs

 GET  /api/getByFilter

PUT  /api/:projectId

DELETE /api/:projectId

```

###Gigs Review
```
POST /api/gigs/:gigId/reviews

 GET  /api/gigs/:gigId/reviews

````





