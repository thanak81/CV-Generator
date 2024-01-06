import { useState } from "react";
import "./App.css";

function App() {
  const [generalArray, setGeneralArray] = useState([]);

  const [name, setName] = useState("Thanak Mech");
  const [email, setEmail] = useState("thanakmech@gmail.com");
  const [phoneNumber, setPhoneNumber] = useState("(+855) 81790154");

  const [school, setSchool] = useState("Royal University of Phnom Penh");
  const [major, setMajor] = useState("Information Technology Engineering");
  const [dateSchool, setDateSchool] = useState("2021-Present");

  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");
  const [responsibilities, setResponsibilities] = useState("");
  const [dateJob, setDateJob] = useState("");

  const [educationArr,setEducationArr] = useState([])

  function handleSubmit(e) {
    e.preventDefault();
    if (name === "" || phoneNumber === "" || email === "") return;
    setGeneralArray([
      ...generalArray,
      {
        id: crypto.randomUUID(),
        name: name,
        email: email,
        phoneNumber: phoneNumber,
      },
    ]);
    // setName("");
    // setEmail("");
    // setPhoneNumber("");
    // return <div></div>;
    console.log(generalArray);
  }

  function handleAddMore(e){
    e.preventDefault();
    if (school === "" || major === "" || dateSchool === "") return;

    setEducationArr([
      ...educationArr,
      {
        id: crypto.randomUUID(),
        school: school,
        major:major,
        dateSchool:dateSchool
      }
    ])

    setSchool("")
    setMajor("")
    setDateSchool("")

    console.log(educationArr)

  }

  return (
    <>
      <div className="container-input-preview">
        <div className="input">
          <GeneralInfo
            handleSubmit={handleSubmit}
            name={name}
            email={email}
            phoneNumber={phoneNumber}
            nameFunc={setName}
            emailFunc={setEmail}
            phoneNumberFunc={setPhoneNumber}
          />
          <EducationalInfo 
                      school={school}
                      major={major}
                      dateSchool={dateSchool}
                      schoolFunc = {setSchool}
                      majorFunc = {setMajor}
                      dateSchoolFunc={setDateSchool}
                      handleAddMore={handleAddMore}
          />
          <PracticalInfo />
          <hr />
          <BTN />
        </div>

        <CVPreview name={name} email={email} phoneNumber={phoneNumber} school={school} major={major} dateSchool={dateSchool} educationArr={educationArr}/>
      </div>
    </>
  );
}

function setEditBTN() {}

function CVPreview({ name ,email,phoneNumber, school,
  major,
  dateSchool,educationArr}) {
  return (
    <div className="cv-preview">
      <h2 className="cv-title">Preview CV</h2>
      {/* <table>
        <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Phone Number</td>
          </tr>
        </thead>
        <tbody>
          {generalArray.map(({ id, name, email, phoneNumber }) => (
            <tr key={id}>
              <td>{name}</td>
              <td>{email}</td>
              <td>{phoneNumber}</td>
            </tr>
          ))}
        </tbody>
      </table> */}
      <div className="cv-preview-list">
        <div className="name">{name}</div>
        <div className="general-info-preview">
          <div>{phoneNumber}</div>
          <div>|</div>
          <div>{email}</div>
        </div>
        <div className="address">Phnom Penh, Cambodia</div>
        <div className="education-section-preview">
          <div className="title">EDUCATION</div>
          <div className="line"></div>
          <div className="education-setting">
            {educationArr.map(({id,school,major})=>(
              <div key={id}>
              <div className="section-school">
              <div className="school">{school}</div>
              <div className="location">Phnom Penh, Cambodia</div>
            </div>
            <div className="section-school-major">
            <div className="major">
              <span className="major_ba">Bachelor of Engineer, </span>
              {major}
            </div>
            <div className="major-period">2021-Present</div>
          </div>
              </div>

            ))}
            
            
          </div>
        </div>
        <div className="expirence-section-preview">
          <div className="title">EXPERIENCE</div>
          <div className="line"></div>
          <div className="section-school">
            <div className="job">HEINEKEN CAMBODIA, Intern</div>
            <div className="period">September - November</div>
          </div>
          <div className="section-school-major">
            <ul>
              <li>
                A 3 month internship
                <ul>
                  <li>Won the final Pitch award</li>
                  <li>Won the final Pitch award</li>
                  <li>Won the final Pitch award</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <div className="expirence-section-preview">
          <div className="title">SKILLS</div>
          <div className="line"></div>
          <div className="section-school-major">
            <ul>
              <li>Language: </li>
              <li>Programming: </li>
              <li>Computer: </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

function FinalCV() {
  return <div className="final-cv"></div>;
}

function GeneralInfo({
  name,
  email,
  phoneNumber,
  nameFunc,
  emailFunc,
  phoneNumberFunc,
  handleSubmit,

}) {
  return (
    <div className="general-info">
      <h2>General Info</h2>
      <Input text="Enter name" value={name} func={nameFunc} />
      <Input text="Enter email" value={email} func={emailFunc} />
      <Input
        text="Enter phone number"
        value={phoneNumber}
        func={phoneNumberFunc}
      />
    </div>
  );
}

function EducationalInfo({
  school,
  major,
  dateSchool,
  schoolFunc,
  majorFunc,
  dateSchoolFunc,
  handleAddMore
}) {
  return (
    <div className="education-info">
      <h2>Education Info</h2>
      <Input text="Enter School Name" value={school} func={schoolFunc} />
      <Input text="Enter Major" value={major} func={majorFunc}/>
      <Input text="Enter Date of Study" value={dateSchool} func={dateSchoolFunc}/>
      <Button text="Edit" />
      <Button text="Add more" func={handleAddMore}/>
    </div>
  );
}

function PracticalInfo() {
  return (
    <div className="practical-info">
      <h2>Practical Info</h2>
      <Input text="Company Name" />
      <Input text="Position Title" />
      <Input text="Reponsibilities" />
      <Input text="Date from and until" />
      <Button text="Edit" />
      <Button text="Add more" />
    </div>
  );
}

function BTN() {
  return (
    <>
      <Button text="Submit" />
    </>
  );
}

function Input({ text, value, func }) {
  return (
    <input
      type="text"
      placeholder={text}
      value={value}
      onChange={(e) => func(e.target.value)}
    />
  );
}

function Button({ text, handleClick ,func}) {
  return <button onClick={func}>{text}</button>;
}

export default App;
