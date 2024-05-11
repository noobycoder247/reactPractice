function customRender(conatiner, element) {
    const customElement = document.createElement(element.type);
    for (let prop in element.props) {
        customElement.setAttribute(prop, element.props[prop]);
    }
    customElement.innerHTML = element.innerContent;
    conatiner.appendChild(customElement);
    console.log(customElement);
}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://bing.com',
        target: '_blank'
    },
    innerContent: 'Click Here'
}


const mainContainer = document.getElementById('root');
customRender(mainContainer, reactElement);