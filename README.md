# Introduction
This web application has 3 different levels of access controls for normal users, managers and admins, they will have increasing levels of priviledge in that order. 
Based on their roles, users will be able to perform CRUD actions on banking transactions and  customer's personal information.

# System Overview

This will be a MERN Stack project, technologies utilised are as follows:
Front-end : React.js
Back-end: Node.js, Express.js
DB: MongoDB

# User Roles and Permissions
Normal
Can only view their business's data such as bank account number, address, and transaction history etc.
Cannot perform any CRUD operations.
3.2. Manager
Can view bank account numbers, addresses, and transaction history.
Can only update account number, business ‘s address, transaction information and user information etc.
3.3. Admin
Can perform all CRUD operations on users and datas according to bank (account number, address and transaction details etc).
Can view, create, update, and delete bank account number, addresses, and transaction details.
Can view, create, update, and delete users.

# Key decisions and tradeoffs you made in build
In my IM Service project, I strived to create a comprehensive solution that catered to the specific needs of different user roles. The project offered different functionality according to user’s role, viewing, updating, adding, and deleting information such as employee, customer and transaction details I had also incorporated the use of an AWS S3 bucket for seamless updates of user data (avatar).

However, as time was a constraint this limited the scope of my project, and I ended up focusing on only delivering the core feature (RBAC). 

The current implementation of the user interface was intentionally restricted to demonstrate specific actions. As such, there are opportunities for improvement in terms of UI design and functionality.

# Areas of improvement in system
While the project covers role definitions, restricted actions based on a user's role, admittedly the RBAC could be more granular. In banking, permissions to certain resources change often and the functionality to toggle permissions and/or granting them for a certain time period would be beneficial for larger organisations as well. An example of this would be contractor accounts or service accounts that teams would use specifically for one function. 

I think the main area of improvement for the project was the lack of emphasis on business accounts. For the next iteration, It would be beneficial to revamp the database to include sub-organisations (as enterprise companies could have acquired smaller businesses) as well as and only allowing users to perform actions on data/users belonging to their organisation.

To enhance the system further, I propose the introduction of:
1.	Performance Optimization: By fine-tuning algorithms and optimizing code, we can enhance the system's speed and efficiency. This may involve leveraging parallel processing, employing more advanced data structures and algorithms.

2.	Scalability: To handle increasing demands and accommodate growing user bases, the system can be made more scalable. This could involve utilizing cloud-based resources to ensure smooth operations even during peak usage periods.

3.	UI Enhancements: Improving the UI can greatly enhance overall system usability and user satisfaction. This may include redesigning the interface for better intuitiveness, incorporating responsive design principles for mobile devices, and conducting user testing to gather feedback for continuous improvement.

4.	Security and Privacy: Strengthening security measures is crucial in today's digital landscape. The system can be fortified by implementing robust authentication mechanisms, encryption protocols, and secure coding practices. Additionally, privacy features can be enhanced, ensuring compliance with relevant regulations such as data protection laws.

# Identity Management (IM) Service - BE
Given the increased scrutiny on cyber-security, and upcoming regulatory crackdown, we’d rather not leak our user’s data.

SME (small-medium enterprise) banking has business’ sign up for accounts (not just individuals). Depending on SME size they may need different levels of access control, such as:
* Small SMEs (e.g. sole traders) may just need one user
* Moderate size may need 2-5 users
* The largest may need features such as SSO, MFA, password policies, external identity provider, integration, etc.

Design and implement an IM system & API to manage users and their permissions. The system should allow a user to login and access some resource based on their permissions.



### What we Expect
The task is purposely left open-ended. You are **not** expected to built a fully functional IM service that caters for the variety of requirements in SME banking. Define your own scope to best showcase your abilities - determine which requirements can be built/fulfilled in the time you are given to complete this assignment. Include this scope and reasoning behind it in your submission in the README file.

Below are some requirements and recommendations:
* Requirements:
	* **must** - you are obliged to satisfy this requirement
	* **should** - recommended, but not critical
	* **may** - optional brownie points
* The system **must** allow:
	* CRUD of users
* The system **should** allow some of:
	* Restrict actions by permissions (e.g. restrict access to a bank account to certain individuals)
	* Check if user can perform a given action
	* User login
	* CRUD permissions
* The API **should** be used by some form of UI. This could be:
	* Basic functional API documentation e.g. Swagger/Readme.io
	* Custom UI (preferable)
* The solution **should** be readily accessed. This could be through either:
	* Containerisation for local deployment, with strong documentation on how to setup
	* Deployable to public cloud with instructions
	* Self hosted with a link included
* The solution **may** include a test suite
* The submissions **must** include a written summary as a `README.md`, that **should** cover
	* Instructions on how to deploy and run
	* Included scope and justification
	* Key decisions and tradeoffs you made in build
	* Areas of improvement in system

### Getting Started
To get started, please clone the repo [here](https://github.com/cxnpl-au/recruitment).

### Submitting
* Make your submission as a PR to the main branch
	* Under a new branch called  `submission/<your-email>`
* Ensure you have included the written summary `README` that covers the above points

Feel free to ask any questions, good luck!
