import React from "react";
import "./Card.css";
export default function IntroCard(input) {
  let data = [
    {
      Profile:
        "https://pbs.twimg.com/profile_images/1189494401359208448/AwbXHtpn_400x400.jpg",
      name: "Ratan Tata",
      Age: 86,
      Phone: "+918567------",
      Profession: "India's most respected industrialist",
    },
    {
      Profile:
        "https://m.economictimes.com/thumb/msid-97021979,width-1200,height-900,resizemode-4,imgsize-46928/modi-new-pti1.jpg",
      name: "Narendra Damodardas Modi",
      Age: 72,
      Phone: "+919817------",
      Profession: "Prime Minister Of India",
    },
    {
      Profile:
        "https://www.vmcdn.ca/f/files/shared/feeds/cp/2023/03/20230306020312-640592eee7c346bf10e33a4ajpeg.jpg",
      name: "Amitabh Bachchan",
      Age: 81,
      Phone: "+919999------",
      Profession: "Legendary Indian Actor",
    },
    {
      Profile:
        "https://upload.wikimedia.org/wikipedia/commons/2/20/The_Chairman%2C_Indian_Space_Research_Organisation_%28ISRO%29%2C_Dr._K._Sivan_addressing_a_press_conference_on_the_occasion_of_%E2%80%98Lunar_Orbit_Insertion_of_Chandrayaan-2_Mission%E2%80%99%2C_in_Bengaluru_on_August_20%2C_2019_%28cropped%29.jpg",
      name: "Kailasavadivoo Sivan",
      Age: 66,
      Phone: "+916967------",
      Profession: "Former (ISRO) chairman",
    },
    {
      Profile:
        "https://upload.wikimedia.org/wikipedia/commons/8/87/Kapil_Dev_at_Equation_sports_auction_%28cropped%29.jpg",
      name: "Kapil Dev",
      Age: 65,
      Phone: "+918567------",
      Profession: "First Indian Captain to win the Cricket World Cup",
    },
  ];
  for (let i = 0; i < data.length; i++) {
    let s = data[i].name.toLowerCase();
    if (s.includes(input.Name.toLowerCase())) {
      var name = data[i].name;
      var profile = data[i].Profile;
      var age = data[i].Age;
      var number = data[i].Phone;
      var Profession = data[i].Profession;
      break;
    }
  }
  return (
    <div className="Parent">
      <div className="card">
        <img src={profile} className="card-img-top" alt="..." />
        <div className="card-body">
          <h1 className="card-title">
            <b>{name}</b>
          </h1>
          <h2>Age : {age}</h2>
          <h2>Phone : {number}</h2>
          <h2>Profession : {Profession}</h2>
        </div>
      </div>
    </div>
  );
}