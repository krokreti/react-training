import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";

//describe define um suite
describe('Greeting component', () => {

    test('renders Hello World as a text', () => {
        // Arrange
        render(<Greeting/>)
    
        //Act
        // nothing
    
        // Asset
        const helloWorldElement = screen.getByText('Hello World', {exact: false})
        expect(helloWorldElement).toBeInTheDocument();
    });

    test('renders good to se you if the button was no clicked', () => {
        render(<Greeting/>)

        const paragraphElement = screen.getByText('It\'s good to see you', {exact: false})
        expect(paragraphElement).toBeInTheDocument();
    });

    test('renders Changed if the button was clicked', () => {
        render(<Greeting/>)

        //Act
        const buttonElement = screen.getByRole('button')
        userEvent.click(buttonElement)

        //Assert
        const outputElement = screen.getByText('Changed!');
        expect(outputElement).toBeInTheDocument();
    })

    test('does not render good to see you if the button was clicked', () => {
        //Arrange
        render(<Greeting/>)

        //Act
        const buttonElement = screen.getByRole('button')
        userEvent.click(buttonElement)

        //Assert
        const paragraphElement = screen.queryByText('good to see you', {exact: false});
        expect(paragraphElement).toBeNull();
    })

});

