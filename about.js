const user = {
    name: 'Miranda Rios',
    subheader: 'Cybersecurity Student',
    imageUrl: 'images/aboutme1.jpg',
    bio: 'I am a cybersecurity student passionate about technology and building creative projects. I enjoy solving problems, exploring security concepts, and designing user-friendly experiences. I am currently learning front-end development to complement my security skills. In my free time, I like to watch sports, read, and visit the beach'
};

    // Step one - Create a React element
const nameElement = React.createElement("h1", null, user.name);
const subHeaderElement = React.createElement("h2", null, user.subheader);
const imageElement = React.createElement("img", { src: user.imageUrl, alt: user.name, width: 200, height: 200 });
const descriptionElement = React.createElement("p", null, user.bio);

    // Step 2: Render the React element
ReactDOM.render(nameElement, document.getElementById("h1"));
ReactDOM.render(subHeaderElement, document.getElementById("subheader"));
ReactDOM.render(imageElement, document.getElementById("img"));
ReactDOM.render(descriptionElement, document.getElementById("content"));