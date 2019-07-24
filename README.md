# Educator-Script-Approval-Infosys
## Installing Requirements
You can either install requirements from the [package.json](https://github.com/tmoynandy/educator-script-approval-infy/blob/master/package.json) file or using the command

    npm install
    
## Running API
To run the api, navigate to the cloned directory and type the following command

    npm start

## API Demo
   
   **API END-POINT :** ***localhost:3000/educators/***
   

> API endpoint for educators to submit script

   **Request Type :** POST

   **Request  :**

   ![enter image description here](https://lh3.googleusercontent.com/MVhXieIK8JRKD7g-am80kK4WDAjEr6BGfMqzzwGGQro7G2jyx-4F0IaxgN1H1_orfHk_32Tt9I0)


   **Response :**
 

      {
        "message": "Request Submitted",
        "createdRequest": {
            "empid": 1055980,
            "name": "suman",
            "location": "banglore\n",
            "title": "gulab jamun",
            "script": "uploads/2019-07-24T17:50:47.605ZIMG_20190613_223657-min.jpg",
            "preprodstatus": "Working",
            "prodstatus": "Working",
            "postpordstatus": "Working"
        }
    }
    
   **API END-POINT :** ***localhost:3000/educators/***
   

> For fetching all script approval requests made by ALL educators

**Request Type :** GET

**Response  :**

    {
        "count": 2,
        "educators": [
            {
                "empid": 1055979,
                "name": "tanumoy",
                "location": "mysore",
                "title": "How to poop",
                "script": "pooping is the best thing in the morning",
                "preprodstatus": "Done",
                "prodstatus": "Done",
                "postpordstatus": "Working"
            },
            {
                "empid": 1055980,
                "name": "suman",
                "location": "banglore\n",
                "title": "gulab jamun",
                "script": "uploads/2019-07-24T17:50:47.605ZIMG_20190613_223657-min.jpg",
                "preprodstatus": "Working",
                "prodstatus": "Working",
                "postpordstatus": "Working"
            }
        ]
    }
   **API END-POINT :** ***localhost:3000/educators/< employee-id-of-educator>***
   

> For fetching all the script approval requests made by a particular educator

**Request Type :** GET

**Response  :**

    {
        "count": 1,
        "educator_requests": [
            {
                "empid": 1055979,
                "name": "tanumoy",
                "location": "mysore",
                "title": "How to poop",
                "script": "pooping is the best thing in the morning",
                "preprodstatus": "Done",
                "prodstatus": "Done",
                "postpordstatus": "Working"
            }
        ]
    }

**API END-POINT :** ***localhost:3000/educators/< educator-employee-id>***

> For changing status of script uploaded by employee after review by
> design team

   **Request Type :**  PATCH

   **Request  :**

    [{"propName":"preprodstatus","value":"Done"}]
    
preprodstatus - status after evaluation by pre-production team (on upload of script, preprodstatus : Waiting)

prodstatus - status after evaluation by production team (on upload of script, prodstatus : Waiting)

postprodstatus - status after evaluation by post-production team (on upload of script, postprodstatus : Waiting)

**Response :**

    {
        "message": "Status Updates"
    }


   