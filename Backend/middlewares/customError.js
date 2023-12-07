/**
 * Represents a custom validation error.
 * @class
 * @extends Error
 * @param {string} message - The error message.
 */
export class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}

/**
 * Represents a custom error indicating that a required property is missing.
 * @class
 * @extends ValidationError
 */
export class PropertyRequiredError extends ValidationError {
  /**
   * Creates a new instance of PropertyRequiredError.
   * @param {string} property - The name of the missing property.
   */
  constructor(property) {
    super("No property: " + property);
    this.name = "PropertyRequiredError";
    this.property = property;
  }
}

/**
 * Validates a user object.
 * @param {Object} user - The user object to validate.
 * @throws {PropertyRequiredError} If any required property is missing in the user object.
 */
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
