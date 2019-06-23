const UserProfile = (function() {
  let name = "";
  let email = "";
  let user_id = -1;
  let employer = false;

  const getName = function() {
    if (typeof (Storage) !== "undefined") {
      let temp = localStorage.getItem('name');
      if (temp != null) {
        name = temp;
      }
    }
    return name;
  };

  const setName = function(n) {
    if (n != null) {
      name = n;
      console.log("Thisis storage" + Storage);
      if (typeof (Storage) !== "undefined") {
        localStorage.setItem('name', name);

      }
    }
  };

  const getEmail = function () {
    if (typeof (Storage) !== "undefined") {
      let temp = localStorage.getItem('email');
      if (temp !== null) {
        email = temp;
      }
    }
    return email;
  };

  const setEmail = function (e) {
    if (e !== null) {
      email = e;
      if (typeof (Storage) !== "undefined") {
        localStorage.setItem('email', email);
      }
    }
  };

  const getUserId = function () {
    if (typeof (Storage) !== "undefined") {
      let temp = localStorage.getItem('user_id');
      if (temp !== null) {
        user_id = temp;
      }
    }
    return parseInt(user_id);
  };

  const setUserId = function (id) {
    user_id = id;
    if (typeof (Storage) !== "undefined") {
      localStorage.setItem('user_id', user_id);
    }
  };

  const getEmployer = function () {
    if (typeof (Storage) !== "undefined") {
      console.log("hello" + Storage);
      let temp = localStorage.getItem('employer');
      if (temp !== null) {
        if (temp==="true" || temp===true) {
          employer = true;
        } else {
          employer = false;
        }
      }
    }
    return employer;
  };

  const setEmployer = function (emp) {
    employer = emp;
    if (typeof (Storage) !== "undefined") {
      localStorage.setItem('employer', employer);
    }
  };

  return {
    getName: getName,
    setName: setName,
    getEmail: getEmail,
    setEmail: setEmail,
    getUserId: getUserId,
    setUserId: setUserId,
    getEmployer: getEmployer,
    setEmployer: setEmployer
  }

})();

export default UserProfile;
