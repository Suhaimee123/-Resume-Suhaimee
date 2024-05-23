import React from 'react';

function Main() {
  return (
    <main>
      <section className="personal-details">
        <h2>Personal Details</h2>
        <ul>
          <li><strong>Full Name:</strong> Suhaimee Kaje</li>
          <li><strong>Nickname:</strong> Je</li>
          <li><strong>Religion:</strong> Islam</li>
          <li><strong>Nationality:</strong> Thai</li>
          <li><strong>Birth Date:</strong> January 3, 2003 (21 years old)</li>
          <li><strong>Military Status:</strong> Conscripted</li>
          <li><strong>Desired Position:</strong> Software Developer</li>
        </ul>
      </section>
      <section className="education">
        <h2>Education</h2>
        <ul>
          <li><strong>Institution:</strong> Panyapiwat Institute of Management</li>
          <li><strong>Faculty:</strong> Engineering and Technology</li>
          <li><strong>Major:</strong> Digital Information and Technology</li>
          <li><strong>GPA:</strong> 3.38</li>
        </ul>
      </section>
      <section className="career-objective">
        <h2>Career Objective</h2>
        <p> To be a professional in my field</p>
        <p>To utilize my experiences, knowledge and skills</p>
      </section>
      <section className="skills">
        <h2>Skills</h2>
        <ul>
          <li><strong>Programming Languages:</strong> HTML, CSS,Javascript,Python,c++,Java</li>
          <li><strong>Software & Tools:</strong> Github,Vscode,MySQL,AWS,Firebase,React</li>
        </ul>
      </section>
      <section className="projects">
        <h2>Projects</h2>
        <ul>
          <li>Resume-Suhaimee</li>
          <li>Blockchain</li>
          <li>Lottery-Solidity</li>
          <li>Caesar-cipher</li>
          <li><strong>GitHub:</strong> <a href="https://github.com/Suhaimee123">https://github.com/Suhaimee123</a></li>
        </ul>
      </section>
      <section className="work-experience">
        <h2>Work Experience</h2>
        <ul>
          <li><strong>2021-2021 (6 Day)</strong><br />
          S C M Technology CO.Ltd COMPANY<br />
          PERUSAHAANit-internet/ Part Time<br />
          Responsibility : check wifi<br />
            
          </li>
          <li><strong>2022-2022 (3 Month)</strong><br />
          CP ALL Public Company Limited. (7-Eleven) / Internship<br />
          Position : apprentice<br />
          Responsibility :convenience store service,Counter Service<br />
          </li>

          <li><strong>2022-2023 (6 Month)</strong><br />
          Kyndryl (Thailand)<br />
          Position : Deskside Support<br />
          Responsibility : Starting from the deployment of the machine, down to win 10,
down to the program, remote to edit the user's program, set up user profile.<br />
          </li>
        </ul>
      </section>
    </main>
  );
}

export default Main;
