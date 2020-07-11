class User {
  constructor(username) {
    this.username = username;
    this.role = "standard";
  }

  static permissions() {
    return {
      read: true,
      write: false,
    };
  }

  setUsername(username) {
    this.username = username;
  }

  getUsername() {
    return this.username;
  }

  getRole() {
    return this.role;
  }
}

class Admin extends User {
  constructor(username) {
    super(username);
    this.role = "admin";
  }

  static permissions() {
    return {
      read: true,
      write: true,
    };
  }

  fireUser(username) {
    return `${username} has been fired!`;
  }
}

// extends inherits everything from parent
// super invokes constructor from parent - super basically calls the method of the same name from its parent
// with that in mind, super can actually hold values when being used in class descendents.
// we could actually do things like add a method in Admin with the same name as that in User but wanted to invoke a different method from the parent,
// we could write something like this:
/**
 * setUsername() {
    return super.getUsername()
  }
 * 
 */
// and that would work. However, we don't really need to do that because extends already pulls everything in. If we wanted to change the behaviour of that method, we could simply just make a method with the same name and make it do something different rather than calling super
