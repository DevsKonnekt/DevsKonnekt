class ReadError extends Error {
    constructor(message, narrative, statusCode) {
      super(message);
      this.narrative = narrative;
      this.statusCode = statusCode;
      this.name = 'ReadError';
    }
  }
  
  class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidationError";
      }
  }
  class PropertyRequiredError extends ValidationError {
    constructor(property) {
        super("No property: " + property);
        this.name = "PropertyRequiredError";
        this.property = property;
      }
  }
  export function validateUser(user) {
    if (!user.firstName) {
      throw new PropertyRequiredError("firstName");
    }
    if (!user.lastName) {
      throw new PropertyRequiredError("lastName");
    }
    if (!user.username) {
        throw new PropertyRequiredError("username");
    }
    if (!user.email) {
      throw new PropertyRequiredError("email");
    }
    if (!user.password) {
      throw new PropertyRequiredError("password");
    }
    if (!user.employed) {
      throw new PropertyRequiredError("employed");
    }
  }
  
  export function validateEvent(event) {
    if (!event.title) {
      throw new PropertyRequiredError("title");
    }
    if (!event.description) {
      throw new PropertyRequiredError("description");
    }
    if (!event.startDate) {
        throw new PropertyRequiredError("startDate");
    }
    if (!event.endDate) {
      throw new PropertyRequiredError("endDate");
    }
    if (!event.venue) {
      throw new PropertyRequiredError("venue");
    }
    if (!event.organizer) {
      throw new PropertyRequiredError("organiser");
    }
    if (!event.category) {
        throw new PropertyRequiredError("categoty");
    }
}
  
//   export function readUser(json) {
//     let user;
  
//     try {
//       user = JSON.parse(json);
//     } catch (err) {
//       if (err instanceof SyntaxError) {
//         throw new ReadError("Syntax Error", err);
//       } else {
//         throw err;
//       }
//     }
  
//     try {
//       validateUser(user);
//     } catch (err) {
//       if (err instanceof ValidationError) {
//         throw new ReadError("Validation Error", err);
//       } else {
//         throw err;
//       }
//     }
  
//   }
  
//   try {
//     readUser('{bad json}');
//   } catch (e) {
//     if (e instanceof ReadError) {
//       alert(e);
//       // Original error: SyntaxError: Unexpected token b in JSON at position 1
//       alert("Original error: " + e.cause);
//     } else {
//       throw e;
//     }
//   }