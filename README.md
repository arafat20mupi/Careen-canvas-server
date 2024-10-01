# Careen-canvas-server


## Server Side Live Link 

```

https://careen-canvas-server.vercel.app


```


```

Admin Email: canvas@gmail.com

Admin Password: 123456

```


### MongoDb Url

```
MONGO_URI=mongodb+srv://todo:todo123@cluster0.drqortc.mongodb.net/todo-app?retryWrites=true&w=majority

```



# Schema And Api Methods


## User

```
  <!-- register route -->
  post('/api/users/register')
  <!-- login -->
  post('/api/users/login')

```

## NameContact 

```
<!-- Create a new name contact entry -->

post('/api/name-contact')

<!-- Get all name contact entries -->

get('/api/name-contact')

<!-- Get a specific name contact entry by ID -->

get('/api/name-contact/:id')

<!-- Update a name contact entry by  -->

put('/api/name-contact/:id')

<!-- Delete a name contact entry by  -->

delete('/api/name-contact/:id')

```

## Summary 


```
<!-- Create a summary -->
post('/api/summaries)

<!-- Get all summaries -->
get('/api/summaries)

<!-- Get a summary by ID -->
get('/api/summaries/:id)

<!-- Update a summary by ID -->
put('/api/summaries/:id)

<!-- Delete a summary by ID -->
delete('/api/summaries/:id)

```


## Title 

```
<!-- Create a title entry -->
post('/api/titles')

<!-- Get all titles -->
get('/api/titles')

<!-- Get a title entry by ID -->
get('/api/titles/:id')

<!-- Update a title entry by ID -->
put('/api/titles/:id')

<!-- Delete a title entry by ID -->
delete('/api/titles/:id')

```



## Skills


```
 <!-- Create a new skills entry -->
post('/skills')

 <!-- Get all skills -->
get('/skills')

 <!-- Get a specific skills entry by ID -->
get('/skills/:id')

 <!-- Update a skills entry by ID -->
put('/skills/:id')

 <!-- Delete a skills entry by ID -->
delete('/skills/:id')

```

## Projects 

```
 <!-- Create a new project -->
post('/api/projects')

 <!-- Get all projects -->
get('/api/projects')

 <!-- Get a project by ID -->
get('/api/projects/:id')

 <!-- Update a project by ID -->
put('/api/projects/:id')

 <!-- Delete a project by ID -->
delete('/api/projects/:id')

```

## Certificate

```

 <!-- Create a new certificate -->
post('/api/certificates', )

 <!-- Get all certificates -->
get('/api/certificates', )

 <!-- Get a certificate by ID -->
get('/api/certificates/:id', )

 <!-- Update a certificate by ID -->
put('/api/certificates/:id', )

 <!-- Delete a certificate by ID -->
delete('/api/certificates/:id', )

```

### Career objective

```
 <!-- Create a career objective -->
post('/api/CareerObjective')

 <!-- Get all career objectives -->
get('/api/CareerObjective')

 <!-- Get a career objective by ID -->
get('/api/CareerObjective/:id')

 <!-- Update a career objective by ID -->
put('/api/CareerObjective/:id')

 <!-- Delete a career objective by ID -->
delete('/api/CareerObjective/:id')

```

## Award 

```
 <!-- Create a new award -->
post('/api/awards')

 <!-- Get all awards -->
get('/api/awards')

 <!-- Get an award by ID -->
get('/api/awards/:id')

 <!-- Update an award by ID -->
put('/api/awards/:id')

 <!-- Delete an award by ID -->
delete('/api/awards/:id')

```

### language


```

      <!-- post route -->
post("/api/language/createLanguage")
     <!-- get route -->
get("/api/language/getLanguagesByUserId ")
  <!-- update route -->
patch("/api/language/updateLanguages/:id ")
  <!-- delete route -->
delete("/api/language/deleteLanguages/:id")

```


### Experience

```

      <!-- post route -->
post("/api/Experience/createExperience")
     <!-- get route -->
get("/api/Experience/getExperience")
  <!-- update route -->
patch("/api/Experience/updateExperienceById/:id")
  <!-- delete route -->
delete("/api/Experience/deleteExperienceById/:id")

```


### Education

```

      <!-- post route -->
 post("/api/education/CreateEducation")
     <!-- get route -->
 get("/api/education/getEducations")
  <!-- update route -->
patch("/api/education/updateEducation/:id")
  <!-- delete route -->
 delete("/api/education/deleteEducation/:id")

``` 



