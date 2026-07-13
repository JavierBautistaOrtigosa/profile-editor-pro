import { useState } from "react";
import "./tw-reset.css";

const ProfileEditorPro = () => {
  const initialUser = {
    name: "",
    surname: "",
    age: "",
    contact: {
      email: "",
      phone: "",
    },
    address: {
      state: "",
      city: "",
      street: "",
      code: "",
    },
    preferences: {
      theme: "",
      language: "",
      notifications: {
        email: false,
        sms: false,
        push: false,
      },
    },
    skills: ["", "", ""], // 3 skills
    emergencyContact: {
      name: "",
      relation: "",
      phone: "",
    },
  };

  const [user, setUser] = useState(initialUser);

  // -------------------------
  // EMPTY RESET HANDLERS
  // -------------------------

  const resetName = () => {
    setUser((prev) => ({ ...prev, name: initialUser.name }));
  };
  const resetSurname = () => {
    setUser((prev) => ({ ...prev, surname: initialUser.surname }));
  };
  const resetAge = () => {};

  const resetEmail = () => {};
  const resetPhone = () => {};

  const resetState = () => {};
  const resetCity = () => {};
  const resetStreet = () => {};
  const resetCode = () => {};

  const resetTheme = () => {};
  const resetLanguage = () => {};

  const resetEmailNotif = () => {};
  const resetSmsNotif = () => {};
  const resetPushNotif = () => {};

  const resetSkill1 = () => {};
  const resetSkill2 = () => {};
  const resetSkill3 = () => {};

  const resetEmergencyName = () => {};
  const resetEmergencyRelation = () => {};
  const resetEmergencyPhone = () => {};

  return (
    <div className="tw-reset">
      <h2>Profile Editor Pro</h2>

      {/* BASIC INFO */}
      <label>
        Name: {user.name}
        <br />
        <input
          value={user.name}
          placeholder="Type your name..."
          onChange={(e) => {
            setUser((prev) => ({ ...prev, name: e.target.value }));
          }}
        />
        <button onClick={resetName}>Reset</button>
      </label>

      <br />
      <br />

      <label>
        Surname: {user.surname}
        <br />
        <input
          value={user.surname}
          placeholder="Type your surname..."
          onChange={(e) => {
            setUser((prev) => ({
              ...prev,
              surname: e.target.value,
            }));
          }}
        />
        <button onClick={resetSurname}>Reset</button>
      </label>

      <br />
      <br />

      <label>
        Age: {user.age}
        <br />
        <input
          value={user.age}
          placeholder="Type your age..."
          onChange={(e) => {}}
        />
        <button onClick={resetAge}>Reset</button>
      </label>

      <br />
      <br />

      {/* CONTACT */}
      <label>
        Email: {user.contact.email}
        <br />
        <input
          value={user.contact.email}
          placeholder="Type your email..."
          onChange={(e) => {}}
        />
        <button onClick={resetEmail}>Reset</button>
      </label>

      <br />
      <br />

      <label>
        Phone: {user.contact.phone}
        <br />
        <input
          value={user.contact.phone}
          placeholder="Type your phone..."
          onChange={(e) => {}}
        />
        <button onClick={resetPhone}>Reset</button>
      </label>

      <br />
      <br />

      {/* ADDRESS */}
      <label>
        State: {user.address.state}
        <br />
        <input
          value={user.address.state}
          placeholder="Type your state..."
          onChange={(e) => {}}
        />
        <button onClick={resetState}>Reset</button>
      </label>

      <br />
      <br />

      <label>
        City: {user.address.city}
        <br />
        <input
          value={user.address.city}
          placeholder="Type your city..."
          onChange={(e) => {}}
        />
        <button onClick={resetCity}>Reset</button>
      </label>

      <br />
      <br />

      <label>
        Street: {user.address.street}
        <br />
        <input
          value={user.address.street}
          placeholder="Type your street..."
          onChange={(e) => {}}
        />
        <button onClick={resetStreet}>Reset</button>
      </label>

      <br />
      <br />

      <label>
        Code: {user.address.code}
        <br />
        <input
          value={user.address.code}
          placeholder="Type your code..."
          onChange={(e) => {}}
        />
        <button onClick={resetCode}>Reset</button>
      </label>

      <br />
      <br />

      {/* PREFERENCES */}
      <label>
        Theme: {user.preferences.theme}
        <br />
        <input
          value={user.preferences.theme}
          placeholder="light/dark"
          onChange={(e) => {}}
        />
        <button onClick={resetTheme}>Reset</button>
      </label>

      <br />
      <br />

      <label>
        Language: {user.preferences.language}
        <br />
        <input
          value={user.preferences.language}
          placeholder="Type your language..."
          onChange={(e) => {}}
        />
        <button onClick={resetLanguage}>Reset</button>
      </label>

      <br />
      <br />

      {/* NOTIFICATIONS */}
      <label>
        Email Notifications: {String(user.preferences.notifications.email)}
        <br />
        <input
          type="checkbox"
          checked={user.preferences.notifications.email}
          onChange={() => {}}
        />
        <button onClick={resetEmailNotif}>Reset</button>
      </label>

      <br />
      <br />

      <label>
        SMS Notifications: {String(user.preferences.notifications.sms)}
        <br />
        <input
          type="checkbox"
          checked={user.preferences.notifications.sms}
          onChange={() => {}}
        />
        <button onClick={resetSmsNotif}>Reset</button>
      </label>

      <br />
      <br />

      <label>
        Push Notifications: {String(user.preferences.notifications.push)}
        <br />
        <input
          type="checkbox"
          checked={user.preferences.notifications.push}
          onChange={() => {}}
        />
        <button onClick={resetPushNotif}>Reset</button>
      </label>

      <br />
      <br />

      {/* SKILLS */}
      <label>
        Skill 1: {user.skills[0]}
        <br />
        <input value={user.skills[0]} onChange={(e) => {}} />
        <button onClick={resetSkill1}>Reset</button>
      </label>

      <br />
      <br />

      <label>
        Skill 2: {user.skills[1]}
        <br />
        <input value={user.skills[1]} onChange={(e) => {}} />
        <button onClick={resetSkill2}>Reset</button>
      </label>

      <br />
      <br />

      <label>
        Skill 3: {user.skills[2]}
        <br />
        <input value={user.skills[2]} onChange={(e) => {}} />
        <button onClick={resetSkill3}>Reset</button>
      </label>

      <br />
      <br />

      {/* EMERGENCY CONTACT */}
      <label>
        Emergency Name: {user.emergencyContact.name}
        <br />
        <input value={user.emergencyContact.name} onChange={(e) => {}} />
        <button onClick={resetEmergencyName}>Reset</button>
      </label>

      <br />
      <br />

      <label>
        Emergency Relation: {user.emergencyContact.relation}
        <br />
        <input value={user.emergencyContact.relation} onChange={(e) => {}} />
        <button onClick={resetEmergencyRelation}>Reset</button>
      </label>

      <br />
      <br />

      <label>
        Emergency Phone: {user.emergencyContact.phone}
        <br />
        <input value={user.emergencyContact.phone} onChange={(e) => {}} />
        <button onClick={resetEmergencyPhone}>Reset</button>
      </label>

      <br />
      <br />
    </div>
  );
};

export default ProfileEditorPro;
